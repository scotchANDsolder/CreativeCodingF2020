let xoff1= [];

let x;



function setup() {
  createCanvas(windowWidth, windowHeight);
  for(let i = 0; i < 50; i =i+1){
    xoff1[i] = random(0,1)*10;
  }
  noStroke();
  noLoop();

}

function draw() {

  background(120,0,130);
  fill(20,200);
  for(let i = 0; i < 10; i = i+1){
    startingPoint = xoff1[i];
  //  console.log(startingPoint);
    for(let j = 0; j< width;j=j+10){
      x = noise(startingPoint)*height;
      console.log(x);
      circle(j,x,10);
      startingPoint = startingPoint + 0.01;
    }

  }

  //console.log(x);









}
