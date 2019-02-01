const express = require('express');
const jwt = require('jsonwebtoken');
const controller = require('./auth.controller');
const config = require('../../config/config');

const router = express.Router(); // eslint-disable-line new-cap

router.route('/');

router.post('/signup', (req, res) => {
  controller
    .signup(req.body)
    .then((user) => {
      logUserIn(res, user, 'signup');
    })
    .catch((error) => {
      res.status(400).json({
        signup: 'fail',
        error
      });
    });
});

router.post('/login', (req, res) => {
  controller
    .login(req.body.email, req.body.password)
    .then((user) => {
      logUserIn(res, user, 'login');
    })
    .catch((error) => {
      res.status(400).json({
        login: 'fail',
        error
      });
    });
});

router.post('/getuser', (req, res) => {
  const token = req.body.token;
  controller.getUser(token).then((user) => {
    res.status(200).json({
      user,
      token
    });
  });
});

function logUserIn(res, user, type) {
  const token = jwt.sign(
    {
      _id: user._id
    },
    config.jwtSecret,
    {
      expiresIn: '60 days'
    }
  );
  if (type === 'login') {
    res.status(200).json({
      login: 'success',
      token
    });
  } else if (type === 'signup') {
    res.status(200).json({
      signup: 'success',
      token
    });
  }
}

// #TODO: Implement thing.route.js.

module.exports = router;
