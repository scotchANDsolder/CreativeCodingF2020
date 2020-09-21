let checker = 30;


function setup() {
  // put setup code here
  createCanvas(200,200);
  background(200,10,120);


}

function draw() {
  //Put draw code here
  if(mouseIsPressed & checker > 50){
    fill(255,0,0);
    circle(100,50,20);
  }
  else {
    fill(0,255,0);
    rect(10,20,40);
  }



}
