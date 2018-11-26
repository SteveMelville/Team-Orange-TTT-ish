class game{
	constructor(width, height){
		this.dictionary = new Dictionary();
		this.board = new Board(width, height);
		this.players = [];
		this.numPlayers = 0;		
		this.PointsToWin = 10;
		this.turn = 1;
		this.countedWords = [];
		
		this.addPlayer("bob", testX);
		this.addPlayer("bob", testO);
		/*this.addPlayer("bob", letterA);
		this.addPlayer("bob", letterB);
		this.addPlayer("bob", letterC);
		this.addPlayer("bob", letterD);
		this.addPlayer("bob", letterE);*/
		var player = 1
	}
	getDictionary(){
		return this.dictionary;
	}//returns a dictionary	
	getBoard(){
		return this.board;
	}//returns a board
	getPlayers(){
		return this.players;
	}//returns a list of players
	getWinPoints(){
		return this.winPoints;
	}//returns an integer corisponding to the win condition
	setWinPoints(points){
		this.PointssToWin=points;
	}
	checkWin(player){
		if(player.getScore()>=PointsToWin){
			return true;
		}else{
			return false;
		}
	}
	getFirstPlacePlayer(){
		winner = this.players[0]
		for(i=1;i < this.players.length;i++){
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
		for(var i = 0;i < this.players.length; i++){
			if(players[i].getID()==id){
				this.players.splice(i,1);
				this.numPlayers--;
				return ;
			}
		}
		//player not found
			
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
	
	printLeaderboard(){
		var leaderBoard = "";
		for(var i = 0; i < this.numPlayers; i++){
			leaderBoard += leader1;
			leaderBoard += i;
			leaderBoard += leader2;
			
			leaderBoard += leader3;
			leaderBoard += i + "id";
			leaderBoard += leader2;
			leaderBoard += i + 1;
			leaderBoard += leader4;
			
			leaderBoard += leader3;
			leaderBoard += i + "image";
			leaderBoard += leader2;
			leaderBoard += this.players[i].getImage();
			leaderBoard += leader4;
			
			leaderBoard += leader3;
			leaderBoard += i + "name";
			leaderBoard += leader2;
			leaderBoard += this.players[i].getNickname();
			leaderBoard += leader4;
			
			leaderBoard += leader3;
			leaderBoard += i + "score";
			leaderBoard += leader2;
			leaderBoard += this.players[i].getScore();
			leaderBoard += leader4;
			
			leaderBoard += leader5;
		}
		var item = document.getElementById("leader");
		item.innerHTML = leaderBoard;
	}
}

var newGame = new game(3,3);
newGame.board.printBoard();
newGame.printLeaderboard();
	
function pushButton(id){
	var item = document.getElementById(id);

	item.innerHTML = newGame.players[newGame.getTurn() - 1].getImage();
	scanBoard(newGame, id);
	newGame.board.set(id, newGame.getTurn());
	newGame.updateTurn();
	newGame.printLeaderboard();
}
