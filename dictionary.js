class Dictionary{
	//gets nothing, returns nothing
	constructor(){
		this.dict = [];
		//for testing
		this.addWord("XXX", 1);
		this.addWord("OOO", 1);
		this.addWord("OX", 1);
	}
	//gets a string and an intiger returns nothing
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
	//gets a string returns nothing
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
	//gets a string returns a bool
	wordExists(word){
		if(typeof word!="string"){
			//throw an error
		}else{
			return(this._getWordPos(word)!=-1);
		}
	}
	//gets a string returns an int
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
	//returns a word array
	getDictionary(){
		return this.dict;
	}
	
	_getWordPos(name){
		for(var i=0;i<this.dict.length;i++){
			if(this.dict[i].getName()==name){
				return i;
			}
		}
		return -1;
	}
}
