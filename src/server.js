const http = require('http');
const express = require('express');
const app = express();
const logger = require('./logger/logger');

app.use(logger);
app.get('/', (req, res) => res.send("OKE"));

const server = http.createServer(app);

module.exports = server;
