const player1 = "<img src='assets/testX.png'>";
const player2 = "<img src='assets/testO.png'>";
const player3 = "<img src='assets/'>";
const player4 = "<img src='assets/'>";
const player5 = "<img src='assets/'>";
const player6 = "<img src='assets/'>";
const player7 = "<img src='assets/'>";
const player8 = "<img src='assets/'>";
const player9 = "<img src='assets/'>";
const player10 = "<img src='assets/'>";
const player11 = "<img src='assets/'>";
const player12 = "<img src='assets/'>";
const player13 = "<img src='assets/'>";
const player14 = "<img src='assets/'>";
const player15 = "<img src='assets/'>";
const blank = "<img src='assets/testBlank.png'>";


var numPlayers = 2;
var turn = 1;

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
    
    set(id, player){
        boardArray[id] = player;
    }
    
    get(x, y){
        if(x > this.width || y > this.height || y < 0 || x < 0){
            return null;
        }
        return this.boardArray[(this.width * y) + x];
    }
}

const newBoard = new board(3,3);
newBoard.printBoard();

function pushButton(id){
    var item = document.getElementById(id);
    
    switch(turn){
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
    newBoard.set(id, turn);
    if(turn < numPlayers){
        turn++;
    }
    else{
        turn = 1;
    }
    test(newBoard.get(1,1));
}




function test(message){
    window.alert(message); 
}
