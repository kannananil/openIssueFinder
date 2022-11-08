const dotenv = require('dotenv')

dotenv.config({path:`${process.env.PWD}/.env`});

module.exports = {
  PORT: process.env.PORT || '3003',
  GITHUB_API_BASE_URL: process.env.GITHUB_API_BASE_URL,
  GITHUB_API_TOKEN: process.env.GITHUB_API_TOKEN,
};