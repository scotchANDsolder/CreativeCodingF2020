

let xoff;


function setup() {
  createCanvas(windowWidth, windowHeight);

    xoff = 0.0;

  noLoop();
  background(120,0,130);

}

function draw() {
  fill(20,120);
  for(let i = 0; i < width; i = i + 100){
    for(let j = 0; j <height+100;j = j+ 100){
      push();
      translate(i,j);
      ang = noise(xoff)*5;
      //ang =random(0,5)
      rotate(ang);
      rect(0,0,80)
      pop();

    }
    xoff = xoff + 0.1;
  }

}
