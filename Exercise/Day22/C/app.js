var http = require('http');
var fs = require('fs');


//this code will only show the index.html - not including css, pictures.    

/*http.createServer(function(req, res){
    
    if(req.url === '/'){
        res.writeHead(200, {'Content-Type': 'text/html'})
        fs.createReadStream(__dirname + '/flowershop/index.html').pipe(res);
    } else {
        res.writeHead(404);
        res.end()
    }
}).listen(8080, '127.0.0.1')
*/

//this code will render the whole flower shop


var path = require('path');


http.createServer(function(req,res){
    let filePath = req.url == '/' ? "index.html" : req.url;

    res.writeHead(200);

    fs.createReadStream(path.join(__dirname, 'flowershop1', filePath)).pipe(res);

}).listen(8080, '127.0.0.1')