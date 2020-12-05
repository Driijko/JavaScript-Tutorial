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

    // Copying an Object ////////////////////

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

    // const rec2 = rec1;

    // rec2.width = 10;

    // info.tag(
    //     "Rectangle 1's width:",
    //     rec1.width
    // );

    // Solution
    // const rec2 = Object.assign({}, rec1);
    // const rec2 = {...rec1};

    // rec2.greeting();

    // rec2.greeting = function() {
    //     info.comment("Hi there!");
    // };

    // rec1.greeting();
    // rec2.greeting();

    // rec2.width = 10;

    // info.tag(
    //     "Rectangle 1's width:",
    //     rec1.width
    // );

    // Copying When Entries Include Data-Structures

    // rec2.pos.x = 45;

    // info.tag(
    //     "Rectangle 1's x position:",
    //     rec1.pos.x
    // )
}