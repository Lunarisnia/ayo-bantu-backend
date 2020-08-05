const http = require('http');
const express = require('express');
const app = express();
const logger = require('./logger/logger');
const appMiddleware = require('./middlewares/app.middleware');
const indexRoute = require('./routes/index');

app.use(appMiddleware);
app.use(logger);
app.use(indexRoute);

const server = http.createServer(app);

module.exports = server;
