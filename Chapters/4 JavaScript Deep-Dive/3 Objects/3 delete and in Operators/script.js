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

    // 'delete' and 'in' Operators /////////////////

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

    // 'delete' Operator //////////////////////////

    delete rec.color;
    info.display(rec);

    // 'in' Operator ///////////////////////

    info.tag(
        "Does the rectangle have a width?",
        "width" in rec
    );
}