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

    // Property Flags Part 3 //////////////////////////////

    // Default Property Flag Settings
    let rec = {
        width: 5,
    }
    // Without using 'defineProperty(ies)', all flags are set to true.
    // With using 'defineProperty(ies)', all flags default set to false.

    info.tag(
        "Property descriptor of rectangles width property:",
        Object.getOwnPropertyDescriptor(rec, "width")
    )

    Object.defineProperty(rec, "height", {value: 8});

    info.tag(
        "Property descriptor for rectangles height property:",
        Object.getOwnPropertyDescriptor(rec, "height")
    )

    // Creating an Object from the Ground Up with Property Descriptors
    rec = Object.create({}, {
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
            enumerable: true,
            writeable: true,
        },
        posY: {
            value: 0,
            enumerable: true,
            writeable: true,
        },
    });

    info.tag(
        "Property descriptors of rectangle object:",
        Object.getOwnPropertyDescriptors(rec)
    )
}