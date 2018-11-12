var http = require('http'),
	io = require('socket.io');
    fs = require('fs');
	
//-------------------------------------------------------------------
//                         server side
//-------------------------------------------------------------------
var server = http.createServer(function (req, res) {
	//get the 
	var url=req.url;
	if (url=="/"){
		url="/index.html";
	}
	if (url.indexOf('favicon.ico')!=-1){
		return;
	}
	//write the head
	fs.readFile(__dirname + url, function (err, data) {
		//if there is an error reading the file
		if (err) console.log(err);
		
		if(url.indexOf('.html') != -1){	
			res.writeHead(200, {'Content-Type': 'text/html'});
		}else if(url.indexOf('.js') != -1){
			res.writeHead(200, {'Content-Type': 'text/javascript'});
		}else if(url.indexOf('.css') != -1){
			res.writeHead(200, {'Content-Type': 'text/css'});
		}
		
		
		//write the body
		res.write(data);
		
		
		//write any footers
		res.end();
	})
}).listen(3000);


io.listen(server).on('connection', function(socket){
	//all the stuff to do when the socket connects
	console.log("someone has connected");
});







