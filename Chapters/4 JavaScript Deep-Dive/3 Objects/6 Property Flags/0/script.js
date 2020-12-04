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

    // Property Flags //////////////////////////////

    // Property Descriptors
    const rec = {
        width: 5,
        height: 3,
        posX: 5,
        posY: 9,
        color: "blue",
    };

    // Get descriptor for one property
    // info.tag(
    //     "Property Descriptor for 'width' property:",
    //     Object.getOwnPropertyDescriptor(rec, "width")
    // )

    // Get descriptors for all properties
    // info.tag(
    //     "Property Descriptors of Rectangle Object:",
    //     Object.getOwnPropertyDescriptors(rec)
    // )

    // Rewriting Property Descriptors
    Object.defineProperty(rec, "width", {
        value: 2,
        configurable: false,
        writable: false,
        enumerable: false,
    });

    info.tag(
        "Property Descriptor for 'width' property of Rectangle Object:",
        Object.getOwnPropertyDescriptor(rec, "width")
    );

    // 'writeable: false' means cannot overwrite values
    // rec.width = 5;

    // info.tag(
    //     "Rectangle width:",
    //     rec.width
    // );

    // 'enumerable: false' means cannot be enumerated in iteration
    // for (const key in rec) {
    //     info.tag(key + ":", rec[key]);
    // };

    // We can still expose a non-enumerable proprety via
    // '.getOwnPropertyDescriptor(s)'
    // info.display(Object.getOwnPropertyDescriptors(rec));

    // 'configurable: false' means cannot remove a property
    delete(rec.width);

    info.tag(
        "Rectangle width:",
        rec.width
    );

    // This gives an error:
    Object.defineProperty(rec, "width", {
        value: 6,
        writable: true,
        enumerable: true,
        configurable: true,
    });
}