function setup() {
    createCanvas(1200, 2000);
    background("black");
    noLoop();
}

const info = new Info();

function draw() {

    // Understanding Decimal vs. Binary Notation ///////////////////////////

    const decString = "(100 * 6) + (10 * 9) + (1 * 5)";

    info.display(
        `${decString} = `,
        eval(decString)
    );

    info.display(
        "1000 in binary is:",
        parseInt(1000, 2)
    );

    const digits = 4;

    info.display(
        `In decimal notation, you can represent values between 0 and ${(10 ** digits) - 1} with ${digits} digits`
    );

    info.display(
        `In binary notation, you can represent values between 0 and ${(2 ** digits) - 1} with ${digits} digits.`
    );

    // Bytes 

    info.display(
        `A byte is 8 bits long, and can represent values between 0 and ${(2 ** 8) - 1}`
    );

    // JavaScript Numbers and Bit Representation ///////////////////////////
    // 64 bits
    info.display(
        `With 64 bits, we can represent values between 0 and ${((2n ** 64n) - 1n)}`
    )

    // Sign
    info.display(
        `With one bit for positive/negative: ${-((2n ** 63n) - 1n)} to ${(2n ** 63n) - 1n}`
    )

    // Decimal Point Numbers: 11 bits
    // Leaving 52 bits for integer values
    // But with implict assumption that last digit is 1, we get 
    // 53 bits worth of data.
    info.display(
        `The biggest safe integer in JavaScript is ${(2 ** 53) - 1} ?`,
        ((2 ** 53) - 1) == Number.MAX_SAFE_INTEGER
    )

    // JavaScript can be precise with after-decimal-point numbers up to about
    // 17 digits.

    info.display(
        `The biggest unsafe number in JavaScript: ${Number.MAX_VALUE}`
    )

    // Precision starts to break down...
    info.display(
        `MAX_VALUE  <  MAX_VALUE + 1?`,
        Number.MAX_VALUE < Number.MAX_VALUE + 1
    )

    // Go to high...
    info.display(
        `MAX_VALUE * 2   =   infinity ?`,
        Number.MAX_VALUE * 2 === Infinity
    )

    // BigInt Type to the rescue
    // Can use any arithmetic operation, as long as all 
    // types being operated over are BigInts.
    // Can't use Math methods.
    info.display(
        `${10n ** 1000n}`
    )

    // Numeric Bases ////////////////////////////////////////////

    // Binary
    info.display(
        "Binary: 100 + 1:",
        0b10 + 0b1
    )

    info.display(
        "Convert 1000 decimal to binary string:",
        (1000).toString(2)
    )

    // Octal
    info.display(
        "Octal: 100 + 1:",
        0o100 + 0o1
    )

    info.display(
        "Convert 8 decimal to octal string:",
        (8).toString(8)
    )

    // Hexadecimal

    let hexString = "";

    for(let i = 0 ; i < 17 ; i++) {
        hexString += `0x${(i).toString(16)}, `;
    }

    info.display(
        "Counting in hexadecimal, 0 to 16:"
    )

    info.display(
        hexString
    )

    info.display(
        "Convert hexadecimal 0x1a to decimal:",
        0x1a
    )

    // Scientific / Exponential Notation ///////////////////////////////////
    
    info.display(
        "125634000000000000000000 represented with exponential notation:",
        (125634000000000000000000).toExponential()
    )

    info.display(
        "0.00000000000023454 represented with exponential notation:",
        (0.00000000000023454).toExponential()
    )

    // NaN

    info.display(
        "Let's divide zero by zero!",
        0 / 0
    )

    info.display(
        "Does NaN equal itself?",
        NaN === NaN
    )

    info.display(
        "Is the result of dividing zero by zero not a number?",
        Number.isNaN(0/0)
    )

    // Converting Types to Numbers ///////////////////////////////////////

    info.display(
        "converting booleans, true =",
        Number(true)
    )

    info.display(
        "converting strings: '1223' =",
        Number("1223")
        // Number("   1267y23")
    )

    // parseInt
    // ignores leading whitespace
    // parses till it hits a non-numeric character
    // uses second paramter, radix, as a basis to judge
    // which characters are (not) numeric
    info.display(
        "converting strings with the parseInt method, '   12y23' =",
        Number.parseInt("   12y23", 10)
    )

    info.display(
        ".parseInt, convert binary '1001101' to decimal:",
        Number.parseInt("1001101", 2)
    )

    info.display(
        ".parseFloat, '12.436t234':",
        Number.parseFloat('12.436t234')
    )



    // The Number Object //////////////////////////////////////

    // Properties:
    // EPSILON, MAX_SAFE_INTEGER, MAX_VALUE,
    // MIN_SAFE_INTEGER, MIN_VALUE, NaN, 
    // NEGATIVE_INFINITY, POSITIVE_INFINITY

    // Static Methods /////////////////////////////////////////////
    // Number() (convert type to number)
    // isNaN, isFinite, isInteger, isSafeInteger, 
    // parseFloat, parseInt

    // Instance Methods /////////////////////////////////////////
    // toExponential, toFixed, toLocaleString,
    // toPrecision, toString, valueOf

    // The Math Object ////////////////////////////////////////////

    // Mathematical Constants

    info.display(
        "pi:",
        Math.PI
    )

    info.display(
        "e:",
        Math.E
    )

    // Methods
    // Trigonometry
    // Exponents and Roots
    // Logarithms
    // Rounding
    // Randomness
    // Ranges (min/max)
    // abs, sign
}