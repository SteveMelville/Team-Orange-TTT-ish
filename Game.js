//a class that holds the game state and methods that controll the high end game functions
class game{
	constructor(width, height, scrabble){
		this.dictionary = new Dictionary();
		this.board = new Board(width, height);
		this.squaresPushed = 0;
		this.players = [];
		this.numPlayers = 0;		
		this.PointsToWin = 1;
		this.turn = 1;
		this.countedWords = [];
		this.isScrabble = scrabble;
		
		this.printScrabble();
		this.printBoard();
		this.printLeaderboard();
		
		this.addPlayer("bob", testX);
		this.addPlayer("Player", testO);
		/*this.addPlayer("Player2", images[0]);
		this.addPlayer("bob", images[2]);
		this.addPlayer("bob", images[3]);
		this.addPlayer("bob", images[4]);
		this.addPlayer("bob", images[5]);
		this.addPlayer("bob", images[6]);
		this.addPlayer("bob", images[7]);
		this.addPlayer("bob", images[8]);
		this.addPlayer("bob", images[9]);
		this.addPlayer("bob", images[27]);*/
		var player = 1
	}
	//returns the game's dictionary
	getDictionary(){
		return this.dictionary;
	}
	//returns the game board
	getBoard(){
		return this.board;
	}
	//returns a list of all the players
	getPlayers(){
		return this.players;
	}
	//returns the player with the given player ID
	getPlayer(id){
		for(var i=0;i<players.length;i++){
			if(players[i].getID==id){
				return players[i];
			}
		}
	}
	//returns how many points there need to be to win
	getWinPoints(){
		return this.winPoints;
	}
	//sets how many points there need to be to win
	setWinPoints(points){
		this.PointsToWin=points;
	}
	//returns true if the player has won
	checkWin(player){
		if(player.getScore()>=this.PointsToWin){
			return true;
		}else{
			return false;
		}
	}
	//returns the player in first place
	getFirstPlacePlayer(){
		winner = this.players[0]
		for(i=1;i < this.players.length;i++){
			if(this.players[i].getScore>winner.getScore){
				winner=this.players[i];
			}
		}
		return winner;
	}
	//adds a new player to the game
	addPlayer(nickname, image){
		this.players.push(new Player(++this.numPlayers, nickname, image));	
	}
	//takes a player out of the game((messes up the player ID))
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
		var leaderBoard = "<tr>	<th>#</th> <th>Image</th> <th>Name</th> <th>Score</th> </tr>";
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
	
	printBoard(){
		var id = 0;
		var boardHTML = "";
		for(var i = 0; i < this.board.height; i++){
		    boardHTML += "<tr>\n";
		    for(var j = 0; j < this.board.width; j++){
			id = i * this.board.width + j;
			boardHTML += "<td id = '" + id + "'>";

			switch(this.board.boardArray[id]){
			    case 0: boardHTML += "<button type='button' onclick='pushButton(" + id + ")'></button>";
				    break;
			    case 1: boardHTML += player1;
				    break;
			    default: break;
			}

			boardHTML += "</td>\n";
		    }

		    boardHTML += "</tr>\n";
		}
		
        	var boardAddress = document.getElementById("board");
		boardAddress.innerHTML = boardHTML;
    	}
	
	printScrabble(){
		if(this.isScrabble){
			var letterBoard = document.getElementById("scrabble");
			letterBoard.innerHTML += "<tr>";
			for(var i = 1; i < 8; i++){
				letterBoard.innerHTML += "<td><button type='button' id = 'letter" + i + "' onclick='changeLetter(letter" + i + ")'></button></td>";
			}
			letterBoard.innerHTML += "</tr>";
			for(var i = 0; i < 7; i++){
				var id = "letter" + i;
				this.randomLetter(id);
			}
		}
	}
	
	randomLetter(id){
		var letter = document.getElementById(id);
		letter.innerHTML = "";
		letter.innerHTML += images[Math.floor(Math.random() * Math.floor(26)) + 1];
	}
	
	//Work in progress. Function to output a win condition
	gameOver(){
		var numSquares = this.board.height * this.board.width;
		
		if(numSquares == this.squaresPushed)
			alert("Game is over!");
	      }
}

var newGame = new game(3,3,true);
	
function pushButton(id){
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

function lockBoard(newGame){
	for(var i = 0; i < (newGame.board.getWidth() * newGame.board.getHeight()); i++){
		if (newGame.board.boardArray[i] == 0){
			var button = document.getElementById(i);
			button.innerHTML = blank;
		}	
	}	
	
}
