let ypos;

let yposn;
let offset = 0.0;

function setup(){
  createCanvas(windowWidth,windowHeight);
  frameRate(10);
}

function draw(){

  background(120,0,120);

  //Black random circle
  fill(0);
  ypos = random(0,height);
  circle(500,ypos,100);

  //Blue noise circle
  fill(0,0,255);
  yposn = noise(offset)*height;
  circle(1000,yposn,100);
  offset = offset + 0.05;




}
