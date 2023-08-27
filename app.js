const express = require('express');
const next = require('next');

const app = next({dev: true});
const handle = app.getRequestHandler();

const server = express();
server.use(handle);

server.listen(3000, () => {
    console.log('Server started on port 3000');
});