
function setup() {
  createCanvas(windowWidth,windowHeight);
  background(0,120,120);

  for(let i = 0 ; i < 3; i = i +1){

    let x1 = random(0,width/3);
    let y1 = random(0,height/3);

    let x2 = random(0,width/3);
    let y2 = random(0,height/3);

    let x3 = random(0,width/3);
    let y3 = random(0,height/3);

    let x4 = random(0,width/3);
    let y4 = random(0,height/3);

    let rcol = random(0,255);
    let gcol = random(0,255);
    let bcol = random(0,255);

    fill(rcol,gcol,bcol);
    noStroke();
    quad(x1,y1,x2,y2,x3,y3,x4,y4);

  }



}


function draw() {


}
