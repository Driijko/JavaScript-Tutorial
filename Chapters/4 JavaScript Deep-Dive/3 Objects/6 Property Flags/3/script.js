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

    // Checking enumerability
    info.tag(
        "Is the 'width' property of the Rectangle enumerable:",
        rec.propertyIsEnumerable("width")
    );

    info.tag(
        "Is the posX property of the rectangle enumerable?",
        rec.propertyIsEnumerable("posX")
    )

    info.comment("Non-enumerable properties are not exposed by a 'for...in...' loop:")
    for (const key in rec) {
        info.display(key);
    };

    info.comment();
    info.comment("Non-enumerable properties are exposed by the .getOwnPropertyNames method")
    info.display(Object.getOwnPropertyNames(rec));

    for (const key of Object.getOwnPropertyNames(rec)) {
        info.display(rec[key]);
    };
}