var express = require('express');
  
var server = express();
console.log("test");

// server.post('/todolist', function(req,res){
//     const item = req.body.name;
//     res.write("post");
//     res.status(200);
//     res.end();
// });

// server.delete('/todolist', function(req,res){
//     const item = req.body.name;
//     res.write("delete");
//     res.status(410);
//     res.end();
// });


server.listen(8080);
