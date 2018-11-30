//a class that holds a word array and methods to work with it
//created by Matthew Snow

class Dictionary{
	//creates an empty dictionary
	constructor(){
		this.dict = [];
		//for testing
		this.addWord("XXX", 1);
		this.addWord("OOO", 1);
		this.addWord("~~~", 1);
	}
	//adds a word to the dictionary
	addWord(name , points){
		//Checks if the name passed to the function was a string if not throw an error
		if(typeof name!="string"){
			//throw an error
		}else{
			//creates a variable word to a new Word
			var word = new Word();
			
			//sets the word to the name and point value passed to the function
			word.setName(name);
			word.setPoint(points);
			
			//Pushes the word created to the dictionary
			this.dict.push(word);
		}
	}
	//removes given word from the dictionary
	removeWord(word){
		//Checks if the word passed to the function was a string if not throw an error
		if(typeof word!="string"){
			//throw an error
		}else{
			//Checks if the word passed to the function exists in the dictionary if not throw an error
			if(this._getWordPos(word)==-1){
				//throw an error
			}else{
				//Sets the variable wordPos to the position of the word passed to the function
				//then removes the word from the dictionary
				var wordPos=this._getWordPos(word);
				this.dict.splice(wordPos,1);
			}
		}
	}
	//returns true if the word exists in the dictionary
	wordExists(word){
		//Checks if the word passed to the function was a string if not throw an error
		if(typeof word!="string"){
			//throw an error
		}else{
			//returns true if the word is in the dictionary, false if not
			return(this._getWordPos(word)!=-1);
		}
	}
	//returns the number of points assigned to the word
	getWordPoints(word){
		//Checks if the word passed to the function was a string if not throw an error
		if(typeof word!="string"){
			//throw an error
		}else{
			//Sets the variable wordPos to the position of the word passed to the function
			var wordPos=this._getWordPos(word);
			//if the word is not in the dictionary throw an error
			if(wordPos==-1){
				//throw an error
			}else{
				//return the point value of the word
				return this.dict[wordPos].getPoint()
			}
		}
	}
	//returns the whole word array
	getDictionary(){
		//returns the dictionary
		return this.dict;
	}
	//gets where in the array the given word is
	_getWordPos(name){
		//for loop to loop through the dictionary
		for(var i=0;i<this.dict.length;i++){
			//checks if the name passed to the functions is the same as the name of the current word
			if(this.dict[i].getName()==name){
				//returns the index of the word
				return i;
			}
		}
		//returns -1
		return -1;
	}
}
