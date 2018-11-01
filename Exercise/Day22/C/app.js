var http = require('http');
var fs = require('fs');
var path = require('path');


http.createServer(function(req,res){
    let filePath = req.url == '/' ? "index.html" : req.url;

    res.writeHead(200);

    fs.createReadStream(path.join(__dirname, 'flowershop1', filePath)).pipe(res);

}).listen(8080, '127.0.0.1')