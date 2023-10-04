/*File name: express.js
Student Name: Miha Morales
Student ID: 301297007
Date: 4/10/2023*/
const express = require('express');
const morgan = require('morgan');
const compression = require('compression');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const session = require('express-session');
const path = require('path');

module.exports = function () {
  const app = express();

  if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
  } else if (process.env.NODE_ENV === 'production') {
    app.use(compression());
  }

  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(methodOverride());

  // Define your session secret here (replace 'your-secret-key-here' with your actual secret key)
  //const sessionSecret = 'your-secret-key-here';
    const sessionSecret='5b727fce47813e4b2424a0320501a1b2401fd436646025705a6a47f35f8322da';
  app.use(session({
    saveUninitialized: true,
    resave: true,
    secret: sessionSecret
  }));

  app.set('views', './app/views');
  app.set('view engine', 'ejs');
app.use('/', require('../app/routes/index.server.routes.js'));

  app.use(express.static('./public'));

  return app;
};
