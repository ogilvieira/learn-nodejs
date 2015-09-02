// request http node module
var http = require('http');

// create server
var server = http.createServer(function(request, response){
	response.writeHead(200, {"Content-Type" : "text/html"});
	response.write("<h1>Hello World!</h1>");
	response.write("<br>");
	response.write("<h3>First nodejs lesson</h3>");
	response.end();
});

// show message when server run
server.listen(3000, function(){
	console.log('Server is run now!');
});