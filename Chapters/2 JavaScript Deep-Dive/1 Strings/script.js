function setup() {
    createCanvas(1200, 2000);
    background(0);
    noLoop();
}

const info = new Info();

function draw() {
    textSize(30);
    noStroke();

    // CONTENTS //////////////////////////////////////////////////////////
    // 1 - Character Codes: ASCII and Unicode
    // 2 - Creating Strings
    //     2.1 - Creating Strings From Scratch
    //     2.2 - Conversion From Other Types
    //     2.3 - From Other Strings
    //           2.3.1 - Copy
    //           2.3.2 - Modify Case
    //           2.3.3 - Copy Part
    //           2.3.4 - Add Characters
    // 3 - Altering a String
    // 4 - Getting Information About a String
    //     4.1 Length
    //     4.2 By Position
    //     4.3 Specific Values
    // 5 - Iteration
    // 6 - Comparing Strings
    //////////////////////////////////////////////////////////////////////

    // 1 - Character Codes: ASCII and Unicode ///////////////////////////
    // fromCharCode and fromCodePoint

    // for (let i = 0 ; i < 14 ; i++) {
    //     const charCode = i + 17000;
    //     info.display(
    //         `ASCII Code ${charCode}:`,
    //         String.fromCodePoint(charCode)
    //     )
    // }


    // 2 - Creating Strings ///////////////////////////////////////////
    // 2.1 - Creating Strings from Scratch
    // String Literals
    // String Objects
    // From Character Codes

    // String Literals
    // info.display(
    //     "Single Quotes:",
    //     'This is a string made from single quotes'
    // )

    // info.display(
    //     "Double Quotes:",
    //     "This is a string made from double quotes"
    // )

    // info.display(
    //     "Template Literal:",
    //     `The sum of 134 and 6434 is ${134 + 6434}`
    // )

    // // String Object
    // info.display(
    //     "String Object:",
    //     new String("Strings as data-structures with distinct methods")
    // )

    // // From Character Codes
    // info.display(
    //     "From Character Codes:",
    //     String.fromCodePoint(45, 56, 32, 78, 1005, 467, 2345, 10003, 32, 10057)
    // )

    // 2.2 - Conversion From Other Types
    // String Object
    // Template Literal
    // .toString Method
    // Number Methods
    // .join Method for Arrays
    // JSON.stringify

    // const sum = (a, b) => a + b;

    // // String Object
    // // Most versatile approach
    // // Can't do objects
    // info.display(
    //     "Convert by String Object:",
    //     // String(4356)
    //     // String(32 + 43)
    //     // String(true)
    //     // String([0, 2, 3, 5, 4])
    //     // String(sum)
    //     // String({name: "Driij"})
    //     // String(undefined)
    //     String(null)
    //     // String(Date())
    // )

    // // Template Literal
    // // Can't do objects, undefined, null
    // info.display(
    //     "Convert by Template Literal:",
    //     // `${54 + 756}`
    //     // `${3 < 4}`
    //     `${sum}`
    //     // `${Date()}`
    //     // `${[0, 1, 2, 3 ,4, 5]}`
    //     // `${{name: "Driij"}}`
    // )

    // // .toString Method
    // // optional radix parameter for number and bigInt types
    // // Can't do objects in a useful way, but can override this
    // // Can't do undefined or null
    // info.display(
    //     "Convert by the .toString Method:",
    //     // (54).toString()
    //     // 54..toString()
    //     // (354 + 22).toString()
    //     (54).toString(2)
    //     // (5 > 10).toString()
    //     // [0, 1, 2, 3, 4].toString()
    //     // {name: "Driij", skill: "code"}.toString()
    // )

    // // Number Methods
    // info.display(
    //     ".toExponential Method:",
    //     (11).toExponential(3)
    // )

    // info.display(
    //     ".toFixed Method:",
    //     (342.543623).toFixed(2)
    // )

    // info.display(
    //     ".toPrecision Method:",
    //     (3423.65734).toPrecision(6)
    // )

    // // .join Method for Arrays
    // info.display(
    //     "Convert Array by .join Method:",
    //     [0, 1, 2, 3, 4].join(",  ")
    // )

    // // JSON.stringify
    // // Can't do functions
    // // Can do objects!
    // info.display(
    //     "Convert by JSON.stringify:",
    //     // JSON.stringify(45)
    //     // JSON.stringify(46 + 32)
    //     // JSON.stringify(4 > 7)
    //     // JSON.stringify(sum)
    //     // JSON.stringify([0, 1, 2, 3 ,4, 5])
    //     JSON.stringify({name: "Katara", element: "water"})
    // )

    // 2.3 - From Other Strings
    // const original = "    This is the ORIGINAL string.    ";
    // info.display(
    //     "Original:",
    //     original
    // )

    // const anotherString = "+ another string."

    // // 2.3.1 - Copy
    // const copy = original;
    // info.display(
    //     "Copy! The following is a lie:",
    //     copy
    // )

    // // 2.3.2 - Modify Case
    // info.display(
    //     ".toUpperCase Method:",
    //     original.toUpperCase()
    // )

    // info.display(
    //     ".toLowerCase Method:",
    //     original.toLowerCase()
    // )

    // // 2.3.3 - Copy Part
    // info.display(
    //     ".trim Method:",
    //     original.trim()
    // )

    // info.display(
    //     ".trimStart Method:",
    //     original.trimStart()
    // )

    // info.display(
    //     ".trimEnd Method:",
    //     original.trimEnd()
    // )

    // info.display(
    //     ".substr(start, ~ length) Method:",
    //     original.substr(5, 10)
    // )

    // info.display(
    //     ".substring(indexStart, ~ indexEnd) Method:",
    //     original.substring(5, 10)
    // )

    // info.display(
    //     ".slice(indexStart, ~indexEnd) Method:",
    //     original.slice(-10, -5)
    // )

    // info.display(
    //     "Square Brackets [ ]:",
    //     original[13]
    // )

    // // 2.3.4 Add Characters

    // info.display(
    //     "Concatenate with '+':",
    //     original + anotherString
    // )

    // info.display(
    //     ".concat Method:",
    //     original.concat(anotherString)
    // )

    // info.display(
    //     ".padStart(length, string) Method:",
    //     original.padStart(40, "01234")
    // )

    // info.display(
    //     ".padEnd(length, string) Method:",
    //     original.padEnd(40, "01234")
    // )

    // info.display(
    //     ".repeat(count) Method:",
    //     anotherString.repeat(4)
    // )

    // 2.4 Altering a String
    // const original = "This is the original string.";
    // info.display(
    //     "Original string:",
    //     original
    // )

    // let altered = original;

    // info.display(
    //     "Using '+=' operator:",
    //     altered += " more characters!"
    // )

    // altered = original;

    // info.display(
    //     ".replace Method:",
    //     altered.replace("This", "Xenophanes")
    // )

    // altered = original;

    // info.display(
    //     ".replaceAll Method:",
    //     altered.replaceAll("i", "$")
    // )

    // 4 - Getting Information About a String
    // const original = "This is the original string."
    // info.display(
    //     "Original string:",
    //     original
    // )

    // // 4.1 Length
    // info.display(
    //     "Length of string:",
    //     original.length
    // )

    // // 4.2 By Position
    
    // info.display(
    //     "Using square bracket notation, index 15:",
    //     original[15]
    // )

    // info.display(
    //     ".charAt Method, index 10:",
    //     original.charAt(10)
    // )

    // info.display(
    //     ".charCodeAt Method, index 10:",
    //     original.charCodeAt(10)
    // )

    // info.display(
    //     ".codePointAt Method, index 15:",
    //     original.codePointAt(15)
    // )

    // // 4.3 Specific Values
    // info.display(
    //     ".includes Method, string includes 'the' ?",
    //     original.includes("the")
    // )

    // info.display(
    //     ".startsWith Method, string starts with 'This' ?",
    //     original.startsWith("This")
    // )

    // info.display(
    //     ".endsWith Method, string ends with '!' ?",
    //     original.endsWith("!")
    // )

    // info.display(
    //     ".indexOf Method, index of first 't' :",
    //     original.indexOf("t")
    // )

    // info.display(
    //     "lastIndexOf Method, index of last 't' :",
    //     original.lastIndexOf("t")
    // )

    // info.display(
    //     ".indexOf Method, index of first 'is' :",
    //     original.indexOf("is")
    // )

    // 5 Iteration
    // const string = "Let's iterate over this string!";

    // for (let i = string.length - 1 ; i >= 0 ; i--) {
    //     const char = string[i];
    //     info.display(
    //         `Index ${i}:`,
    //         " " + char + " "
    //     )
    // }

    // for (const char of string) {
    //     info.display(
    //         "",
    //         " " + char + " "
    //     )
    // }

    // 6 Comparing Strings
    const str1 = "Over here?";
    const str2 = "Over here?";
    const str3 = "OVER HERE!";
    const str4 = "a";
    const str5 = "b";
    const str6 = "B";

    info.display(
        "String 1:",
        str1
    )

    info.display(
        "String 2:",
        str2
    )

    info.display(
        "String 3:",
        str3
    )

    info.display(
        "String 1 equals String 2:",
        str1 === str2
    )

    info.display(
        "String 1 does not equal String 3:",
        str1 !== str3
    )

    info.display(
        "String 4:",
        str4
    )

    info.display(
        "String 4 Unicode Value",
        str4.codePointAt(0)
    )

    info.display(
        "String 5:",
        str5
    )

    info.display(
        "String 5 Unicode Value",
        str5.codePointAt(0)
    )

    info.display(
        "String 6:",
        str6
    )

    info.display(
        "String 6 Unicode Value",
        str6.codePointAt(0)
    )

    info.display(
        "String 4 is less than String 5:",
        str4 < str5
    )

    info.display(
        "String 4 is less than String 6:",
        str4 < str6
    )

    info.display(
        ".localeCompare Method, String 4 compared to String 6:",
        str4.localeCompare(str6, "en")
    )

    info.display(
        ".localeCompare Method, String 5 compared to String 6:",
        str5.localeCompare(str6, "en")
    )

    for (let i = 0 ; i < 8 ; i++) {
        const charCode = i + 97;
        info.display(
            `${String.fromCodePoint(charCode)}:`,
            charCode
        )
    }

    // Lifted from MDN!!!!!
    const name1 = '\u0041\u006d\u00e9\u006c\u0069\u0065';
    const name2 = '\u0041\u006d\u0065\u0301\u006c\u0069\u0065';

    info.display(
        "Name 1:",
        name1
    )

    info.display(
        "Name 2:",
        name2
    )

    info.display(
        "Name 1 equals Name 2:",
        name1 === name2
    )

    info.display(
        ".normalize Method: Name 1 equals Name 2:",
        name1.normalize() === name2.normalize()
    )



}
