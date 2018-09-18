const http = require('http');

const hostname = '127.0.0.1';
const port = 8080;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.write('test_START\n');

    res.write()

    switch(req.method) {
        case 'post':
            server.post('/todolist', function(req,res){
                const item = req.body.name;
                //Ajout item
                res.write("post");
                res.status(200);

                console.log("Method : Post");
                //res.end();
            });
            break;
        case 'delete':
            server.delete('/todolist', function(req,res){
                const item = req.body.name;
                //Suppression item
                res.write("delete");
                res.status(410);

                console.log("Method : Delete");
                //res.end();
            });
            break;
        default:
            console.log("default");
            //res.end();
    }

    res.write('test_END');
    res.end();
});

server.listen(port, hostname, () => {
    console.log('Server running at http://' + hostname + ':' + port + '/');  
})

