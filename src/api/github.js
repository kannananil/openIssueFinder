const axios = require('axios');
const dotenv = require('dotenv');
const fs = require('fs');

dotenv.config()

const formatQuery = (queries) => Object.entries(queries).map(([ key, value ]) => `${key}:${value}`).join(' ');

export const searchRepositories = (queries) => {
  const baseURL = process.env.GITHUB_API_BASE_URL;
  const token = process.env.GITHUB_API_TOKEN;
  const query = encodeURIComponent(formatQuery(queries));
  const url = `${baseURL}/search/repositories?q=${query}`;
  const requestConfig = {
    method: 'get',
    url: url,
    headers: { Authorization: `token ${token}`, 'Content-Type': 'application/json' },
  };
  axios(requestConfig)
    .then((res) => fs.writeFileSync('out.json', JSON.stringify(res.data), 'utf-8'))
    .catch((err) => console.log(err));
};
