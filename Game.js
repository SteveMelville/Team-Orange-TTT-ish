class game{
	constructor(width, height){
		//this.dictionary = new Dictionary();
		this.board = new Board(width, height);
		this.players = [];
		this.numPlayers = 0;		
		this.PointsToWin = 1;
		this.turn = 1;
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
		winner=this.players[0]
		for(i=1;i<this.players.length;i++){
			if(this.players[i].getScore>winner.getScore){
				winner=this.players[i];
			}
		}
		return winner;
	}
	
	addPlayer(nickname, image){
		player.push(new Player(++numPlayers_, nickname, image));	
	}
			    
	removePlayer(id){
			
	}
		
	getTurn(){
		return turn;
	}
	updateTurn(){
		if(turn < numPlayers){
			turn++;
		}
		else{
			turn = 1;
		}
	}
}

var newGame = new game(15,15);
newGame.board.printBoard();
	
function pushButton(id){
    var item = document.getElementById(id);
    
    switch(newGame.getTurn()){
        case 1: item.innerHTML = player1;
                break;
        case 2: item.innerHTML = player2;
                break;
        case 3:  item.innerHTML = player3;
                break;
        case 4:  item.innerHTML = player4;
                break;
        case 5:  item.innerHTML = player5;
                break;
        case 6:  item.innerHTML = player6;
                break;
        case 7:  item.innerHTML = player7;
                break;
        case 8:  item.innerHTML = player8;
                break;
        case 9:  item.innerHTML = player9;
                break;
        case 10:  item.innerHTML = player10;
                break;
        case 11:  item.innerHTML = player11;
                break;
        case 12:  item.innerHTML = player12;
                break;
        case 13:  item.innerHTML = player13;
                break;
        case 14:  item.innerHTML = player14;
                break;
        case 15:  item.innerHTML = player15;
                break;
    }
    //scanBoard(newBoard, id);
    newGame.board.set(id, turn);
    newGame.updateTurn();
}
