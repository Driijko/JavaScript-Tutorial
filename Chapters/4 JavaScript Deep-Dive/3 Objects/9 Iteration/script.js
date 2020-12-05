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

    const rec = {
        moveDown() {
            this.posY += 1;
        },
    };

    let rec1 = {
        width: 5,
        height: 4,
        posX: 5,
        posY: 9,
    };

    Object.setPrototypeOf(rec1, rec);

    // 'for...in...' iterates over inherited entries! ///////////

    // for (const key in rec1) {
    //     info.tag(
    //         key + ":",
    //         rec1[key]
    //     );
    // };

    // info.tag(
    //     "Rectangle 1:",
    //     rec1
    // );

    // To avoid inherited entries ///////////////////

    // const keys = Object.keys(rec1);

    // info.tag(
    //     "An array of key strings:",
    //     keys
    // );

    // for(const key of keys) {
    //     info.tag(
    //         key + ":",
    //         rec1[key]
    //     );
    // };

    for (const key in rec1) {
        if (rec1.hasOwnProperty(key)) {
            info.tag(
                key + ":",
                rec1[key]
            );
        };
    };


    // Non-enumerable Properties //////////////////
    Object.defineProperties(rec1, {
        width: {
            enumerable: false,
        },
        height: {
            enumerable: false,
        },
    });

    info.comment("Property descriptor for rectangle 1's width property:");
    info.display(Object.getOwnPropertyDescriptor(rec1, "width"));

    for (const key in rec1) {
        info.tag(
            key + ":",
            rec1[key]
        )
    };

    info.comment("Creating an array from rectangle 1's property values:");
    info.display(Object.values(rec1));

    // Exposing non-enumerable properties ////////////////////////
    info.tag(
        "Property Descriptors:",
        Object.getOwnPropertyDescriptors(rec1)
    );

    info.comment("Get all own property names, including non-enumerables:");
    info.display(Object.getOwnPropertyNames(rec1));

}