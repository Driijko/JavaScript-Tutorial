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

    // Converting Other Data-Structures to Objects

    // Arrays

    const array = [323, 54, 654, 23, 67, 34];

    const obj = Object.assign({}, array);

    info.tag(
        "Build an object from an array:",
        obj
    );

    const rec = {
        width: 4, 
        height: 5,
    };

    info.tag(
        "Add array entries to object:",
        Object.assign(rec, array)
    );

    // Maps
    const map = new Map();
    map.set("posX", 5);
    map.set("posY", 8);

    // The .entries method is not the same for maps!
    // Returns an iterator object

    info.tag(
        "Build an object from scratch with map entries:",
        Object.fromEntries(map.entries())
    );

    info.tag(
        "Add map entries to an object:",
        Object.assign(rec, Object.fromEntries(map.entries()))
    )

}