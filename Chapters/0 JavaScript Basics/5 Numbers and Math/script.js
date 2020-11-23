function setup() {
    createCanvas(1000, 1000);
    background("black");
    frameRate(1);
    // noLoop();
}

let color1 = "blue";
let color2 = "red";

let x = 5;
let y = 5;
let dir = 5;
let circleSize = 50;
let strokeW = 5;


const firstLine = 900;
const interval = 50;

function draw() {

    // JAVASCRIPT

    // Stroke Weight
    strokeW = x > 500 ? 30 : 5;

    if (x > 500) {
        strokeW = 30;
    }
    else {
        strokeW = 5;
    }

    // Circle Direction
    x += dir;
    y += dir;

    if (x === 1000 || x === 0) {
        dir *= -1;
    }

    // Circle Size
    if (
        x < 500 && dir > 0
        || x > 500 && dir < 0
    ) {
        circleSize += 5;
    }
    else {
        circleSize -= 5;
    }

    // Circle Color
    switch(frameCount % 4) {
        case 0:
            color1 = "red";
            color2 = "blue";
            break;
        case 1:
            color1 = "cyan";
            color2 = "magenta";
            break;
        case 2: 
            color1 = "green";
            color2 = "grey";
            break;
        default:
            color1 = "aqua";
            color2 = "white";
    }


    // P5
    background("black");
    fill(color2);

    noStroke();
    textSize(30);
    // text(`${1000 % 3 === 0}`, 50, firstLine);
    // text(`random1: ${random1},    random2: ${random2}`, 50, firstLine + interval);


    strokeWeight(strokeW);
    stroke(color1);
    circle(x, y, circleSize);
    
}