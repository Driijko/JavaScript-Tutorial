function setup() {
    createCanvas(1200, 2000);
    background(0);
    noLoop();
}

const info = new Info();

function draw() {
    textSize(30);
    noStroke();

    // CONTENTS ///////////////////////////////////////////////////
    // 1 - Creating Arrays
    //     1.1 - From Scratch
    //     1.2 - From Other Arrays
    //           1.2.1 - Copy Full
    //           1.2.2 - Copy Part
    //           1.2.3 - Combine
    //           1.2.4 - Flatten
    //           1.2.5 - Iteratively
    //     1.3 - From Other Data-Structures
    // 2 - Altering Arrays
    //     2.1 - Remove Values
    //     2.2 - Add Values
    //     2.3 - Overwrite Values
    //     2.4 - Re-order Values   
    // 3 - Getting Information About an Array  
    //     3.1 Length
    //     3.2 By Position
    //     3.3 Specific Values
    //     3.4 Tests
    // 4 - Iteration
    // 5 - Nested Arrays
    //////////////////////////////////////////////////////////////

    // 1 - Creating Arrays /////////////////////////////////////////
    // 1.1 - From Scratch

    // info.display(
    //     "Using array literal:",
    //     [23, 14, 65, 54, 23, 5, 23465]
    // )

    // const array = [];
    // array[0] = "Hello";
    // array[1] = "world";
    // array[2] = "!";

    // info.display(
    //     "Using assignment and square bracket notation:",
    //     array
    // )

    // info.display(
    //     "Array object:",
    //     new Array((5 < 10), (3 > 6))
    // )

    // // Unlike Array constructor, can build an array with a single integer
    // info.display(
    //     ".of Method:",
    //     Array.of(1)
    // )

    // info.display(
    //     ".fill Method:",
    //     Array(10).fill(0)
    // )

    // 1.2 - From Other Arrays

    // const original = [2, 53, 62, 33, 66, 712, 436, 11];
    // info.display(
    //     "Original Array:",
    //     original
    // )

    // 1.2.1 - Copy Full
    // const badCopy = original;
    // badCopy[0] = 34;

    // info.display(
    //     "Original altered!",
    //     original
    // )

    // let copy = Array.from(original);

    // info.display(
    //     ".from Method:",
    //     copy
    // )

    // copy = [...original];

    // info.display(
    //     "Spread Operator:",
    //     copy
    // )

    // copy[0] = 23432;

    // info.display(
    //     "Copy altered!",
    //     copy
    // )

    // info.display(
    //     "Original preserved:",
    //     original
    // )

    // copy = Array.from(original);

    // info.display(
    //     "Copy changed back to identical array",
    //     copy
    // )

    // info.display(
    //     "Original = Copy:",
    //     original === copy
    // )

    // info.display(
    //     "Original = Bad Copy:",
    //     original === badCopy
    // )

    // 1.2.2 Copy Part
    // info.display(
    //     ".slice Method:",
    //     original.slice(-4, -2)
    // )

    // info.display(
    //     ".splice Method:",
    //     original.splice(2, 5, 45, 23, 66)
    // )

    // info.display(
    //     "Original altered!",
    //     original
    // )

    // const filteredArray = original.filter((num, index, original) => {
    //     return (
    //         num % 2 === 0
    //         && index > 3
    //     )
    // })

    // info.display(
    //     ".filter Method",
    //     filteredArray
    // )

    // const [a, b, ...rest] = original;

    // info.display(
    //     "Variable a:",
    //     a
    // )

    // info.display(
    //     "Variable b:",
    //     b
    // )

    // info.display(
    //     "Using spread operator and destructuring:",
    //     rest
    // )

    // 1.2.3 Combine
    // const anotherArray = [32, 54, 75];

    // info.display(
    //     "Another array:",
    //     anotherArray
    // )

    // info.display(
    //     ".concat Method:",
    //     original.concat(anotherArray)
    // )

    // info.display(
    //     "Spread operator:",
    //     [...original, ...anotherArray]
    // )

    // // 1.2.4 Flatten
    // const twoDimensionalArray = [ [43, 23], [35, 26], [12, 54] ];

    // info.display(
    //     ".flat Method:",
    //     twoDimensionalArray.flat()
    // )

    // // 1.2.5 Iteration

    // info.display(
    //     ".map Method:",
    //     original.map(num => num * 2)
    // )

    // 1.3 - From Other Data-Structures
    // const str = "This is a string.";

    // info.display(
    //     "String:",
    //     str
    // )

    // const obj = {
    //     name: "Katara",
    //     element: "water"
    // }

    // const map = new Map();
    // map.set("name", "Mako");
    // map.set("element", "fire");

    // const set = new Set();
    // set.add(0);
    // set.add(1);

    // info.display(
    //     ".from Method",
    //     Array.from(str)
    // )

    // info.display(
    //     ".split Method:",
    //     str.split(" ")
    // )

    // info.display(
    //     ".keys Method:",
    //     Object.keys(obj)
    // )

    // info.display(
    //     ".values Method:",
    //     Object.values(obj)
    // )

    // const arrayFromObject = Object.entries(obj);

    // [
    //     ["name", "Katara"],
    //     ["element", "water"]
    // ]

    // info.display(
    //     ".entries Method:",
    //     arrayFromObject[0]
    // )

    // info.display(
    //     ".entries Method:",
    //     arrayFromObject[1]
    // )

    // info.display(
    //     "Array from Map:",
    //     [...map.keys(), ...map.values(), ...map.entries()]
    // )

    // info.display(
    //     "Array from Set:",
    //     [...set.keys()]
    // )

    // 2 - Altering Arrays /////////////////////////////////////////////
    // const original = [32, 54, 72, 744, 132, 75, 90, 234, 23, 634, 234, 663];
    // info.display(
    //     "Original:",
    //     original
    // )

    // let copy = [...original];

    // // 2.1 - Remove Values
    // info.display(
    //     ".pop Method:",
    //     copy.pop()
    // )

    // info.display(
    //     "Result:",
    //     copy
    // )

    // info.display(
    //     ".shift Method:",
    //     copy.shift()
    // )

    // info.display(
    //     "Result:",
    //     copy
    // )

    // copy.length = 7;

    // info.display(
    //     "Shortening length:",
    //     copy
    // )

    // info.display(
    //     ".splice Method:",
    //     copy.splice(2, 2)
    // )

    // info.display(
    //     "Result:",
    //     copy
    // )

    // // 2.2 Add Values
    // info.display(
    //     ".push Method, new length of array:",
    //     copy.push(62)
    // )

    // info.display(
    //     "Result:",
    //     copy
    // )

    // info.display(
    //     ".unshift Method, new length of array:",
    //     copy.unshift(33)
    // )

    // copy.splice(4, 0, 777, 234)

    // info.display(
    //     "Result from splice:",
    //     copy
    // )

    // // copy.length = 15;
    // // info.display(
    // //     "Result:",
    // //     copy
    // // )

    // // 2.3 - Over-write Values
    // copy[3] = 431;

    // info.display(
    //     "Result from square-bracket insert:",
    //     copy
    // )

    // info.display(
    //     ".copyWithin Method:",
    //     copy.copyWithin(0, 5, 7)
    // )

    // info.display(
    //     ".fill Method:",
    //     copy.fill(0)
    // )

    // copy = [23, 64, 456, 87, 235, 86, 24, 6123];

    // info.display(
    //     "Rebuild array from scratch:",
    //     copy
    // )

    // // 2.4 - Re-order Values
    // info.display(
    //     ".reverse Method:",
    //     copy.reverse()
    // )

    // info.display(
    //     ".sort Method:",
    //     copy.sort((a, b) => b - a)
    // )

    // const stringArray = ["a", "d", "g", "b", "e", "Z", "h"];

    // info.display(
    //     "String array:",
    //     stringArray
    // )

    // info.display(
    //     ".sort on string array:",
    //     stringArray.sort()
    // )

    // 3 - Getting Information About Arrays /////////////////////////////
    // const array = [34, 233, 65, 44, 3, 76, 12, 754, 23 , 44, 452];

    // info.display(
    //     "Array:",
    //     array
    // )

    // // 3.1 - Length

    // info.display(
    //     "Array length:",
    //     array.length
    // )

    // // 3.2 - Position

    // info.display(
    //     "Using square-brackets notation, value at index 5:",
    //     array[5]
    // )

    // // 3.3 - Specific Values

    // info.display(
    //     ".includes Method. Array includes the number 44?",
    //     array.includes(44)
    // )

    // info.display(
    //     ".indexOf Method. First index of number 44:",
    //     array.indexOf(44)
    // )

    // info.display(
    //     ".lastIndexOf Method. Last index of number 44:",
    //     array.lastIndexOf(44)
    // )

    // 3.4 - Test
    // info.display(
    //     ".find Method. First value that is less than 20:",
    //     array.find(num => num < 20)
    // )

    // info.display(
    //     ".findIndex Method. First index with value that is less than 20:",
    //     array.findIndex(num => num < 20)
    // )

    // info.display(
    //     ".some Method. Some value within the array is less than 20:",
    //     array.some(num => num < 20)
    // )

    // info.display(
    //     ".every Method. Every value within the array is less than 20:",
    //     array.every(num => num < 20)
    // )

    // 4 - Iteration /////////////////////////////////////////////////////

    // const array = [23, 64, 126, 873, 232, 765, 1, 6, 22, 731];

    // info.display(
    //     "Array:",
    //     array
    // )

    // for (let i = 0 ; i < array.length ; i++) {
    //     info.display(
    //         `Index ${i}:`,
    //         array[i]
    //     )
    // }

    // for (const num of array) {
    //     info.display(
    //         "",
    //         num
    //     )
    // }

    // array.forEach((num, index, array) => {
    //     info.display(
    //         `Index ${index}:`,
    //         num
    //     )
    // })

    // info.display(
    //     ".reduce Method. Average of sum of all numbers in array:",

    //     Math.floor( array.reduce((accumulator, num) => {

    //         info.display("sum:", accumulator + num)
    //         return accumulator + num;

    //     }, 0) / array.length )
    // )

    // let sum = 0;
    // for (let i = 0 ; i < array.length ; i++) {
    //     sum += array[i];
    // }
    // let average = sum / array.length;

    // reduce, filter, some, every, sort, map, 

    // 5 - Nested Arrays //////////////////////////////////////////////////////
    const twoDimensionalArray = [ [1, 3], [34, 72], [255, 234]];

    info.display(
        "2D Array:",
        twoDimensionalArray
    )

    info.display(
        "2D Array index [ 0 ]:",
        twoDimensionalArray[0]
    )

    info.display(
        "2D Array index [ 0 ][ 1 ]:",
        twoDimensionalArray[0][1]
    )

}
