
function setup() {
  createCanvas(windowWidth,windowHeight);
  background(0,0,225);
  let xpos = 0;
  for(let i = height ; i > 0 ; i = i - 5){
    xpos = xpos + 5;
    line(0,i,xpos,0)
  }


}


function draw() {



}
