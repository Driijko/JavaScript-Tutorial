function setup() {
    createCanvas(1000, 1000);
    background("black");
    frameRate(1);
    noLoop();
}

const color1 = "blue";
const color2 = "red";

let x = 500;
let y = 500;
let circleSize;
let randomFloat1;
let randomFloat2;

const firstLine = 850;
const interval = 50;

function draw() {

    // JAVASCRIPT
    random1 = Math.floor(Math.random() * 500);
    random2 = Math.floor(Math.random() * 500);
    x = Math.max(random1, random2);
    y = Math.max(random1, random2);
    circleSize = Math.min(random1, random2);

    // P5
    background("black");
    fill(color2);

    noStroke();
    textSize(30);
    text(`Circle size: ${circleSize},    x,y: ${x}`, 50, firstLine);
    text(`random1: ${random1},    random2: ${random2}`, 50, firstLine + interval);
    text(`Nonsense: ${5/0}`, 50, firstLine + (interval * 2));


    strokeWeight(5);
    stroke(color1);
    circle(x, y, circleSize);
    
}