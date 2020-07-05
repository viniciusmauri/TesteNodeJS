const express = require('express');
const bodyParser = require('body-parser');
const config = require('config');
const cors = require('cors');
const { [process.env.NODE_ENV]: corsOptions } = require('./env/index');
const routes = require('../routes');
const database = require('../config/database/mongodb');

  const app = express();

  database.connect();

  app.set('port', 3000);
  app.use(bodyParser.json());
  app.use(cors(corsOptions));
  app.use(bodyParser.urlencoded({ extended: true }));


  Object.keys(routes).forEach((key) => app.use(`/api/v1/${key}`, routes[key]));

  module.exports = app;
