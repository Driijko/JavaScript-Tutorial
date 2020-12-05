// Add a type attribute to the script element for
// script.js, and give it the value "module".

// import {message} from "./moduleExample.js";

// console.log(message);

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

    // Code and Interpreters
    // Every browser includes a JS interperter

    // Breaking JavaScript down into segments of code yields
    // 6 basic categories:
    // Signifiers
    // Comments
    // Expressions
    // Statements
    // Code Blocks
    // Modules

    // Signifiers ///////////////////////////////////////////////////////
    // A signifier is a character or collection of characters that can 
    // be given a specific meaning by an interpreter

    // A signifier can be a single character:
    +

    // Or a chain of characters:
    453

    // Comments ///////////////////////////////////////////////////////
    // Comments are signifed by two forward slashes: '//'
    // Comments allow us to add code that is essentially ignored by
    // the interpreter. All the interpreter cares about is noticing the 
    // comments signifier and skipping that line or series of lines.

    // Expression ///////////////////////////////////////////////////
    // An expression can be evaluated to some type,
    // either a primitive type, a data-structure type, or a function.
    // For example, an arithmetic expression can be evaluated
    // to a ~Number~
    info.comment("The arithmetic expression '45 + (23 / 90) * (2 - 186)' reduces to:")
    info.display(45 + (23 / 90) * (2 - 186));
        
    // Ultimately, much of the code you write is some kind of expression

    // Statements /////////////////////////////////////////////////////
    // Statements usually have very specific syntactic structures.
    // They often require expressions to be placed at positions
    // within those structures.
    // The statement "does" something particular in terms of code
    // execution, often in response to various expressions.

    // Example:
    // A conditional statement executes some code only if the condition
    // it analyzes is true.
    const num = 11;
    if (num > 10) {
        info.comment(`The number ${num} is greater than 10`);
    };

    // We end statements with a semi-colon: ';'

    // Code Blocks ////////////////////////////////////////////////////
    // Code Blocks are typically signified by curly braces: {}.
    // There are a few types of statements which create code blocks.
    // Variable names are interpreted relative to code blocks.

    {
        const num = 5;
        info.tag("Interpretation of 'num' within local code block:",num);
    }

    info.tag("Interpretation of 'num' outside of code block:", num);

    // Modules /////////////////////////////////////////////////////////
    // Modules allow us to connect multiple JS files together
    // to access data and functions from other files.
    // With modules, it's easier to structure multi-file programs.
}