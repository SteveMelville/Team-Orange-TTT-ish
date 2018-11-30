//a false word class for use in testing the dictionary
class Word{
	//constructor that instantiates the name and points values to the values passed to it
	constructor(name, points){
		//Assigns the name passed to the funtion to name
		this.name = name;
		
		//Assigns the points passed to the funtion to points
		this.points = points
	}
	setName(name){
		//sets name to the name passed to the funtion
		this.name=name;
	}
	setPoint(point){
		//sets points to the points passed to the funtion
		this.points=point;
	}
	getName(){
		//returns the value in name
		return this.name;
	}
	getPoint(){
		//returns the value in points
		return this.points;
	}
}
