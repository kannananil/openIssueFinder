const express = require('express');
const logger = require('morgan');
const githubRouter = require('./routes/github');
const { info, error } = require('../logger');
const { searchRepositories } = require('./gateway/github');

const healthCheckHandler = (req, res) => res.json({ message: 'Healthy!' });

const initialiseApp = () => {
  const app = express();

  app.locals = {};

  app.use(logger('dev'));
  app.use(express.json());
  app.use(express.urlencoded({extended: true, limit: '50mb'}));

  info('Configured app middlewares successfully!');

  app.get('/api/health-check', healthCheckHandler);

  app.use('/api/github', githubRouter);

  info('Configured app routes successfully!');

  searchRepositories()
    .then((response) => {
      app.locals.repos = { refreshedAt: new Date().getTime(), data: response };
      info('Initialised app data successfully!');
    })
    .catch((err) => error('Failed to initialise app data!', err));

  info('App initialisation completed successfully!');

  return app;
}

const app = initialiseApp()

module.exports = app;
