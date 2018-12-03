//Creates a Plyer class containing an ID, a Nickname, an Image, and a Score
class Player{
  
  //Constructor for the player class that instantiates the id_, nickname_ and image_ to the values passed to it and score_ to a default value
  constructor(id, nickname, image){
      this.id_ = id;
      this.nickname_ = nickname;
      this.image_ = image;
      this.score_ = 0;
  }
  
  //Get functions that return the player values
  getId(){
      return this.id_;
    }
  
  getNickname(){
      return this.nickname_;
    }
  getImage(){
      return this.image_;
  }
  
  getScore(){
      return this.score_;
  }
  
  //Sets the score to a new value
  setScore(score){
      this.score_ = score;
  }
}
