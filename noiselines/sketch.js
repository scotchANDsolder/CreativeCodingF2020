var t;

function setup() {
  createCanvas(windowWidth, windowHeight);
  stroke(0,5);
  noFill();
  t = 0;
  background(120,0,120);
}

function draw() {
  let x1 = width * noise(t + 15);
  let x2 = width * noise(t + 25);
  let x3 = width * noise(t + 35);
  let x4 = width * noise(t + 45);
  let y1 = height * noise(t + 55);
  let y2 = height * noise(t + 65);
  let y3 = height * noise(t + 75);
  let y4 = height * noise(t + 85);

  bezier(x1, y1, x2, y2, x3, y3, x4, y4);

  t= t+0.001;


}
