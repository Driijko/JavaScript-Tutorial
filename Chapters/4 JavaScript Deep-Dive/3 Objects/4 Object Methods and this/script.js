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

    // Object Methods and 'this' ////////////////////////////////////////

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
    
    // Naming an object directly /////////////////////////
    rec.moveRight = function() {
        rec.pos.x += 1;
    }

    rec.moveRight();

    info.tag("Rectangles x position:", rec.pos.x);

    // Using 'this' //////////////////////////////////////
    rec.moveDown = function() {
        this.pos.y += 1;
    }

    rec.moveDown();

    info.tag("Rectangles y position:", rec.pos.y);

    // Demo with two objects //////////////////////////////////

    const rec2 = {
        pos: {
            x: 4,
            y: 50,
        },
    }

    rec2.moveRight = rec.moveRight;
    rec2.moveDown = rec.moveDown;

    rec2.moveRight();
    rec2.moveDown();

    info.tag("Original rectangle position:", rec.pos);
    info.tag("Rectangle 2 position:",rec2.pos);  

}