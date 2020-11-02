let lemonList=[];
let orangeList=[];
let watermelonList=[];

let xposListLemon=[];
let yposListLemon=[];
let yspeedListLemon=[];

let xposListorange=[];
let yposListorange=[];
let yspeedListorange=[];

let xposListwater=[];
let yposListwater=[];
let yspeedListwater=[];

let checker = 0;

function preload(){

  for(let i=0;i<30;i=i+1)
  {
    lemonList[i] = loadImage('https://i.imgur.com/d8PORoY.png');
    orangeList[i] = loadImage('https://i.imgur.com/vnp523S.png');
    watermelonList[i] = loadImage('https://i.imgur.com/BoOVoiP.png');
  }

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  for(let i=0;i<30;i=i+1){
    yposListLemon[i]=0;
    xposListLemon[i]=random(0,width);
    yspeedListLemon[i]=random(1,3);

    yposListorange[i]=0;
    xposListorange[i]=random(0,width);
    yspeedListorange[i]=random(1,3);

    yposListwater[i]=0;
    xposListwater[i]=random(0,width);
    yspeedListwater[i]=random(1,3)


}



}

function draw() {
  background(20,200,200);
  imageMode(CENTER);

  for(let i=0;i<30;i=i+1){
  image(lemonList[i],xposListLemon[i],yposListLemon[i],40,40);
  image(orangeList[i],xposListorange[i],yposListorange[i],40,40);
  image(watermelonList[i],xposListwater[i],yposListwater[i],40,40);

  yposListLemon[i] = yposListLemon[i] + yspeedListLemon[i];
  yposListorange[i] = yposListorange[i] + yspeedListorange[i];
  yposListwater[i] = yposListwater[i] + yspeedListwater[i];


  if(yposListLemon[i] > height){
    yposListLemon[i] = height;
  }

  if(yposListorange[i] > height){
    yposListorange[i] = height;
  }

  if(yposListwater[i] > height){
    yposListwater[i] = height;
  }


}


checker = 0;
for(let j =0 ; j<30;j=j+1){
  if(yposListLemon[j] === height){
    checker = checker + 1;
  }
  if(yposListwater[j] === height){
    checker = checker + 1;
  }
  if(yposListorange[j] === height){
    checker = checker + 1;
  }

}
console.log(checker);

if(checker === 90){
  for(let j =0 ; j<30;j=j+1){
  yposListLemon[j] = 0;
  yposListwater[j] = 0;
  yposListorange[j] = 0;
}
}



}
