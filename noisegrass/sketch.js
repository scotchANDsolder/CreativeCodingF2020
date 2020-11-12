let x;
let xoffset = []


function preload() {

}

function setup() {
  createCanvas(windowWidth, windowHeight);

  for(let i = 0; i < 500; i = i +1){
    xoffset[i] = random(0,1)*10;
  }


}

function draw() {

  background(120,0,130);
  strokeWeight(5);
  stroke(20,200);
  for(let i = 10; i< 500;i=i+1){
    x = 50 - noise(xoffset[i])*100
    line(i*5,height-100,(i*5) + x,500);

  }

for(let i = 0; i< 500;i=i+1){
  xoffset[i] = xoffset[i]+0.01;

}

  console.log(x);







}
