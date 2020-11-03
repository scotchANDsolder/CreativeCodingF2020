let hornsound;

function preload(){
  hornsound = loadSound('https://scotchandsolder.github.io/CreativeCodingF2020/soundstuff/horn.mp3');
}

function setup(){
  createCanvas(500,500);
  background(120,0,120);
  hornsound.playMode('restart');

}

function draw(){

}


function mousePressed(){

  hornsound.play();

}
