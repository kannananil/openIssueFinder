const axios = require('axios');
const env = require('../../config/env');

const formatQuery = (queries) => Object.entries(queries).map(([ key, value ]) => `${key}:${value}`).join(' ');

const searchRepositories = async (req, res) => {
  const baseURL = env.GITHUB_API_BASE_URL;
  const token = env.GITHUB_API_TOKEN;
  const query = encodeURIComponent(formatQuery({topic: 'hacktoberfest', language: 'javascript'}));
  const url = `${baseURL}/search/repositories?q=${query}`;
  const requestConfig = {method: 'get', url: url, headers: { Authorization: `Bearer ${token}` },};

  axios(requestConfig)
    .then((response) => res.json(response.data))
    .catch((error) => res.status(500).json(error));
};


module.exports = { searchRepositories };