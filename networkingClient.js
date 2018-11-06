//-----------------------------------------------------------
//                 client side                
//-----------------------------------------------------------

class connection{
	//connects the computer to the server
	constructor(){
	var socket = io()
	}
	//updates server information
	updateServer(){}
	//notifies everyone of the new board state
	boardChanged(){};
	//alows the next person to go
	passTurn(){}
}