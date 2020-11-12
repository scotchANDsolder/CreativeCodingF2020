
let maxH = 500;

function setup() {
    createCanvas(windowWidth, windowHeight);
    noStroke();

    //noiseSeed(1);


}

function draw() {
    background(120,0, 120);
    fill(20,180);

    let x = 0;
    for (x = 0; x < width; x = x + 50) {
        let buildingHeight = noise(x) * maxH;

        rect(x, (90/100*height) - buildingHeight , 50, buildingHeight);
    }

    fill(150);
    //rect(0, height * .9, width, height * .5);
}


// Note: what happens if you change the noise call above to this:
// let buildingHeight = noise(x * frequency, frameCount * frequency) * amplitude;
