var http = require('http')
	,view =  require('fs')
	,server = http.createServer(function(req, res){

		res.writeHead(200, {"Content-Type" : "text/html"});

		if ( req.url === '/' ) {
			view.readFile(__dirname+'/views-lesson-four/home.html', function(err, html){
				if(err) throw err;
				res.write(html);
				res.end();
			});
		} else if ( req.url === '/contacts' ) {
			view.readFile(__dirname+'/views-lesson-four/contacts.html', function(err, html){
				if(err) throw err;
				res.write(html);
				res.end();
			});			
		} else {
			res.write("<h1>404</h1>");
			res.end();
		}
	});

server.listen(3000, function(){
	console.log("Server run.");
});