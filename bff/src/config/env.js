const dotenv = require('dotenv')

dotenv.config({path:`${process.env.PWD}/.env`});

module.exports = {
  PORT: process.env.PORT || '3003',
};