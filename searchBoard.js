//test - should output 3
alert(`${1+2}`)
/*
This assumes that a few functions/classes will be made in the future. It has not been debugged whatsoever.
It is just a proof of concept for the search function.
--I suggest that the Game class needs to have a getCurrentPlayer function that returns the index of the player who's turn it currently is.
This is shown in the scanBoard Function

--The leftDiagonal function is the only one 'implemented' and will be until more code is finished so it can be tested. It will need to be
changed depending on how the board class and HTML is finally implemented. The idea will be the same because all the board needs for this to work
is a tile ID and some indicator of the word in the square. This assumes that that indicator is only presented in the image name. The code for that
will also need to be modified to work regardless of how many elements are in each tile.

--The scanBoard Function will need to either be part of the game class or be passed a game object. If it is not part of the game class some more
code will need to be changed in this but It will be relatively minor.

--I also suggest that we should have a countedWords class to keep track of the words that have been counted in the game. It will contain an array
with strings like "1-5-9", and "9-5-1" with this example board(starting with ID 1 in the top left):
| x |   |   |
|   | x |   |
|   |   | x |
These strings represent the ID of the tile the letter is contained within. I have both the forwards and backwards string included because each
part of the scan board function looks for words both forwards and backwards. I haven't implemented the backwards part yet because I need to debug
the basic stuff first. Once the left Diagonal is debugged and working everything else will be almost copy and paste.

--When adding elements to countedWords the addWord method within it will sort the array alphabetically using the .sort function that is provided by
default. This makes it so we can do a binary search on the strings. The string binary search function will still need to be implemented.

--`${wordArr[endIndex].position}` this is a pretty nifty thing that converts javascript code(after it is excecuted) into a string. you need to 
use the quotes that are on the ~ key. I think it need jquery as well.

If you have any questions and/or suggestions please let me know
-Brandon Isbell
*/

//This function scans the board for words made by placing a letter in a given position
function scanBoard(placedLetterPosition){
    var points = 0
    points += leftDiagonal(placedLetterPosition);
    points += RightDiagonal(placedLetterPosition);
    points += Vertical(placedLetterPosition);
    points += Horizontal(placedLetterPosition);
    //give points to player that made the move
    player[getCurrentPlayer()].setPoints((player[getCurrentPlayer()].getPoints() + points))
}

//This function scans the left diagonal '\'
function leftDiagonal(placedLetterPosition){
    var currentPosition = placedLetterPosition;
    var wordArr =[{char: document.getElementById(`${currentPosition}`).src.replace(".jpg",""), position: currentPosition}];
    //add letter at current position to wordStr
    var wordStr = document.getElementById(`${currentPosition}`).src.replace(".jpg","");
    //get letters left of initial
    while(board.getBoardArray()[`${currentPosition - board.getWidth() - 1}`] != null || !(document.getElementById(`${currentPosition - board.getWidth() - 1}`).src.includes("blank"))){
        //and new object to the beginning wordArr {char: 'character', position: boardposition}
        //unshift inserts an item to the front of an array
        wordArr.unshift({char: document.getElementById(`${currentPosition - board.getWidth() - 1}`).src.replace(".jpg", ""), position: (currentPosition - board.getWidth() - 1)});
        wordStr = document.getElementById(`${currentPosition - board.getWidth() - 1}`).src.replace(".jpg", "") + wordStr;
        //move current position
        currentPosition = currentPosition - board.getWidth() - 1;
    }
    //reset currentPosition
    currentPosition = placedLetterPosition;
    //get letters right of initial
    while(board.getBoardArray()[`${currentPosition + board.getWidth() + 1}`] != null || !(document.getElementById(`${currentPosition + board.getWidth() + 1}`).src.includes("blank"))){
        //add new object to the end of wordArr
        wordArr.push({char: document.getElementById(`${currentPosition + board.getWidth() + 1}`).src.replace(".jpg", ""), position: (currentPosition + board.getWidth() + 1)});
        wordStr = wordStr + document.getElementById(`${currentPosition + board.getWidth() + 1}`).src.replace(".jpg", "");
        currentPosition = currentPosition + board.getWidth() + 1;
    }

    return checkWords(wordStr, wordArr);
}

//get points if needed
function checkWords(wordStr, wordArr){
    var words = dictionary.getWords();
    var points = 0;
    for(word in words){
        var index = wordStr.indexOf(`${words[word].getName()}`);
        if(index != -1 && !wordCounted(wordArr, index, (index + wordStr.length() - 1))){
            points += words[word].getPoint();
            addCountedWord(wordArr, index, (index + wordStr.length() - 1));
        }
        //TODO ADD check backwards capability
    }
    return points;
}

//This function checks to see if a word was counted
function wordCounted(wordArr, startIndex, endIndex){
    var flag = new Boolean(false);
    var value = `${wordArr[startIndex].position}`;
    for (var i = 1; i <= endIndex; i++){
        value = value + '-' + `${wordArr[startIndex + i].position}`;
    }
    ///TODO implement binary search function (array to search, value to find)
    if(binarySearch(countedWords.get(), value) != -1){
        flag = true;
    }
    //search for backwards order
    var value = `${wordArr[endIndex].position}`;
    for (var i = endIndex - 1; i >= startIndex; i--){
        value = value + '-' + `${wordArr[i].position}`;
    }

    if(binarySearch(countedWords.get(), value) != -1){
        flag = true;
    }

    return flag;
}

//This adds a word to the list of counted words
function addCountedWord(wordArr, startIndex, endIndex){
    var value = `${wordArr[startIndex].position}`;
    for (var i = 1; i <= endIndex; i++){
        value = value + '-' + `${wordArr[startIndex + i].position}`;
    }
    countedWords.addWord(value)
    //add backwards order as well
    var value = `${wordArr[endIndex].position}`;
    for (var i = endIndex - 1; i >= startIndex; i--){
        value = value + '-' + `${wordArr[i].position}`;
    }
    countedWords.addWord(value)
}

//This function scans the right diagonal '/'
function RightDiagonal(placedLetterPosition){
    
}

//This function scans the vertical '|'
function Vertical(placedLetterPosition){

}

//This function scans the horizontal '-'
function Horizontal(placedLetterPosition){
    
}