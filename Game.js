class game(){
	constructor(){
		this.dictionary=new Dictionary();
		this.board=new Board();
		this.players=new Player()[];
		this.PointsToWin=1;
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
	
	
}