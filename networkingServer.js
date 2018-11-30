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

///////////////////////on connect/////////////////////////////////////
//clients figures out their username and picture
//headClient figures out game paramiters
///////////////////////on game start//////////////////////////////////
//head client tells server that game is starting
//server tells all other clients the game is starting
//all clients tell server their username and picture
//server tells clients their player number
//client waits till he has all clients 
//server starts the game
///////////////////////on player start turn///////////////////////////
//server tells player that he is starting
///////////////////////on player end turn/////////////////////////////
//player tells server that it has taken it's turn
//client sends server the updated game state
//server updates the game state
//server gives all other clients the updated state
//clients update their game state
//next player starts their turn 
///////////////////////on game over///////////////////////////////////
//





//networking logic stuff
var gameState="";
io.on('connection', function(socket){
///////////////////////on connect/////////////////////////////////////
//clients figures out their username and picture
//headClient figures out game paramiters
///////////////////////on game start//////////////////////////////////
//head client tells server that game is starting
//server tells all other clients the game is starting
	socket.on('GameStart1',function(state){
		gameState=state;
		io.emit('GameStart1',state);
	}
//all clients tell server their username and picture
//server tells clients their player number
	socket.on('setPlayer',function(username, image){
		gameState.addPlayer(nickname, image);
		gameState.
	}
//client waits till he has all clients 
//server starts the game
///////////////////////on player start turn///////////////////////////
//server tells player that he is starting
///////////////////////on player end turn/////////////////////////////
//player tells server that it has taken it's turn
//client sends server the updated game state
//server updates the game state
//server gives all other clients the updated state
//clients update their game state
//next player starts their turn 
///////////////////////on game over///////////////////////////////////
//
	
	
	
	
});


