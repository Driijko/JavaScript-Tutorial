function setup() {
    createCanvas(1000, 1000);
    background("black");
    frameRate(1);
    noLoop();
}


const circles = [];


for (let i = 0 ; i < 50 ; i++) {
    circles[i] = {
        x: randRange(0, 1000),
        y: randRange(0, 1000),
        strokeWeight: randRange(10, 20),
        size: randRange(50, 200),
        strokeColor: randColor(0.7),
        fillColor: randColor(0.5),
    }
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

function randRange(min, max) {
    return min + Math.floor(Math.random() * ((max - min) + 1));
}

function randColor(alpha=1) {
    return `rgba(
        ${randRange(0, 255)},
        ${randRange(0, 255)},
        ${randRange(0, 255)},
        ${alpha}
    )`;
}