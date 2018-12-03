//a clas thatt holds a word array and methods to work with it
//created by matthew Snow
class Dictionary{
	
	//creates a default dictionary
	constructor(){
		this.dict = [];
		//for testing
		this.addWord("XXX", 1);
		this.addWord("OOO", 1);
		this.addWord("~~~", 1);
	}
	
	//adds a word to the dictionary
	addWord(name , points){
		if(typeof name!="string"){
			//throw an error
		}else{
			var word = new Word();
			
			word.setName(name);
			word.setPoint(points);
			
			this.dict.push(word);
		}
	}
	
	//removes given word from the dictionary
	removeWord(word){
		if(typeof word!="string"){
			//throw an error
		}else{
			if(this._getWordPos(word)==-1){
				//throw an error
			}else{
				var wordPos=this._getWordPos(word);
				this.dict.splice(wordPos,1);
			}
		}
	}
	
	//returns true if the word exists in the dictionary
	wordExists(word){
		if(typeof word!="string"){
			//throw an error
		}else{
			return(this._getWordPos(word)!=-1);
		}
	}
	
	//returns the number of points assigned to the word
	getWordPoints(word){
		if(typeof word!="string"){
			//throw an error
		}else{
			var wordPos=this._getWordPos(word);
			if(wordPos==-1){
				//throw an error
			}else{
				return this.dict[wordPos].getPoint()
			}
		}
	}
	
	//returns the whole word array/Dictionary
	getDictionary(){
		return this.dict;
	}
	
	//gets where in the array the given word is
	_getWordPos(name){
		for(var i=0;i<this.dict.length;i++){
			if(this.dict[i].getName()==name){
				return i;
			}
		}
		return -1;
	}
}
