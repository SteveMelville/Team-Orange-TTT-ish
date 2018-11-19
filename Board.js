const letterA = "<img src='assets/A.png'>";
const letterB = "<img src='assets/B.png'>";
const letterC = "<img src='assets/C.png'>";
const letterD = "<img src='assets/D.png'>";
const letterE = "<img src='assets/E.png'>";
const letterF = "<img src='assets/.png'>";
const letterG = "<img src='assets/.png'>";
const letterH = "<img src='assets/.png'>";
const letterI = "<img src='assets/.png'>";
const letterJ = "<img src='assets/.png'>";
const letterK = "<img src='assets/.png'>";
const letterL = "<img src='assets/.png'>";
const letterM = "<img src='assets/.png'>";
const letterN = "<img src='assets/.png'>";
const letterO = "<img src='assets/.png'>";
const letterP = "<img src='assets/.png'>";
const letterQ = "<img src='assets/.png'>";
const letterR = "<img src='assets/.png'>";
const letterS = "<img src='assets/.png'>";
const letterT = "<img src='assets/.png'>";
const letterU = "<img src='assets/.png'>";
const letterV = "<img src='assets/.png'>";
const letterW = "<img src='assets/.png'>";
const letterX = "<img src='assets/.png'>";
const letterY = "<img src='assets/.png'>";
const letterZ = "<img src='assets/.png'>";

const testX = "<img src='assets/testX.png'>";
const testO = "<img src='assets/testO.png'>";
const blank = ""; //"<img src='assets/testBlank.png'>";
                                      

var player1 = testX;
var player2 = testO;
var player3 = letterA;
var player4 = letterB;
var player5 = letterC;
var player6 = letterD;
var player7 = letterE;
var player8 = letterF;
var player9 = letterG;
var player10 = letterH;
var player11 = letterI;
var player12 = letterJ;
var player13 = letterK;
var player14 = letterL;
var player15 = letterM;



var numPlayers = 7;
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
        this.boardArray[id] = player;
    }
    
    get(x, y){
        if(x > this.width || y > this.height || y < 0 || x < 0){
            return null;
        }
        return this.boardArray[(this.width * y) + x];
    }
}

const newBoard = new board(11,11);
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
}




function test(message){
    window.alert(message); 
}
