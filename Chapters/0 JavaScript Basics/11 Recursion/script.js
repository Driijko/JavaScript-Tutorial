function setup() {
    createCanvas(1000, 1000);
    background("black");
    frameRate(1);
    noLoop();
}



function draw() {

    strokeWeight(10);
    stroke(255, 50);
    fill(0, 50);
    recursiveCircle(500, 500, 5);

}

function recursiveCircle(x, y, gen) {
    if (gen >= 1) {
        circle(x, y, gen * 100);
    }
    if (gen > 1) {
        recursiveCircle(x + 100, y, gen - 1);
        recursiveCircle(x - 100, y, gen - 1);
        recursiveCircle(x, y + 100, gen - 1);
        recursiveCircle(x, y - 100, gen - 1);
    }
}

// rC(500, 500, 3)
//     rC(600, 500, 2)
//         rC(700, 500, 1)
//         rC(500, 500, 1)
//     rC(400, 500, 2)
//         rC(500, 500, 1)
//         rC(300, 500, 1)

// recursiveCircle(500, 500, 5)
// recursiveCircle(600, 500, 4)
// recursiveCircle(700, 500, 3)
// recursiveCircle(800, 500, 2)
// recursiveCircle(900, 500, 1)