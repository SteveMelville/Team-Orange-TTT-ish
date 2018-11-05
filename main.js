var width;
var height;

var board = [];

var boardHTML = "";
var boardAddress = document.getElementById("board");

printBoard();

function printBoard(){
    for(var i = 0; i < height; i++){
        boardHTML += "<tr>";
        for(var j = 0; j < width; j++){
            boardHTML += "<td id = " + (i * width + j) + "></td>";
        }
        boardHTML += "</tr>";
    }
    boardAddress.innerHTML += boardHTML;
}




function test(message){
    window.alert(message); 
}
