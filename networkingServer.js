var http = require('http'),
	io = require('socket.io');
    fs = require('fs');
const PORT=3000;
const MAXPLAYERS=15;	
//-------------------------------------------------------------------
//                         server side
//-------------------------------------------------------------------
//do the web stuff
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
});
server.listen(PORT);
io=io.listen(server);









//networking logic stuff
var users=new Array(MAXPLAYERS);
io.on('connection', function(socket){
	playerNum=findPlayerNum();
	if(playerNum==-1){
		//throw a we are full error
	}else{
		users[playerNum]=socket
		socket.username=playerNum;
	}
	console.log("player"+socket.username+' has connected');
	socket.emit('playerconnect',socket.username);
	
	
	socket.on('disconnect',function(){
		users[socket.username]=null;
		console.log("player"+socket.username+" has disconnected");
		
	});
	socket.on('msgNext',function(msg){
		nextSocket=findNextSocket(socket.username);
		console.log(nextSocket.username);
		nextSocket.emit('msg',msg);
	});
	
	
	
	
});



//find the first unused player number
function findPlayerNum(){
	for(var i=0;i<MAXPLAYERS;i++){
		if(users[i]==null){
			return i;
		}
	}
	return -1
}
function findNextSocket(playerNum){
	if(playerNum<MAXPLAYERS){
		//throw an error
	}
	for(var i=playerNum+1;i!=playerNum;i=(i+1)%MAXPLAYERS){
		if(users[i]!=null){
			return users[i];
		}
	}return -1
}

