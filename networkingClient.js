class connection{
	//connects the computer to the server
	constructor(width, height){
		this.socket = io();
		socket.on('CreateGame',function(width,height){
			this.gameState=new Game(width,height);
		});
		socket.on('StartGame',function(){
//			this.gameState.StartGame()
		});
		socket.on('setWinPoints',function(points){
			this.gameState.setWinPoints();
		});
		socket.on('checkWin',function(player){
			this.gameState.checkWin(player);
		});
		socket.on('addPlayer',function(nickname, image){
			this.gameState.addPlayer(nickname,image);
		});
		socket.on('removePlayer',function(id){
			this.gameState.removePlayer(id);	
		});
		socket.on('updateTurn',function(){
			this.gameState.updateTurn();
		});
		socket.on('gameOver',function(){
			this.gameState.gameOver();
		});
		socket.on('lockBoard',function(newGame){
			this.gameState.lockBoard(newGame);
		});
	}	
	CreateGame(width,height){
		this.socket.emit('CreateGame',width,height);
	}
	StartGame(){
		this.socket.emit('StartGame')
	}
	setWinPoints(points){
		this.socket.emit('setWinPoints');
	}
	addPlayer(nickname, image){
		this.socket.emit('addPlayer',nickname,image);
	}
	removePlayer(id){
		this.socket.emit('removePlayer',id);	
	}
	updateTurn(){
		this.socket.emit('updateTurn');
	}	
	gameOver(){
		this.socket.emit('gameOver');
	}
	lockBoard(newGame){
		this.socket.emit('lockBoard',newGame);
	}
}




