



class board{
    
    //var width;
    //var height;
    //var boardArray;
    //var boardHTML;
   // var boardAddress;
    
    constructor(w, h){
        this.width = w;
        this.height = h;
        this.boardArray = [];
        this.boardHTML = "";
        this.boardAddress = document.getElementById("board");
        
        for(var i = 0; i < (w * h); i++){
            this.boardArray.push(0);
        }
    }

   
    printBoard(){
        for(var i = 0; i < this.height; i++){
            this.boardHTML += "<tr>\n";

            for(var j = 0; j < this.width; j++){
                this.boardHTML += "<td id = '" + (i * this.width + j) + "'>hello</td>\n";
            }

            this.boardHTML += "</tr>\n";
        }
        this.boardAddress.innerHTML = this.boardHTML;
    }
    
    get(x, y){
        if(x > this.width || y > this.height){
            return null;
        }
        return this.boardArray[(this.width * y) + x];
    }
}

const newBoard = new board(3,3);
newBoard.printBoard();



function test(message){
    window.alert(message); 
}
