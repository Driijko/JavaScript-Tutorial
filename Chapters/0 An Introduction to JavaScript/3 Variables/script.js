function setup() {
    createCanvas(1000, 1000);
    background("black");
    // frameRate(30);
}

const color1 = "yellow";
const color2 = "green";

let x = 500;
let y = 500;
let circleSize = 100;
let str = String.fromCodePoint(56070);

function draw() {

    // JAVASCRIPT
    x++;
    y--;
    

    // P5
    background("black");

    strokeWeight(5);
    stroke(color1);
    fill(color2);
    textSize(50);
    text(str, 200, 200);
    // circle(x, y, circleSize);
    
}