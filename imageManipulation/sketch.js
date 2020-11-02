let img;

function preload(){
  img = loadImage('https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/France-003324_-_Mona_Lisa_%2816236519171%29.jpg/400px-France-003324_-_Mona_Lisa_%2816236519171%29.jpg');
  img1 = loadImage('https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/France-003324_-_Mona_Lisa_%2816236519171%29.jpg/400px-France-003324_-_Mona_Lisa_%2816236519171%29.jpg');
  img2 = loadImage('https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/France-003324_-_Mona_Lisa_%2816236519171%29.jpg/400px-France-003324_-_Mona_Lisa_%2816236519171%29.jpg');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(20,200,200);

}

function draw() {
  img.loadPixels();
  for(let x = 0; x < img.width ; x =x+1){
    for(let y = 0; y< img.height; y = y+1){
      let i = ( x + y * img.width) * 4;

      let pixr = img.pixels[i+0];
      let pixg = img.pixels[i+1];
      let pixb = img.pixels[i+2];
      let pixa = img.pixels[i+3];

      img.pixels[i+1] = 0;
      img.pixels[i+2] = 0;

    }
  }

  img.updatePixels();
  image(img,0,0);

  img1.loadPixels();
  for(let x = 0; x < img.width ; x =x+10){
    for(let y = 0; y< img.height; y = y+10){
      let i = ( x + y * img.width) * 4;

      let pixr = img1.pixels[i+0];
      let pixg = img1.pixels[i+1];
      let pixb = img1.pixels[i+2];
      let pixa = img1.pixels[i+3];

      fill(pixr,pixg,pixb,pixa);
      circle(400+x,y,10)


    }
  }


  img2.loadPixels();
  for(let x = 0; x < img2.width/2 ; x =x+1){
    for(let y = 0; y< img2.height; y = y+1){
      let i = ( x + y * img2.width) * 4;

      let pixr = img2.pixels[i+0];
      let pixg = img2.pixels[i+1];
      let pixb = img2.pixels[i+2];
      let pixa = img2.pixels[i+3];


      img2.pixels[i+0] = 0;
      img2.pixels[i+2] = 0;


    }
  }

  img2.updatePixels();
  image(img2,800,0);




}
