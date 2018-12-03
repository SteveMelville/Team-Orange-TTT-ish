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
io=io.listen(server);



var PlayerNum=0;
var Users=[];
io.on('connection', function(socket){
	//when the client connects
	Users.push(socket);
	//when the client disconnects
	socket.on('disconnect', function(){
		Users.splice(list.indexOf(socket),1);
	});
	//other  methods that have to be in here
		socket.on('CreateGame',function(width,height){
			io.emit('CreateGame',width,height);
		});
		socket.on('StartGame',function(){
			Users[PlayerNum++].emit('getPlayer');
		});
		socket.on('addPlayer',function(nickname, image){
			io.emit('addPlayer',nickname,image);
			if(PlayerNum!=Users.length){
				users[PlayerNum++].emit('getPlayer');
			}else{
				io.emit('StartGame');
			}
		});
		
		socket.on('setWinPoints',function(points){
			io.emit('setWinPoints');
		});
		socket.on('checkWin',function(player){
			io.emit('checkWin',player);
		});
		socket.on('removePlayer',function(id){
			io.emit('removePlayer',id);	
		});
		socket.on('updateTurn',function(){
			io.emit('updateTurn');
		});
		socket.on('gameOver',function(){
			io.emit('gameOver');
		});
		socket.on('lockBoard',function(newGame){
			io.emit('lockBoard',newGame);
		});

});




