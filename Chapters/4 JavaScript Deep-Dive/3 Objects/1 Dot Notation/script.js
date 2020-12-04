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

    // Dot Notation ///////////////////////////

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

    info.tag("Rectangle Object:", rec);

    // To access a property:
    const recSize = rec.width * rec.height;
    info.tag("Rectangle size:", recSize);

    // To overwrite a property:
    rec.width = 45;
    info.tag("New rectangle width:", rec.width);

    // To add a property:
    rec.personality = "abrupt";
    info.display(rec);

    // To call a method:
    rec.greet();

    // Chain to access object within object:
    info.tag(
        "The x position of the rectangle:",
        rec.pos.x
    );

    info.tag(
        "The rectangles 2nd friend:",
        rec.friends[1]
    )

}