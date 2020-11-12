let point;
let xoff1 = 0.0;
let xoff2 = 0.0;


function preload() {

}

function setup() {
  createCanvas(windowWidth, windowHeight);

  xoff1 = random(0,1);
  xoff2 = random(0,1);

}

function draw() {


  background(120,0,130);

  x = noise(xoff1)*10;
  y = noise(xoff2)*10;
  console.log(x);
  line(500,500,x,y);


  xoff1 = xoff1 + 0.01;
  xoff2 = xoff2 + 0.01;





}
