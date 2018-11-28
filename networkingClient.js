
class connection{
	//connects the computer to the server
	constructor(){
		this.socket = io()
	
		this.socket.on('playerconnect',function(pn){
			console.log("you are player"+pn);
			this.PlayerNumber = pn;
		});
		this.socket.on('msg',function(msg){
			alert(msg);
		});
	}
	messageNext(msg){
		this.socket.emit('msgNext',msg);

	}
	//updates server information
	updateServer(){}
	//notifies everyone of the new board state
	boardChanged(){};
	//alows the next person to go
	passTurn(){}
	
	

}


