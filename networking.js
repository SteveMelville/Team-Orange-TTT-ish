var http = require('http'),
    fs = require('fs');

http.createServer(function (req, res) {
	var url=req.url;
	if (url=="/"){
		url="/index.html";
	}
	
    if(url.indexOf('.html') != -1){ //req.url has the pathname, check if it conatins '.html'

		
		fs.readFile(__dirname + url, function (err, data) {
			if (err) console.log(err);
			res.writeHead(200, {'Content-Type': 'text/html'});
			res.write(data);
			res.end();
		});

	}

    if(url.indexOf('.js') != -1){ //req.url has the pathname, check if it conatins '.js'

		fs.readFile(__dirname + url, function (err, data) {
			if (err) console.log(err);
			res.writeHead(200, {'Content-Type': 'text/javascript'});
			res.write(data);
			res.end();
		});

    }

    if(url.indexOf('.css') != -1){ //req.url has the pathname, check if it conatins '.css'

		fs.readFile(__dirname + url, function (err, data) {
			if (err) console.log(err);
			res.writeHead(200, {'Content-Type': 'text/css'});
			res.write(data);
			res.end();
		});

    }

}).listen(3000);