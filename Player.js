
class Player{
  constructor(id, nickname, image){
      this.id_ = id;
      this.nickname_ = nickname;
      this.image_ = image;
      this.score_ = 0;
  }
  
  getId(){
      return id_;
    }
  
  getNickname(){
      return nickname_;
    }
  getImage(){
      return image_;
  }
  
  getScore(){
      return score_;
  }
  
  setScore(score){
    if(score > 0){
      score_ = score;
    }
  }
}
