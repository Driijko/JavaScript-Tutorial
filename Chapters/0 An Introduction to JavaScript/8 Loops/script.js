function setup() {
    createCanvas(1000, 1000);
    background("black");
    frameRate(1);
    // noLoop();
}

let circleSize = 0;

const circ1 = {
    x: 500,
    y: 500,
    size: [50, 10, 43, 22, 16],
    strokeWeight: 10,
    strokeColor: "blue",
    fillColor: "red",
}

const circ2 = {
    x: 250,
    y: 800,
    size: [102, 45, 22, 10, 65],
    strokeWeight: 2,
    strokeColor: "pink",
    fillColor: "green",
}

const circ3 = {
    x: 250,
    y: 80,
    size: [200, 34, 66, 267, 100],
    strokeWeight: 50,
    strokeColor: "orange",
    fillColor: "white",
}

const circ4 = {
    x: 0,
    y: 800,
    size: [500, 300, 200, 40, 1000],
    strokeWeight: 20,
    strokeColor: "magenta",
    fillColor: "pink",
}

const circ5 = {
    x: 700,
    y: 400,
    size: [20, 350, 22, 101, 333],
    strokeWeight: 5,
    strokeColor: "cyan",
    fillColor: "purple",
}

const circles = [
    circ1,
    circ2,
    circ3,
    circ4,
    circ5
]

function draw() {
    
    background(0);

    for (let i = 0 ; i < circles.length ; i++) {

        let circ = circles[i];

        strokeWeight(circ.strokeWeight);
        stroke(circ.strokeColor);
        fill(circ.fillColor);
        circle(circ.x, circ.y, circ.size[circleSize]);
    }

    circleSize = (circleSize + 1) % 5;
}