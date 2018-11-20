const letterA = "<img src='assets/A.png'>";
const letterB = "<img src='assets/B.png'>";
const letterC = "<img src='assets/C.png'>";
const letterD = "<img src='assets/D.png'>";
const letterE = "<img src='assets/E.png'>";
const letterF = "<img src='assets/F.png'>";
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



class Board{
    
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
