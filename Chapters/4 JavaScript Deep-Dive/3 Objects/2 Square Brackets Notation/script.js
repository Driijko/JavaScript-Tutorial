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

    // Square Brackets Notation /////////////////////////////////

    const rec = {
        width: 4,
        height: 10,
        pos: {
            x: 3,
            y: 7,
        },
        color: "blue",
        greet() {
            info.comment("Hello!");
        },
        friends: ["Alphonso", "Laurie", "Aditya"],
    };

    // With Arrays
    const array = [34, 23, 654, 876];

    info.tag("Value at index 2:", array[2]);

    array[2] = 17;

    info.tag("New value at index 2:", array[2]);

    // With Objects

    // Access a property:
    const recHeight = rec["height"];
    info.tag("Rectangle Height:", recHeight);

    // Overwrite a property:
    rec["width"] = 34;
    info.display(rec);

    // Add a property:
    rec["name"] = "Tamil";
    info.display(rec);

    // Call a method:
    rec["greet"]();

    // Chain
    info.tag("Rectangles x position:", rec["pos"]["x"]);

    // Square Brackets allow evaluation
    info.tag("Value at index 1:", array[7 - 6]);

    info.tag("Rectangle width:", rec["wid" + "th"]);

    // When is that useful? 
    // Example: iteration 
    for (const num of array) {
        info.display(num);
    }

    for (const key in rec) {
        info.tag(key + ":", rec[key]);
    }

    // Computed Properties 
    for (const key in rec) {
        if (typeof(rec[key]) === "number") {
            rec["max-" + key] = rec[key] * 2;
        }
    }

    info.display(rec);

}