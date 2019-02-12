const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('../index.route');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Enable CORS - Cross Origin Resource Sharing.
app.use(cors());

// Mount all routes on /api path.
app.use('/api', routes);

app.get('*', (req, res) => {
  res.redirect('https://project-fashion.github.io/backend/#/');
});

// #TODO: Additional non-API routes go here.

module.exports = app;
