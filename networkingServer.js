var http = require('http'),
	io = require('socket.io');
    fs = require('fs');

//var Game=require('./Game.js').game.getPlayer();
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
io=io.listen(server,function(){console.log('test')});
require('dns').lookup(require('os').hostname(), function (err, add, fam) {
  console.log('listening on: '+add+":"+PORT);
})


var PlayerNum=1;
var Users=[];
io.on('connection', function(socket){
	//when the client connects
	Users.push(socket);
	console.log("someone connected.\nthere are now "+Users.length+" users connected");
	//when the client disconnects
	socket.on('disconnect', function(){
		console.log('someone disconnected');
		Users.splice(Users.indexOf(socket),1);
	});
	//other  methods that have to be in here
		socket.on('CreateGame',function(width,height){
			console.log('creating game');
			io.emit('CreateGame',width,height);
		});
		socket.on('StartGame',function(){
			console.log('getting player0');
			Users[0].emit('getPlayer');
		});
		socket.on('addPlayer',function(nickname, image){
			console.log('adding player '+PlayerNum+' with the name of '+nickname);
			io.emit('addPlayer',nickname,image);
			if(PlayerNum!=Users.length){
				console.log('getting player'+PlayerNum);
				Users[PlayerNum].emit('getPlayer');
				PlayerNum++;
			}else{
				console.log('starting game');
				io.emit('StartGame');
			}
		});
		
		socket.on('setWinPoints',function(points){
			io.emit('setWinPoints',points);
		});
		socket.on('pushButton',function(id){
			console.log("a button was pushed");
			io.emit('pushButton',id);
		});

});




