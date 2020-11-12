let x1;
let y1;
let x2;
let y2;
let x3;
let y3;
let x4;
let y4;

let offset;


function setup(){
  createCanvas(windowWidth,windowHeight);
    background(200,0,0);
    strokeWeight(2);
    stroke(0,5);
    offset = 0.0;
    noFill();

}


function draw(){
  // x1 = random(0,width);
  // y1 = random(0,height);
  // x2 = random(0,width);
  // y2 = random(0,height);
  // x3 = random(0,width);
  // y3 = random(0,height);
  // x4 = random(0,width);
  // y4 = random(0,height);

  x1 = noise(offset)*width;
  x2 = noise(offset + 10)*width;
  x3 = noise(offset + 20)*width;
  x4 = noise(offset + 30)*width;

  y1 = noise(offset + 50)*height;
  y2 = noise(offset + 60)*height;
  y3 = noise(offset + 70)*height;
  y4 = noise(offset + 80)*height;

  bezier(x1,y1,x2,y2,x3,y3,x4,y4);

  offset = offset +0.001;



}
