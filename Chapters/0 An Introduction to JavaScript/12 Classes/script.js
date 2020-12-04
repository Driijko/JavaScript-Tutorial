function setup() {
    createCanvas(1000, 1000);
    background("black");
    frameRate(60);
    // noLoop();
}

const roamerGroup = new RoamerGroup(1000, 1000, 50);
const flashRoamer = new FlashRoamer(500, 500, 100, 20);

function draw() {
    background("black");
    roamerGroup.display();
    flashRoamer.roam();
    flashRoamer.pulsate();
    flashRoamer.display();
}