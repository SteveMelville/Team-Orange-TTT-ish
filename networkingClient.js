class connection{
	//connects the computer to the server
	constructor(width, height){
		this.socket = io();
		this.socket.on('CreateGame',function(width,height){
			console.log('creating a new game');
			this.gameState=new game(width,height);
		});
		this.socket.on('StartGame',function(){
			console.log('starting a new game');
			this.gameState.printBoard();
			this.gameState.printLeaderboard();
		});
		this.socket.on('setWinPoints',function(points){
			console.log('setting the points to win to ' + points);
			this.gameState.setWinPoints(points);
		});
		this.socket.on('getPlayer',function(){
			console.log('getting player');
			this.emit('addPlayer',this.nickname,this.image);
		});
		this.socket.on('addPlayer',function(nickname, image){
			console.log('adding player ' + nickname +' with the image of ' + image);
			this.gameState.addPlayer(nickname,image);
		});
		this.socket.on('pushButton',function(id){
			this.gameState.pushButton(id);
		});

	}	
	CreateGame(width,height){
		this.socket.emit('CreateGame',width,height);
	}
	StartGame(){
		this.socket.emit('StartGame')
	}
	setWinPoints(points){
		this.socket.emit('setWinPoints',points);
	}
	SetPlayer(nickname, image){
		this.socket.nickname=nickname;
		this.socket.image=image;
	}
	pushButton(id){
		this.socket.emit('pushButton',id);
	}
	
	
}




