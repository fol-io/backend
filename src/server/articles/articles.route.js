const express = require('express');
const config = require('../../config/config');

const controller = require('./articles.controller');

const multer = require('multer');

const upload = multer({ dest: 'uploads/' });
const Upload = require('s3-uploader');

const client = new Upload(config.s3Bucket, {
  aws: {
    path: 'article/image',
    region: config.s3Region,
    acl: 'public-read',
    accessKeyId: config.awsAccessKey,
    secretAccessKey: config.awsSecretKey
  },
  cleanup: {
    versions: true,
    original: true
  },
  versions: [
    {
      maxWidth: 400,
      aspect: '16:10',
      suffix: '-standard'
    },
    {
      maxWidth: 300,
      aspect: '1:1',
      suffix: '-square'
    }
  ]
});

const router = express.Router(); // eslint-disable-line new-cap

router.route('/');

router.get('/get/:bodyPart?', (req, res) => {
  const token = req.get('token') || null;
  const bodyPart = req.params.bodyPart || null;
  if (token !== null) {
    controller
      .getUserArticles(token, bodyPart)
      .then((articles) => {
        res.status(200).json({
          articles
        });
      })
      .catch((error) => {
        res.status(400).json({
          error
        });
      });
  } else {
    res.status(401).json({
      error: 'No token'
    });
  }
});

router.post('/new', upload.single('image'), (req, res) => {
  const token = req.get('token') || null;
  if (token !== null) {
    if (req.file) {
      client.upload(req.file.path, {}, (error, versions) => {
        if (error) {
          res.status(400).json({
            error: error.message
          });
        } else {
          const image = versions[0];
          const urlArray = image.url.split('-');
          urlArray.pop();
          const url = urlArray.join('-');
          controller
            .newArticle(token, req.body, url)
            .then((article) => {
              res.status(200).json({
                article
              });
            })
            .catch((error) => { // eslint-disable-line no-shadow
              res.status(400).json({
                error
              });
            });
        }
      });
    }
  } else {
    res.status(401).json({
      error: 'No token'
    });
  }
});

module.exports = router;
