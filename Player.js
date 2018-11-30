//Creates a Plyer class containing an ID, a Nickname, an Image, and a Score
class Player{
  
  //Constructor for the player class that instantiates the id_, nickname_ and image_ to the values passed to it and score_ to a default value
  constructor(id, nickname, image){
      //Assigns the id passed to the constructor to id_
      this.id_ = id;
    
      //Assigns the nickname passed to the constructor to nickname_
      this.nickname_ = nickname;
    
     //Assigns the image passed to the constructor to image_
      this.image_ = image;
    
      //Assigns 0 to the score_ 
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
