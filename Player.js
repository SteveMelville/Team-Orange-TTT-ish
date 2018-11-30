//Creates a Plyer class containing an ID, a Nickname, an Image, and a Score
class Player{
  
  //Constructor for the player class that instantiates the id_, nickname_ and image_ to the values passed to it and score_ to a default value
  constructor(id, nickname, image){
      //Assigns id_ to the id passed to the constructor
      this.id_ = id;
    
      //Assigns nickname_ to the nickname passed to the constructor
      this.nickname_ = nickname;
    
     //Assigns image_ to the image passed to the constructor
      this.image_ = image;
    
      //Assigns score_ to the 0
      this.score_ = 0;
  }
  
  getId(){
      //returns the value in id_
      return this.id_;
    }
  
  getNickname(){
      //returns the value in nickname_
      return this.nickname_;
    }
  getImage(){
      //returns the value in image_
      return this.image_;
  }
  
  getScore(){
      //returns the value in score_
      return this.score_;
  }
  
  setScore(score){
      //Sets the value of id_ to the value passed to the function
      this.score_ = score;
  }
}
