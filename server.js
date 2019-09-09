const express = require('express');

const AccountsRouter = require('./accounts/acounts-router.js');

const server = express();

server.use(express.json());
server.use('/api/accounts', AccountsRouter);

server.get("/", (req, res) => {
    res.send("<h2>Conntected to Api</h2>");
});

module.exports = server;