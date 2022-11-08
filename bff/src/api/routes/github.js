const express = require('express');
const githubHandlers = require('../handlers/github');

const githubRouter = express.Router();

githubRouter.get('/repositories', githubHandlers.searchRepositories)

module.exports = githubRouter;