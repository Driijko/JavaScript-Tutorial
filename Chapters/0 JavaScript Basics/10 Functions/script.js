function setup() {
    createCanvas(1000, 1000);
    background("black");
    frameRate(1);
    noLoop();
}

const circles = [];

for (let i = 0 ; i < 50 ; i++) {
    circles[i] = new Circle();
}

function draw() {
    
    background(0);

    for (let i = 0 ; i < circles.length ; i++) {
        let circ = circles[i];
        strokeWeight(circ.strokeWeight);
        stroke(circ.strokeColor);
        fill(circ.fillColor);
        circle(circ.x, circ.y, circ.size);
    }
}