let monaLisa;
let x = 0;
let y = 0;
let face;

function preload() {
  monaLisa = loadImage("https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/France-003324_-_Mona_Lisa_%2816236519171%29.jpg/400px-France-003324_-_Mona_Lisa_%2816236519171%29.jpg");

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  face = monaLisa.get(140,50,120,150);

}

function draw() {
  background(0,120,120);
  angleMode(DEGREES);
  imageMode(CENTER);

  push();
  translate(400,400);
  circle(0,0,20);
  for(let i = 0; i < 100; i = i +1){
    image(face,0,200);
    rotate(x);
  }

  x = x +1;
  pop();



}
