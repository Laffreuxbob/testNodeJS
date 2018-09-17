var http = require('http');

var server = http.createServer(function(req, res) {
    res.writeHead(200,{"Content-Type": "text/plain"});
    res.write("testOK");

    switch(req.method) {
        case 'post':
            server.post('/todolist', function(req,res){
                const item = req.body.name;
                //Ajout item
                res.write("post");
                res.status(200);
                res.end();
            });
            break;
        case 'delete':
            server.delete('/todolist', function(req,res){
                const item = req.body.name;
                //Suppression item
                res.write("delete");
                res.status(410);
                res.end();
            });
            break;
        default:
            console.log("default");
            res.end();
    }
});

server.listen(8080);
server.get(/front/index.html);