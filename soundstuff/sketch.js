let hornsound;
let snaresound;

function preload(){
  hornsound = loadSound('https://scotchandsolder.github.io/CreativeCodingF2020/soundstuff/horn.mp3');
  snaresound = loadSound('https://scotchandsolder.github.io/CreativeCodingF2020/soundstuff/snare.wav');
}

function setup(){
  createCanvas(500,500);
  background(120,0,120);
  hornsound.playMode('restart');
  snaresound.playMode('restart');

}

function draw(){

  fill(120,120,0);
  circle(200,200,40);
  fill(0,0,124);
  circle(200,400,40);


}


function mousePressed(){

  if(dist(mouseX,mouseY,200,200) < 20){
    hornsound.play();
  }

  if(dist(mouseX,mouseY,200,400) < 20){
    snaresound.play();
  }


}
