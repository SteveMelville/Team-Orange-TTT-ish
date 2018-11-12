
class connection{
	//connects the computer to the server
	constructor(io){
		this.socket = io;
		this.socket.on('rescaleBoard',function(x,y){
			var newBoard2 = new board(x,y);
			newBoard2.printBoard();
		});
	}
	//updates server information
	updateServer(){}
	//notifies everyone of the new board state
	boardChanged(){};
	//alows the next person to go
	passTurn(){}
	
	
	
	sendBoardSize(x,y){
		this.socket.emit('rescaleBoard',x,y);	
	}
}


