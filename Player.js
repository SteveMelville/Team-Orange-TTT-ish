
class Player{
  constructor(id, nickname, image){
      this.id_ = id;
      this.nickname_ = nickname;
      this.image_ = image;
      this.score_ = 0;
  }
  
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
  
  setScore(score){
      this.score_ = score;
  }
}
