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

    // Converting Objects to Other Types

    const rec = {
        width: 4, 
        height: 65,
        posX: 5,
        posY: 9,
        color: "blue",
    };

    // To Strings /////////////////

    info.tag(
        "Using .toString on rectangle object:",
        rec.toString()
    );

    info.comment("Using JSON.stringify on rectangle object:");
    info.display(JSON.stringify(rec));

    // To Arrays /////////////////////
    info.comment("Make an array of object keys:");
    info.display(Object.keys(rec));

    info.comment("Make an array of object values:");
    info.display(Object.values(rec));

    info.comment("Make an array of object entries:");
    info.display(Object.entries(rec));

}