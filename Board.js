

class Board{
    
    //var width;
    //var height;
    //var boardArray;
    //var boardHTML;
   // var boardAddress;
    
    constructor(w, h){
        this.width = w ;
        this.height = h;
        this.boardArray = [];
        
        for(var j = 0; j < this.height; j++){
            for(var i = 0; i < this.width; i++){ 
                    this.boardArray.push(0);
            }
        }
    }

   

    
    set(id, player){
        this.boardArray[id] = player;
    }
    
    get(id){
        /*if(x > this.width - 1 || y > this.height - 1 || y < 0 || x < 0){
            return null;
        }*/
        return this.boardArray[id];
    }
  
    getWidth(){
        return this.width; 
    }
  
    getHeight(){
        return this.height; 
    }
}




function test(message){
    window.alert(message); 
}


module.exports={
	Board: Board
}