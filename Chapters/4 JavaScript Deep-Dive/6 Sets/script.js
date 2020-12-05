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

    // Sets ////////////////////////////////////////
    // A collection of values, no keys
    // Values can be of any type

    // Similar syntax to map //////////////

    // Add values
    let set = new Set();
    set.add(4);
    set.add(6);
    set.add(9);

    // Check values
    info.tag(
        "Does the set have the number 9?",
        set.has(9)
    );

    // Determine size
    info.tag(
        "How many values are in the set?",
        set.size
    );

    // Delete values
    set.delete(9);
    set.clear();

    info.tag(
        "Does the set have the number 9?",
        set.has(9)
    );

    info.tag(
        "Empty set:",
        set
    );

    // A value can only be added to a set once! ////////////////
    set.add(1);
    set.add(3);
    set.add(9);

    info.display(set);

    set.add(1);

    info.display(set);

    set.clear();

    const obj = {
        name: "Aang",
        element: "all",
        tribe: "Souther Air Temple",
    };
    
    set.add(obj);

    info.tag(
        "How many values are in the set?",
        set.size
    );

    let obj2 = obj;
    set.add(obj2);

    info.tag(
        "How many values are in the set?",
        set.size
    );

    obj2 = {...obj};

    set.add(obj2);

    info.tag(
        "How many values are in the set?",
        set.size
    );

    // Sets, Arrays and Strings ///////////////////////
    set = new Set([23, 2, 1, 65, 34, 66, 324]);

    info.display(set);

    set = new Set("hello");

    info.display(set);

    // Iteration /////////////////////////////////////
    set = new Set([32, 6, 21, 65, 74, 23]);

    // for (const value of set) {
    //     info.display(value);
    // };

    // set.forEach(value => {
    //     info.display(value);
    // });

    // Iterator Objects /////////////////////////////
    // .keys and .values do the same thing!

    for (const value of set.keys()) {
        info.display(value);
    };

    for (const value of set.values()) {
        info.display(value);
    };

    // .entries returns a two value array: [value, value]
    for (const entry of set.entries()) {
        info.display(entry);
    };
}