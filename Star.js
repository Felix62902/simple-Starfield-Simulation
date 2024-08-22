class Star{
  constructor(r,g,b) {
    this.x = random(-width/2,width/2);
    this.y = random(-height/2,height/2);
    this.z = random(width); //control closer,further, the smaller the closer
    this.r =r;
    this.g = g;
    this.b = b;
    //keep track of previous location
    this.pz = this.z;
  }
  
  show(){
    fill(this.r,this.g,this.b);
    
    //ratio of point to width, reduces overtime
    //Behavior: spread towards to right and bottom of the screen
    let sx = map(this.x/ this.z , 0, 1, 0, width);
    let sy = map(this.y/ this.z,0,1,0,width);
    
    //stars gets bigger the closer it is/ the smaler the z
    let size = map(this.z , 0, width , 8 , 0);

    ellipse(sx,sy,size,size);
    
    //previous x and y
    let px = map(this.x/ this.pz , 0, 1, 0, width);
    let py = map(this.y/ this.pz,0,1,0,width);
    
    this.pz = this.z;
    
    stroke(this.r,this.g,this.b);
    strokeWeight(1);
    line(px,py,sx,sy);
  }
  
  update() {
    this.z -= speed; // speed is declared in parent
    //z is reset if moved out of the screen
    if(this.z < 1){
      this.z = width;
      this.x = random(-width/2, width);
      this.y = random(-height/2 , height);
      this.pz = this.z;
    }
  }
  
}