let xoff;
let yoff;
let x;
let y;


function setup() {
  createCanvas(windowWidth, windowHeight);

  xoff = random(0,100);
  yoff = random(0,100);
  noStroke();
  background(120,0,130);

}

function draw() {


  fill(20,120);
  x = noise(xoff)*width;
  y = noise(yoff)*height;
  circle(x,y,50);
  xoff=xoff+0.01;
  yoff=yoff+0.01;
  console.log(x);









}
