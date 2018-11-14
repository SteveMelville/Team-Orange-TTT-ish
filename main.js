const player1 = "<img src='assets/testX.png'>";
const player2 = "<img src='assets/testO.png'>";
const blank = "<img src='assets/testBlank.png'>";
const numPlayers = 2;

var turn = 0;

class board{
    
    //var width;
    //var height;
    //var boardArray;
    //var boardHTML;
   // var boardAddress;
    
    constructor(w, h){
        this.width = w + 2;
        this.height = h + 2;
        this.boardArray = [];
        this.boardHTML = "";
        this.boardAddress = document.getElementById("board");
        
        for(var j = 0; j < this.height; j++){
            for(var i = 0; i < this.width; i++){
                if(j == 0 || j == this.height - 1 || i == 0 || i == this.width - 1){
                    this.boardArray.push(null);
                }
                else{
                    this.boardArray.push(0);
                }
            }
        }
    }

   
    printBoard(){
        var id = 0;
        for(var i = 0; i < this.height; i++){
            this.boardHTML += "<tr>\n";
            for(var j = 0; j < this.width; j++){
                id = i * this.width + j;
                this.boardHTML += "<td id = '" + id + "'>";
                
                switch(this.boardArray[id]){
                    case 0: this.boardHTML += "<button type='button' onclick='pushButton(" + id + ")'>" + blank + "</button>";
                            break;
                    case 1: this.boardHTML += player1;
                            break;
                    default: break;
                }
                
                this.boardHTML += "</td>\n";
            }

            this.boardHTML += "</tr>\n";
        }
        this.boardAddress.innerHTML = this.boardHTML;
    }
    
    set(id){
        var item = document.getElementById(id);
        item.innerHTML = player1;
    }
    
    get(x, y){
        if(x > this.width || y > this.height){
            return null;
        }
        return this.boardArray[(this.width * y) + x];
    }
}

function pushButton(id){
    var item = document.getElementById(id);
    
    switch(turn){
        case 0: item.innerHTML = player1;
                break;
        case 1: item.innerHTML = player2;
                break;
        
    }
    if(turn < numPlayers - 1){
        turn++;
    }
    else{
        turn = 0;
    }
}

const newBoard = new board(11,11);
newBoard.printBoard();


function test(message){
    window.alert(message); 
}
