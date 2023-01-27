const axios = require('axios');
const env = require('../../config/env');
const { info, error } = require('../../logger');

const formatQuery = (queries) => Object.entries(queries).map(([ key, value ]) => `${key}:${value}`).join(' ');

const searchRepositories = () => {
  const baseURL = env.GITHUB_API_BASE_URL;
  const token = env.GITHUB_API_TOKEN;
  const query = encodeURIComponent(formatQuery({ topic: 'hacktoberfest', language: 'javascript' }));
  const url = `${baseURL}/search/repositories?q=${query}`;
  const requestConfig = { method: 'get', url: url, headers: { Authorization: `Bearer ${token}` } };

  return new Promise((resolve, reject) => {
    axios(requestConfig)
      .then((response) => {
        info('Fetched repositories from github successfully!')
        resolve(response.data)
      })
      .catch((err) => {
        const { message, stack, code, status } = err;
        const errorDetails = { message, stack, code, status };
        error('Failed to fetch repositories from github!', errorDetails)
        reject(errorDetails)
      });
  })
}

module.exports = { searchRepositories }