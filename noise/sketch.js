let offset = 0.0;


function setup() {
    createCanvas(windowWidth,windowHeight);

//    noLoop();
}

function draw() {
    background(120,0,120);

    for(let i = 0; i < width ; i = i + 30){
      offset = 0.0;
      for (let h = 0; h < height; h = h + 30){

        let dia = noise(offset)*30;
        ellipse(i,h,dia,dia);
        offset = offset + 0.1;

      }
    }





}
