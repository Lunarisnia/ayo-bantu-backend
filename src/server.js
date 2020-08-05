const http = require('http');
const express = require('express');
const app = express();

app.get('/', (req, res) => res.send("OKE"));

const server = http.createServer(app);

module.exports = server;
