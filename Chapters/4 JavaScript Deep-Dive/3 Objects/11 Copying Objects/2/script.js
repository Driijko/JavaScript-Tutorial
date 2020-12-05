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

    // Copying an Object Part 3 ////////////////////

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

    Object.setPrototypeOf(rec1, rec);

    rec1.moveDown();

    info.tag(
        "The y position of rectangle 1:",
        rec1.pos.y
    )

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
            // Object.setPrototypeOf(clone, Object.getPrototypeOf(ds));

            for (const key in ds) {
                if (ds.hasOwnProperty([key])) {
                    if (info.mainType(ds[key]) === "DataStructure") {
                        clone[key] = deepClone(ds[key]);
                    }
                    else {
                        clone[key] = ds[key];
                    }
                }
            }
            return clone;
        }
    }

    const rec2 = deepClone(rec1);
    rec2.moveDown();

    // This works because 'for...in...' iterates over inherited properties!
    // Without setting rec2 to have a prototype of rec1, we can think
    // this has happened because 'for...in...' tricks us!
    
    info.tag(
        "The y position of rectangle 2:",
        rec2.pos.y
    );

    info.tag(
        "Is the rectangle prototype the prototype of rectangle 2?",
        rec.isPrototypeOf(rec2)
    )

}