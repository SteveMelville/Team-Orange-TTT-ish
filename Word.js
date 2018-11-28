//a false word class for use in testing the dictionary
class Word{
	constructor(name, points){
		this.name = name;
		this.points = points
	}
	setName(name){
		this.name=name;
	}
	setPoint(point){
		this.points=point;
	}
	getName(){
		return this.name;
	}
	getPoint(){
		return this.points;
	}
}
