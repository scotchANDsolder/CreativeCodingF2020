
function setup() {

  createCanvas(windowWidth,windowHeight);
}
function draw() {

  background(200,10,120);
  fill(0,255,0);
  if( dist(mouseX,mouseY,width/2,height/2) < 100 ){
    circle(width/2,height/2,100);
  }


}
