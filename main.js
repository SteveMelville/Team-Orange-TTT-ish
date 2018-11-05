



class board{
    
    var width;
    var height;
    var boardArray;
    var boardHTML;
    var boardAddress;
    
    constructor(){
        width = 10;
        height = 10;
        boardArray = [];
        boardHTML = "";
        boardAddress = document.getElementById("board");
    }

   
    printBoard(){
        for(var i = 0; i < height; i++){
            boardHTML += "<tr>\n";

            for(var j = 0; j < width; j++){
                boardHTML += "<td id = '" + (i * width + j) + "'>hello</td>\n";
            }

            boardHTML += "</tr>\n";
        }
        boardAddress.innerHTML = boardHTML;
    }
}

const newBoard = new board();
newBoard.printBoard();


function test(message){
    window.alert(message); 
}
