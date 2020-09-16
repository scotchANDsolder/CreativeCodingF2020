let xpos = 200;
let ypos = 300;
let ballspeed = 1;

function setup() {

  createCanvas(windowWidth,windowHeight);

}
function draw() {

  background(200,10,120);
  fill(0,0,200);
  circle(xpos,ypos,100);

  if(keyIsPressed & keyCode === UP_ARROW){
    ypos = ypos - ballspeed;
  }

  if(keyIsPressed & keyCode === DOWN_ARROW){
    ypos = ypos + ballspeed;
  }

  if(keyIsPressed & keyCode === LEFT_ARROW){
    xpos = xpos - ballspeed;
  }
  if(keyIsPressed & keyCode === RIGHT_ARROW){
    xpos = xpos + ballspeed;
  }






}
