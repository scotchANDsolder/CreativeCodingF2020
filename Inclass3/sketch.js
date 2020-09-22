
function setup() {
  // put setup code here
  createCanvas(windowWidth,windowHeight);
  background(200,10,120);

  for(let i = 0;i<width;i=i+1){
    strokeWeight(random(10))
    stroke(random(0,255),random(0,255),random(0,255));
    line(0,i,random(0,width/2),i);
  }

}

function draw() {
  //Put draw code here




}
