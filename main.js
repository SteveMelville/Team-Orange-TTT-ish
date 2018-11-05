



class board{
    
    //var width;
    //var height;
    //var boardArray;
    //var boardHTML;
   // var boardAddress;
    
    constructor(){
        this.width = 10;
        this.height = 10;
        this.boardArray = [];
        this.boardHTML = "";
        this.boardAddress = document.getElementById("board");
    }

   
    printBoard(){
        for(var i = 0; i < this.height; i++){
            this.boardHTML += "<tr>\n";

            for(var j = 0; j < this.width; j++){
                this.boardHTML += "<td id = '" + (i * this.width + j) + "'>hello</td>\n";
            }

            this.boardHTML += "</tr>\n";
        }
        this.boardAddress.innerHTML = boardHTML;
    }
}

const newBoard = new board();
newBoard.printBoard();


function test(message){
    window.alert(message); 
}
