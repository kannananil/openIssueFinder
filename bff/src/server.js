const app = require('./api/app');
const env = require('./config/env');
const { info } = require('./logger');

const serverOnStart = () => info(`Started Listening at ${env.PORT}....!`)

app.listen(env.PORT, serverOnStart);
