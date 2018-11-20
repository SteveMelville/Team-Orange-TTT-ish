class game{
	constructor(width, height){
		//this.dictionary = new Dictionary();
		this.board = new Board(width, height);
		this.players = [];
		this.numPlayers = 0;		
		this.PointsToWin = 1;
		this.turn = 1;
		this.countedWords = [];
		
		this.addPlayer("bob", testX.png);
		this.addPlayer("bob", testO.png);
		this.addPlayer("bob", A.png);
		this.addPlayer("bob", B.png);
		this.addPlayer("bob", C.png);
		this.addPlayer("bob", D.png);
		this.addPlayer("bob", E.png);
		this.addPlayer("bob", F.png);
	}
	getDictionary(){}//returns a dictionary	
	getBoard(){}//returns a board
	getPlayers(){}//returns a list of players
	getWinPoints(){}//returns an integer corisponding to the win condition
	setWinPoints(condition){}
	checkWin(player){
		if(player.getScore()>=PointsToWin){
			return true;
		}else{
			return false;
		}
	}
	getFirstPlacePlayer(){
		winner = this.players[0]
		for(i=1;i<this.players.length;i++){
			if(this.players[i].getScore>winner.getScore){
				winner=this.players[i];
			}
		}
		return winner;
	}
	
	addPlayer(nickname, image){
		this.players.push(new Player(++this.numPlayers, nickname, image));	
	}
			    
	removePlayer(id){
			
	}
		
	getTurn(){
		return this.turn;
	}
	updateTurn(){
		if(this.turn < this.numPlayers){
			this.turn++;
		}
		else{
			this.turn = 1;
		}
	}
}

var newGame = new game(15,15);
newGame.board.printBoard();
	
function pushButton(id){
    var item = document.getElementById(id);
    
    item = newGame.players[newGame.getTurn() - 1].getImage();
    //scanBoard(newBoard, id);
    newGame.board.set(id, newGame.getTurn());
    newGame.updateTurn();
}
