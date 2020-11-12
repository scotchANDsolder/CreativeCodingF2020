let xpos = 100;
let ypos = 100;

let yspeed = 10;

function setup() {
  createCanvas(windowWidth,windowHeight);

}


function draw() {
  background(0,0,225);
  circle(xpos,ypos,50);

  ypos = ypos + yspeed;

  if(ypos < 0){
    yspeed = -yspeed;
  }

  if(ypos > height){
    yspeed = -yspeed;
  }



}
