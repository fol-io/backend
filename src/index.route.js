const express = require('express');
const articleRoutes = require('./server/articles/articles.route');
const authRoutes = require('./server/auth/auth.route');

const router = express.Router(); // eslint-disable-line new-cap

// #TODO: Change to your model.
router.use('/articles', articleRoutes);

router.use('/auth', authRoutes);

module.exports = router;
