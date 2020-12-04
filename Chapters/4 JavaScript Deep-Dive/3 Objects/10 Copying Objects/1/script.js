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

    // Copying an Object Part 2 ////////////////////

    // Copying by reference /////////////////

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

    // Solution: Recursive Deep-Cloning
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
            for (const key in ds) {
                if (info.mainType(ds[key]) === "DataStructure") {
                    clone[key] = deepClone(ds[key]);
                }
                else {
                    clone[key] = ds[key];
                }
            }
            return clone;
        }
    }

    const array1 = [1, 2, 3, 4, [34, 23, [34, 12, 54]]];
    const array2 = deepClone(array1);
    array2[0] = 5;

    info.tag("Array 1:", array1);
    info.tag("Array 2:", array2);

    const rec2 = deepClone(rec1);
    rec2.pos.x = 67;
    rec2.friends[0].skills[2] = "teleportation";

    info.tag("Rectangle 1:", rec1);
    info.tag("Rectangle 2:", rec2);
}