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

    // The 3 meanings of "object" in JS /////////////////
    
    // 1) A specific type of data-structure, exemplified by an object literal.
    // 2) Object-Type: Any example of the type Object: arrays, functions, maps, etc
    // 3) Big Object: the built-in object Object

    // Object Literals and Objects as a Specific Type of Data-Structure /////////
    // Properties and Methods
    // Key-Value Pairs
    // Keys are always strings
    // Values can be of any type

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
    info.comment();

    // The JavaScript Type System ////////////////////////
    info.tag("An array is an example of the JavaScript type:", typeof([3, 2]));

    const map = new Map();

    info.tag("Are map data-structures also objects?", typeof(map) === "object");
    
    const set = new Set();

    info.tag("Sets as well?", typeof(set) === "object");

    // But remember, the 'typeof' operator is weird:
    function sum(a, b) { return a + b; };
    info.tag(
        "Aren't functions also supposed to be objects?", 
        typeof(sum) === "object"
    );
    info.tag(
        "And primitive types are never objects, right?", 
        typeof(null) !== "object"
    );
    info.comment();

    // Built-in Object /////////////////////////

    Number, Math, String, Array, Object

    // Example
    info.comment("The key strings of the Rectangle Object:");
    info.display(Object.keys(rec));

}