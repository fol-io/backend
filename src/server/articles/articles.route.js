const express = require('express');

const controller = require('./articles.controller');

const router = express.Router(); // eslint-disable-line new-cap

router.route('/');

router.post('/new', (req, res) => {
  const token = req.get('token') ? req.get('token') : null;
  if (token !== null) {
    controller.newArticle(token, req.body).then((article) => {
      res.status(200).json({
        article
      });
    }).catch((error) => {
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

module.exports = router;
