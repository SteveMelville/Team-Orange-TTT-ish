



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
        
        this.blank = "<img src='assets/testBlank.png'>";
        this.player1 = "<img src='assets/testX.png'>";
        
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
                    case 0: this.boardHTML += "<button type='button' onclick='this.pushButton(" + id + ")'>" + this.blank + "</button>";
                            break;
                    case 1: this.boardHTML += this.player1;
                            break;
                    default: break;
                }
                
                this.boardHTML += "</td>\n";
            }

            this.boardHTML += "</tr>\n";
        }
        this.boardAddress.innerHTML = this.boardHTML;
    }
    
    pushButton(id){
        set(id);
    }
    
    set(id){
        var item = document.getElementById(id);
        item.innerHTML = this.player1;
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
