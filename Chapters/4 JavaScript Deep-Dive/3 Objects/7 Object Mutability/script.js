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

    // Three static methods on Big Object for restriciting 
    // object mutability

    const rec = {
        width: 3,
        height: 6,
        pos: {
            x: 3,
            y: 9,
        },
    };

    Object.preventExtensions(rec);
    Object.seal(rec);
    Object.freeze(rec);

    rec.color = "blue";

    // Object.defineProperty(rec, "width", {
    //     value: 9,
    //     enumerable: false,
    // })

    rec.width = 5;

    info.tag(
        "Rectangle object:",
        rec
    );

    info.tag(
        "Is the rectangle object extensible?",
        Object.isExtensible(rec)
    );

    info.tag(
        "Is the rectangle object sealed?",
        Object.isSealed(rec)
    );

    info.tag(
        "Is the rectangle object frozen?",
        Object.isFrozen(rec)
    )
}