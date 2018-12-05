class connection{
	//connects the computer to the server
	constructor(width, height){
		this.socket = io();
		this.socket.on('CreateGame',function(width,height){
			console.log('creating a new game');
			this.gameState=new game(width,height,false);
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
		this.socket.on('getPlayer',function(PN){
			console.log('getting player'+PN);
			images[PN]
			
			
			this.emit('addPlayer',this.nickname,images[PN]);
			this.PlayerNumber=PN
		});
		this.socket.on('addPlayer',function(nickname, image){
			console.log('adding player ' + nickname +' with the image of ' + image);
			this.gameState.addPlayer(nickname,image);
		});
		this.socket.on('pushButton',function(id){
			this.gameState.pushButton(id);
			if(this.gameState.getTurn()==this.PlayerNumber&&this.gameState.Over==false){
				alert('it is now your turn');
			}
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
	SetPlayer(nickname){
		this.socket.nickname=nickname;
	}
	pushButton(id){
		if(this.socket.gameState.getTurn()==this.socket.PlayerNumber){
			this.socket.emit('pushButton',id);
		}
	}
	
	
}




