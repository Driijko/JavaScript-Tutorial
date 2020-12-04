let fontRegular;
function preload() {
    fontRegular = loadFont("./assets/visual/fonts/Montserrat-Regular.ttf");
}

function setup() {
    createCanvas(1200, 4000);
    background(0);
    noLoop();
}

const info = new Info();

function draw() {

    // Getting non-enumerable properties
    const rec = Object.create({}, {
        width: {
            value: 1,
            enumerable: true,
        },
        height: {
            value: 1,
            enumerable: true,
        },
        posX: {
            value: 0,
            writeable: true,
        },
        posY: {
            value: 0,
            writeable: true,
        },
    });


}