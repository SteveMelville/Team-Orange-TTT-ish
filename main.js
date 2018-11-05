



class board{
    constructor(){
        var width = 10;
        var height = 10;
        var boardArray = [];
        var boardHTML = "";
        var boardAddress = document.getElementById("board");
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
