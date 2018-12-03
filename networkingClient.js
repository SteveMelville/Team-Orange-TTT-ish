class connection{
	//connects the computer to the server
	constructor(width, height){
		this.socket = io();
		this.socket.on('CreateGame',function(width,height){
			this.gameState=new game(width,height);
		});
		this.socket.on('StartGame',function(){
			this.gameState.printBoard();
			this.gameState.printLeaderboard();
		});
		this.socket.on('setWinPoints',function(points){
			this.gameState.setWinPoints();
		});
		this.socket.on('getPlayer',function(){
			socket.emit('addPlayer',this.nickname,this.image);
		});
		this.socket.on('addPlayer',function(nickname, image){
			this.gameState.addPlayer(nickname,image);
		});
		this.socket.on('gameOver',function(){
			this.gameState.gameOver();
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
	SetPlayer(nickname, image){
		this.nickname=nickname;
		this.image=image;
	}
	lockBoard(newGame){
		this.socket.emit('lockBoard',newGame);
	}
	pushButton(id){
	var item = document.getElementById(id);
	
	newGame.squaresPushed++;
	item.innerHTML = newGame.players[newGame.getTurn() - 1].getImage();
	scanBoard(newGame, id);
	newGame.board.set(id, newGame.getTurn());
	newGame.printLeaderboard();
	newGame.gameOver();
	if(newGame.checkWin(newGame.players[newGame.getTurn() - 1])){
		lockBoard(newGame);
		alert('Player ' + newGame.getTurn() + ' has won the game!');
	}	
	newGame.updateTurn();
}
	
	
}




