function scanBoard(){
    leftDiagonal(0);
    RightDiagonal(0);
    Vertical(0);
    Horizontal(0);
}

//This function scans the left diagonal '\'
function leftDiagonal(placedLetterPosition){
    var currentPosition = placedLetterPosition;
    var wordArr =[currentPosition];
    //add letter at current position to wordStr
    var wordStr = document.getElementById(`${currentPosition}`).firstChild.src.slice(-5).replace(".png", "");
    //get letters left of initial
    while(newGame.board.get(`${currentPosition - newGame.board.getWidth() - 1}`) != null && !(document.getElementById(`${currentPosition - newGame.board.getWidth() - 1}`).firstChild.tagName === "BUTTON")){
        //and new object to the beginning wordArr {char: 'character', position: boardposition}
        //unshift inserts an item to the front of an array
        wordArr.unshift((currentPosition - newGame.board.getWidth() - 1));
        wordStr = document.getElementById(`${currentPosition - newGame.board.getWidth() - 1}`).firstChild.src.slice(-5).replace(".png", "") + wordStr;
        //move current position
        currentPosition = currentPosition - newGame.board.getWidth() - 1;
    }
    //reset currentPosition
    currentPosition = placedLetterPosition;
    //get letters right of initial
    while(newGame.board.get(`${currentPosition + newGame.board.getWidth() + 1}`) != null && !(document.getElementById(`${currentPosition + newGame.board.getWidth() + 1}`).firstChild.tagName === "BUTTON")){
        //add new object to the end of wordArr
        wordArr.push((currentPosition + newGame.board.getWidth() + 1));
        wordStr = wordStr + document.getElementById(`${currentPosition + newGame.board.getWidth() + 1}`).firstChild.src.slice(-5).replace(".png", "");
        currentPosition = currentPosition + newGame.board.getWidth() + 1;
    }

    return checkWords(wordStr, wordArr);
}

//get points if needed
//AAAAA given AAA is a word gives three points
function checkWords(wordStr, wordArr){
    var tempStr = wordStr.slice(0);
    var tempArr = wordArr.slice(0);
    var words = newGame.dictionary.getDictionary();
    for(word in words){
        var index = wordStr.indexOf(`${words[word].getName()}`);
        tempArr = wordArr.slice(0);
        while(index > -1 && wordCounted(tempArr, index, (index + words[word].getName().length - 1)) == false){
            points += words[word].getPoint();
            addCountedWord(tempArr, index, (index + words[word].getName().length - 1));
            wordStr = wordStr.substring((index + 1));
            for(var i = 0; i <= index; i++){
                tempArr.shift();
            }
            index = wordStr.indexOf(`${words[word].getName()}`);
        }
        //check backwards
        wordStr = tempStr.slice(0);
        wordStr = wordStr.split("").reverse().join("");
        tempArr = wordArr.slice(0);
        tempArr.reverse();
        
        index = wordStr.indexOf(`${words[word].getName()}`);
        while(index > -1 && wordCounted(tempArr, index, (index + words[word].getName().length - 1)) == false){
            points += words[word].getPoint();
            addCountedWord(tempArr, index, (index + words[word].getName().length - 1));
            wordStr = wordStr.substring((index + 1));
            for(var i = 0; i <= index; i++){
                tempArr.shift();
            }
            index = wordStr.indexOf(`${words[word].getName()}`);
        }
        wordStr = tempStr.slice(0);
    }
    return points;
}

//This function checks to see if a word was counted
function wordCounted(wordArr, startIndex, endIndex){
    var flag = new Boolean(false);
    if(startIndex == -1){
        return true;
    }
    if(wordArr.length < endIndex - 1){
        return true;
    }
    var value = wordArr[startIndex];
    for (var i = startIndex + 1; i <= endIndex; i++){
        value = value + '-' + wordArr[i];
    }
    ///TODO implement binary search function (array to search, value to find)
    if(binarySearch(newGame.countedWords, value) != -1){
        flag = true;
    }
    //search for backwards order
    var value = wordArr[endIndex];
    for (var i = endIndex - 1; i >= startIndex; i--){
        value = value + '-' + wordArr[i];
    }

    if(binarySearch(newGame.countedWords, value) != -1){
        flag = true;
    }

    return flag;
}

//This adds a word to the list of counted words
function addCountedWord(wordArr, startIndex, endIndex){
    var value = wordArr[startIndex];
    for (var i = startIndex + 1; i <= endIndex; i++){
        value = value + '-' + wordArr[i];
    }
    newGame.countedWords.push(value);
    newGame.countedWords.sort();
    //add backwards order as well
    var value = wordArr[endIndex];
    for (var i = endIndex - 1; i >= startIndex; i--){
        value = value + '-' + wordArr[i];
    }
    newGame.countedWords.push(value);
    newGame.countedWords.sort();
}

//This function scans the right diagonal '/'
function RightDiagonal(placedLetterPosition){
    var currentPosition = placedLetterPosition;
    var wordArr =[currentPosition];
    //add letter at current position to wordStr
    var wordStr = document.getElementById(`${currentPosition}`).firstChild.src.slice(-5).replace(".png", "");
    //get letters left of initial
    while(newGame.board.get(`${currentPosition + newGame.board.getWidth() - 1}`) != null && !(document.getElementById(`${currentPosition + newGame.board.getWidth() - 1}`).firstChild.tagName === "BUTTON")){
        //and new object to the beginning wordArr {char: 'character', position: boardposition}
        //unshift inserts an item to the front of an array
        wordArr.unshift((currentPosition + newGame.board.getWidth() - 1));
        wordStr = document.getElementById(`${currentPosition + newGame.board.getWidth() - 1}`).firstChild.src.slice(-5).replace(".png", "") + wordStr;
        //move current position
        currentPosition = currentPosition + newGame.board.getWidth() - 1;
    }
    //reset currentPosition
    currentPosition = placedLetterPosition;
    //get letters right of initial
    while(newGame.board.get(`${currentPosition - newGame.board.getWidth() + 1}`) != null && !(document.getElementById(`${currentPosition - newGame.board.getWidth() + 1}`).firstChild.tagName === "BUTTON")){
        //add new object to the end of wordArr
        wordArr.push((currentPosition - newGame.board.getWidth() + 1));
        wordStr = wordStr + document.getElementById(`${currentPosition - newGame.board.getWidth() + 1}`).firstChild.src.slice(-5).replace(".png", "");
        currentPosition = currentPosition - newGame.board.getWidth() + 1;
    }

    return checkWords(wordStr, wordArr);
}

//This function scans the vertical '|'
function Vertical(placedLetterPosition){
    var currentPosition = placedLetterPosition;
    var wordArr =[currentPosition];
    //add letter at current position to wordStr
    var wordStr = document.getElementById(`${currentPosition}`).firstChild.src.slice(-5).replace(".png", "");
    //get letters left of initial
    while(newGame.board.get(`${currentPosition - newGame.board.getWidth()}`) != null && !(document.getElementById(`${currentPosition - newGame.board.getWidth()}`).firstChild.tagName === "BUTTON")){
        //and new object to the beginning wordArr {char: 'character', position: boardposition}
        //unshift inserts an item to the front of an array
        wordArr.unshift((currentPosition - newGame.board.getWidth()));
        wordStr = document.getElementById(`${currentPosition - newGame.board.getWidth()}`).firstChild.src.slice(-5).replace(".png", "") + wordStr;
        //move current position
        currentPosition = currentPosition - newGame.board.getWidth();
    }
    //reset currentPosition
    currentPosition = placedLetterPosition;
    //get letters right of initial
    while(newGame.board.get(`${currentPosition + newGame.board.getWidth()}`) != null && !(document.getElementById(`${currentPosition + newGame.board.getWidth()}`).firstChild.tagName === "BUTTON")){
        //add new object to the end of wordArr
        wordArr.push((currentPosition + newGame.board.getWidth()));
        wordStr = wordStr + document.getElementById(`${currentPosition + newGame.board.getWidth()}`).firstChild.src.slice(-5).replace(".png", "");
        currentPosition = currentPosition + newGame.board.getWidth();
    }

    return checkWords(wordStr, wordArr);
}

//This function scans the horizontal '-'
function Horizontal(placedLetterPosition){
    var currentPosition = placedLetterPosition;
    var wordArr =[currentPosition];
    //add letter at current position to wordStr
    var wordStr = document.getElementById(`${currentPosition}`).firstChild.src.slice(-5).replace(".png", "");
    //get letters left of initial
    while(newGame.board.get(`${currentPosition - 1}`) != null && !(document.getElementById(`${currentPosition - 1}`).firstChild.tagName === "BUTTON")){
        //and new object to the beginning wordArr {char: 'character', position: boardposition}
        //unshift inserts an item to the front of an array
        wordArr.unshift((currentPosition - 1));
        wordStr = document.getElementById(`${currentPosition - 1}`).firstChild.src.slice(-5).replace(".png", "") + wordStr;
        //move current position
        currentPosition = currentPosition - 1;
    }
    //reset currentPosition
    currentPosition = placedLetterPosition;
    //get letters right of initial
    while(newGame.board.get(`${currentPosition + 1}`) != null && !(document.getElementById(`${currentPosition + 1}`).firstChild.tagName === "BUTTON")){
        //add new object to the end of wordArr
        wordArr.push((currentPosition + 1));
        wordStr = wordStr + document.getElementById(`${currentPosition + 1}`).firstChild.src.slice(-5).replace(".png", "");
        currentPosition = currentPosition + 1;
    }

    return checkWords(wordStr, wordArr);
}

//This function performs a binary search on an array of strings and returns the index of the string
function binarySearch(array, value){
    var maxIndex = array.length-1;
    var minIndex = 0;
     while(minIndex<=maxIndex){
        var mid = (maxIndex + minIndex)/2 | 0;
        if(array[mid] > value){
            maxIndex = mid - 1;
        }
        else if(array[mid] < value){
            minIndex = mid + 1;
        }
        else{
            return mid;
        }
    }
    return -1
}


//This function tests the wordCounted function
/*(function(){
    var wordArray = [{char: "a", position: "1"},{char: "b", position: "2"},{char: "c", position: "3"},{char: "d", position: "4"},{char: "e", position: "5"},{char: "f", position: "6"}];
    var Start = 2;
    var End = 4;
    countedWords.addWord("2-3-4");
    countedWords.addWord("4-3-2");
    if(wordCounted(wordArray, Start, End) == false){
        console.log("wordCounted produced an incorrect result")
    }
    if(wordCounted(wordArray, (Start + 1), End) == true){
        console.log("wordCounted produced an incorrect result")
    }
})();
//This function tests the addCountedWord function
(function(){
    var wordArray = [{char: "a", position: "1"},{char: "b", position: "2"},{char: "c", position: "3"},{char: "d", position: "4"},{char: "e", position: "5"},{char: "f", position: "6"}];
    var Start = 2;
    var End = 4;
    addCountedWord(wordArray, Start, End);
    if(binarySearch(countedWords.get(), "2-3-4") != -1){
        console.log("addCountedWord produced an incorrect result")
    }
    if(binarySearch(countedWords.get(), "4-3-2") != -1){
        console.log("addCountedWord produced an incorrect result")
    }
})();*/
