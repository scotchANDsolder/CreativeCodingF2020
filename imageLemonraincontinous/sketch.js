let lemonList = [];
let xposList = [];
let yposList = [];

let yspeedList = [];
let sizeList = [];

let numofLemons = 50;
let checker = 0;

function preload(){

  for(let i = 0;i < numofLemons/2;i = i +1){
    lemonList[i] = loadImage('https://i.imgur.com/5FDatvl.png');
    }

for(let i = numofLemons/2;i < numofLemons;i = i +1){
  lemonList[i] = loadImage('https://i.imgur.com/E9R9dy3.png');
}

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  for(let i = 0;i<numofLemons;i=i+1){
    yposList[i] = 0;
    xposList[i] = random(0,width);
    yspeedList[i] = random(1,20);
    sizeList[i] = 100;
  }

}

function draw() {
  background(20,200,200);
  imageMode(CENTER);

  for(let i = 0; i < numofLemons;i=i+1){
    image(lemonList[i],xposList[i],yposList[i],sizeList[i],sizeList[i]);

    yposList[i] = yposList[i] + yspeedList[i];

    if(yposList[i] > height){
      yposList[i] = height;
    }

  }
  checker = 0;
  for(let i = 0; i < numofLemons;i=i+1){
    checker = checker + yposList[i];
  }
  checker = checker - height*numofLemons;
  console.log(checker);
  if(checker === 0){
    for(let i = 0; i < numofLemons;i=i+1){
      yposList[i] = 0;
    }


  }






}
