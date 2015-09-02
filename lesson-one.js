// request http node module
var http = require('http');

// create server
var server = http.createServer(function(request, response){
	response.writeHead(200, {"Content-Type" : "text/html"});
	response.write("<h1>Hello World!</h1>");
	response.end();
});

// run server in localhost:3000
server.listen(3000);