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

    // Copying an Object Part 4 ////////////////////

    // Flag Aware Copying

    const rec = {
        moveDown() {
            this.pos.y += 1;
        }
    }

    const rec1 = {
        width: 4,
        height: 7,
        pos: {
            x: 3, 
            y: 4,
        },
        greeting() {
            info.comment("Hello!");
        },
        friends: [
            {
                name: "Aditya",
                skills: ["Python", "hang-gliding"],
            },
            {
                name: "Laurie",
                skills: ["JavaScript", "bowling"],
            },
        ],
    };

    Object.defineProperty(rec1, "width", {
        configurable: false,
        writable: false,
    });

    Object.defineProperty(rec1, "pos", {
        configurable: false,
    });

    function deepClone(ds) {

        if (info.type(ds) === "Array") {
            const clone = ds.map(value => {
                if (info.mainType(value) === "DataStructure") {
                    return deepClone(value);
                }
                else {
                    return value;
                }
            })

            return clone;
        }
        else if (info.type(ds) === "Object") {
            const clone = {};

            // We can add this line to make our cloning prototype aware!!!!!
            Object.setPrototypeOf(clone, Object.getPrototypeOf(ds));

            for (const key in ds) {
                if (info.mainType(ds[key]) === "DataStructure") {
                    clone[key] = deepClone(ds[key]); 
                    const propertyDescriptor = Object.getOwnPropertyDescriptor(ds, [key]);
                    Object.defineProperty(clone, [key], {
                        configurable: propertyDescriptor.configurable,
                        writable: propertyDescriptor.writable,
                        enumerable: propertyDescriptor.enumerable,
                    });
                }
                else {
                    // We can add this line to make our cloning flag aware!!!!!
                    Object.defineProperty(clone, [key], Object.getOwnPropertyDescriptor(ds, [key]));
                }
            }
            return clone;
        }
    }

    const rec2 = deepClone(rec1);

    info.tag(
        "Property Descriptor for rectangle 2's width property:",
        Object.getOwnPropertyDescriptor(rec2, "width")
    )

    info.tag(
        "Property Descriptor for rectangle 2's pos property:",
        Object.getOwnPropertyDescriptor(rec2, "pos")
    )
}