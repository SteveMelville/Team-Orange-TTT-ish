const images = ["<img src='assets/Orange.png'>",
                "<img src='assets/A.png'>",
                "<img src='assets/B.png'>",
                "<img src='assets/C.png'>",
                "<img src='assets/D.png'>",
                "<img src='assets/E.png'>",
                "<img src='assets/F.png'>",
                "<img src='assets/G.png'>",
                "<img src='assets/H.png'>",
                "<img src='assets/I.png'>",
                "<img src='assets/J.png'>",
                "<img src='assets/K.png'>",
                "<img src='assets/L.png'>",
                "<img src='assets/M.png'>",
                "<img src='assets/N.png'>",
                "<img src='assets/O.png'>",
                "<img src='assets/P.png'>",
                "<img src='assets/Q.png'>",
                "<img src='assets/R.png'>",
                "<img src='assets/S.png'>",
                "<img src='assets/T.png'>",
                "<img src='assets/U.png'>",
                "<img src='assets/V.png'>",
                "<img src='assets/W.png'>",
                "<img src='assets/X.png'>",
                "<img src='assets/Y.png'>",
                "<img src='assets/Z.png'>",
                "<img src='assets/Smile.png'>"];
//"<img src='assets/.png'>"

const testX = "<img src='assets/testX.png'>";
const testO = "<img src='assets/testO.png'>";
const blank = ""; //"<img src='assets/testBlank.png'>";
                                      
const leader1 = "<tr id='player";
const leader2 = "'>";
const leader3 = "<td id='player";
const leader4 = "</td>";
const leader5 = "</tr>";


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