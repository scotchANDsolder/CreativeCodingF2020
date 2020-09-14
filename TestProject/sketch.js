
let xpos = 0;

function setup() {
  // put setup code here
createCanvas(400,400);
background(200,10,120);

}

function draw() {
  //Put draw code here
  fill(200,0,0);

  circle(xpos,100,70);

  xpos = xpos + 1;
}
