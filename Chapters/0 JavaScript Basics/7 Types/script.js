function setup() {
    createCanvas(1000, 1000);
    background("black");
    frameRate(1);
    noLoop();
}

const color1 = "blue";
const color2 = "pink";

let x = 0;
let y = 0;

const circleSize = 10;

const interval = 100;

function draw() {

    strokeWeight(10);
    stroke(color1);
    fill(color2);

    outer: for (let i = 0 ; i < 21 ; i++) {
        
        x = 50 * i;

        inner: while(true) {
            circle(x, y, circleSize + (i * 5));
            x += 50;
            if (x > 1000) {
                break inner;
            }
        }

        y += 50;
    }
}