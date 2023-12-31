class Block {
  
  constructor(clr){
    this.clr =clr;
    print(this.clr,clr)
    // just a few random heights and widths to choose from
    this.h = random([100,200, 50]);
    this.w = random([100,200,50]);
    this.x = random(width)-this.w;
    this.y = random(height)-this.h;
    this.xspeed =0;
    this.yspeed=0;
    this.isl= false;
    if (clr === "#f9f9f9"){
      print(height)
      let heights = [[width-10,20],[20,height-10]]
      let choice = random(heights)
      this.h = random(choice[1])// it takes a random out of those heights
      this.w = random(choice[0]) // kinda goofy but it works
      print(this.h,this.w)
      this.isl = true;
      print("make line")
    }
    
  }
  
  show(){
    if (this.isl){
      stroke('#30303a')
      strokeWeight(20)
      rect(this.x,this.y,this.w,this.h)
    } else{
    fill(this.clr);
    noStroke();//strokeWeight(20);
    //stroke('#30303a')
    
    rect(this.x,this.y, this.w,this.h);
    }
  }
  move(){
    //moves randomly up down left or right
    this.xspeed = random([0,2,-2]);
    this.yspeed = random([0,2,-2]);
    this.x += this.xspeed;
    this.y += this.yspeed;
    
    
    
  }
  
  edges(){
    if (this.x > width+this.w ){
      this.x = 5
    }
    if (this.x < 0- this.w){
      this.x = width
    }
    if (this.y > height+this.h ){
      this.y = 5
    }
    if (this.y < 0-this.h){
      this.y = 5
    }
  }
}
