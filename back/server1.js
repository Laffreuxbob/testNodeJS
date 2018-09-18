console.log("start");

const http = require('http');

http.createServer(function(req,res) {
    res.write("test");
    res.end();
}).listen(8080, '127.0.0.1');

console.log('end');