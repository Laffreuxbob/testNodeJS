console.log("test");

const express = require('express');
const hostname = '127.0.0.1';
const port = 8080;
  
var server = express();

server.get('/', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    //res.write('Todo List');
});

server.listen(8080);