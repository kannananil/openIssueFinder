const axios = require('axios');
const env = require('../../config/env');

const formatQuery = (queries) => Object.entries(queries).map(([ key, value ]) => `${key}:${value}`).join(' ');

const searchRepositories = () => {
  const baseURL = env.GITHUB_API_BASE_URL;
  const token = env.GITHUB_API_TOKEN;
  const query = encodeURIComponent(formatQuery({topic: 'hacktoberfest', language: 'javascript'}));
  const url = `${baseURL}/search/repositories?q=${query}`;
  const requestConfig = { method: 'get', url: url, headers: { Authorization: `Bearer ${token}` } };

  return new Promise((resolve, reject) => {
    axios(requestConfig)
      .then((response) => resolve(response.data))
      .catch((error) => reject(error));
  })
}

const listRepositories = async (req, res) => {
  const { repos } = req.app.locals
  const timeDifference = new Date().getTime() - new Date(repos?.refreshedAt).getTime();
  const isExpired = !repos?.refreshedAt || (timeDifference > 120 * 1000);
  if(isExpired) {
    return searchRepositories()
      .then((response) => {
        req.app.locals.repos = { refreshedAt: new Date().getTime(), data: response };
        res.json(response);
      })
      .catch((err) => res.status(500).json(err));
  }
  return res.json(repos?.data);
};

module.exports = { listRepositories };