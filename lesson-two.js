// request http node module
var http = require('http');

// create server
var server = http.createServer(function(request, response){
	response.writeHead(200, {"Content-Type" : "text/html"});

	if( request.url === '/' ){
		response.write("<h1>Main Page</h1>");
	} else if( request.url === '/contact') {
		response.write("<h1>Contact Page</h1>");
	} else if( request.url === '/clients') {
		response.write("<h1>Clients Page</h1>");
	} else {
		response.write("<h1>404 Not Found.</h1>");
	}

	response.end();
});

// show message when server run
server.listen(3000, function(){
	console.log('Lesson 2 - Server is run now! and my app have routes.');
});