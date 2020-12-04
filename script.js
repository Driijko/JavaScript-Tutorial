function setup() {
    createCanvas(1200, 2000);
    background(0);
    noLoop();
}

const info = new Info();

function draw() {

    // EXPRESSIONS //////////////////////////////////////////////////

    // 1 Types and Literals /////////////////////////////////////////

    // 1.1 Primitive Types 

    // Numeric Literals //////////////////////////////////////////

    // info.display(
    //     "An integer:",
    //     345
    // )

    // info.display(
    //     "A floating point number:",
    //     45.67
    // )

    // // Number Base Prefixes

    // info.display(
    //     "101101 in binary is equivalent to:",
    //     0b101101
    // )

    // info.display(
    //     "3725 in octal is equivalent to:",
    //     0o3725
    // )

    // info.display(
    //     "f9a32c in hexadecimal is equivalent to:",
    //     0xf9a32c
    // )

    // // Exponent Notation Suffix

    // info.display(
    //     "4.2679e12 is equivalent to:",
    //     4.2679e12
    // )

    // // BigInt Suffix

    // info.display(
    //     "10 to the power of 1000 is:",
    //     10n ** 1000n
    // )

    // // String Literals /////////////////////////////////////////

    // // Quotes and Double-Quotes

    // info.display(
    //     "A string:",
    //     'This is a string!'
    // )

    // info.display(
    //     "Another string:",
    //     "This is a string!"
    // )

    // // Template Literals

    // info.display(
    //     "One more string:",
    //     `The sum of 9 and 6 is ${9 + 6}.`
    // )

    // // Boolean Literals /////////////////////////////////////////

    // info.display(
    //     "A boolean:",
    //     true
    // )

    // info.display(
    //     "The other boolean:",
    //     false
    // )

    // // null and undefined //////////////////////////////////////////

    // let variable;

    // info.display(
    //     "If a variable has not been given a value it is:",
    //     variable
    // )

    // variable = null;

    // info.display(
    //     "If we want to give a variable no particular value we can use:",
    //     variable
    // )

    // // 1.2 Object Type //////////////////////////////////////////////////

    // // 1.2.1 Data-Structures ///////////////////////////////////////////

    // // Objects 

    // info.display(
    //     "An object:",
    //     {
    //         name: "Katara",
    //         element: "water",
    //         tribe: "Northern Water",
    //     }
    // )

    // // Arrays

    // info.display(
    //     "An array:",
    //     [34, 23, 65, 7, 12, 5,]
    // )

    // // 1.2.2 Functions ////////////////////////////////////////////////
    // info.display(
    //     "A function:",
    //     function (a, b) {
    //         return a + b;
    //     }
    // )

    // 2 Operators ////////////////////////////////////////////////////

    // Arithmetic Operators

    info.display(
        "The sum of 2 and 2 is:",
        2 + 2
    )

    info.display(
        "5 minus 3 is:",
        5 - 3
    )

    info.display(
        "2 multiplied by 2 is:",
        2 * 2
    )

    info.display(
        "8 divided by 3 is:",
        8 / 3
    )

    info.display(
        "Dividing 9 by 4 leaves a remainder of:",
        9 % 4
    )

    info.display(
        "2 to the power of 6 is:",
        2 ** 6
    )

    // Concatenation

    info.display(
        "Combine the strings 'Hello' and ' ' and 'World!':",
        "Hello" + " " + "World!"
    )

    // Comparative

    info.display(
        "'hello' equals 'world'?",
        "hello" === "world"
    )

    info.display(
        "3 does not equal 8?",
        3 !== 8
    )

    info.display(
        "9 is greater than 3?",
        9 > 3
    )

    info.display(
        "0 is less than -5?",
        0 < -5
    )

    info.display(
        "6 is less than or equal to 6?",
        6 <= 6
    )

    info.display(
        "7 is greater than or equal to 6?",
        7 >= 6
    )

    // Logical

    info.display(
        "2 equals 2 and 5 is greater than 10?",
        2 === 2 && 5 > 10
    )

    info.display(
        "2 equals 2 or 5 is greater than 10?",
        2 === 2 || 5 > 10
    )

    info.display(
        "If 2 equals 2 is true, than the opposite is:",
        ! 2 === 2
    )

    // Ternary / Conditional Operator
    info.display(
        "If it's true that 3 is greater than 2, say, yes, otherwise no.",
        3 > 2 ? "yes" : "no"
    )

    info.display(
        "If it's true that 3 is greater than 4, say, yes, otherwise no.",
        3 > 4 ? "yes" : "no"
    )

    // Precedence Parentheses
    info.display(
        "Subtract 2 from 5, then multiply the result by 3:",
        (5 - 2) * 3
    )

    info.display(
        "Multiply 2 by 3, and subtract the result from 5:",
        5 - (2 * 3)
    )

    // 3 Keywords and Global Properties ////////////////////////////////
    
    info.display(
        "10 to the power of 1000 is:",
        10 ** 1000
    )

    info.display(
        "Let's divide zero by zero:",
        0 / 0
    )

    // 4 Variable and Function Call Evaluation

    let num = 46;

    info.display(
        "The value of the variable 'num' is:",
        num
    )

    const array = [2, 54, 77, 12, 75];

    info.display(
        "The value stored at index 3 is:",
        array[3]
    )

    const obj = {
        name: "Katara",
        element: "water",
        tribe: "Northern Water",
    }

    info.display(
        "The value for the key 'name' is:",
        obj.name
    )

    info.display(
        "The value fo the key 'tribe' is:",
        obj["tribe"]
    )

    const obj2 = {
        number: 5,
        numberPlusOne: this.number + 1
    }

    info.display(
        "Using 'this':",
        obj2.numberPlusOne
    )

    function sum(a, b) {
        return a + b;
    }

    info.display(
        "The return value of the function 'sum' with arguments 2 and 2:",
        sum(2, 2)
    )


}



