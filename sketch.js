let stars = [];
let speed;

function setup() {
  createCanvas(800, 600);
  // background(0);


  for(let i = 0 ; i < 500; i++){
    if(i%100 == 0){
      stars.push(new Star(94, 120, 180));
    }
    else if(i % 50 == 0){
      stars.push(new Star(255, 165, 0)); // Orange star
    } else if (i % 10 == 0){
      stars.push(new Star(255, 255, 0)); // Yellow star
    } else {
      stars.push(new Star(255, 255, 255)); // White star
    }
  }
}

function draw() {
  speed = map(mouseX, 0, width, 0 ,50);
  background(0);
  translate(width/2,height/2);
  for(let i = 0; i < stars.length;i++){
    stars[i].show();
    stars[i].update()
  }
}



