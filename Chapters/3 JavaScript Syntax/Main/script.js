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

    // JavaScript Signifiers /////////////////////////////////

    // 4 Character Types
    // Numeric: 0 - 9
    // Alphabetic: a - z, A - Z
    // Punctuation: ! # $ & * () _ {} [] / ; : "" '' , . ?
    // Mathematical: % * - + = < > ?
    // Formatting: Space, Tab, Line

    // Keywords /////////////////////////////////////////////////
    let;
    const;
    this;
    while;
    function;
    in;
    Infinity;
    if;
    break;
    
    // Variable Naming ///////////////////////////////////////

    // must not include punctuation!
    // With some exceptions to be reviewed later
    // let ed?;
    // let >rew;
    // let yr(er;

    // no spaces! no dashes! Camel-casing
    // let my name;
    // let my-name;
    let myName;

    // no numbers at the beginning
    // let 2ed;
    let name4;

    // variable names can be looooooooong
    let myNameIsIncrediblyFantasticAndUniqueAndManyPeopleSaluteMyNameOnADailyBasis;

    // Two things to consider:
    // Long names are longer to write, and can become difficult to read
    // Short names can be overly ambigious or general

    // Example
    // Your counting cats and storing the count in a variable.
    let a = 6;
    let count = 6;
    let numberOfCatsCounted = 6;
    let catCount = 6;
    let numOfCats = 6;
    
    // Readability vs. brevity

    // Encasing Signifiers: 
    // ( )
    // " "
    // ' '
    // [ ]
    // { }
    ((((3 + 7) - 6) * 8) / 20)

}