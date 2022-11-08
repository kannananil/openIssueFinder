const express = require('express');
const logger = require('morgan');
const githubRouter = require('./routes/github');

const app = express();

app.locals = {};

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true, limit: '50mb'}));

const healthCheckHandler = (req, res) => res.json({ message: 'Healthy!' });

app.get('/api/health-check', healthCheckHandler);

app.use('/api/github', githubRouter)

module.exports = app;
