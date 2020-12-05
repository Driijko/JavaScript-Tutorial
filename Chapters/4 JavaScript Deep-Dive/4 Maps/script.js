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

    const map = new Map();

    // Different Syntax from Objects //////////////////////////////

    // Adding properties

    map.set("name", "Katara");
    map.set("element", "water");
    map.set("tribe", "Northern Water");

    // Getting properties

    // info.tag(
    //     "name property:", map.get("name")
    // );

    // Checking for properties

    // info.tag(
    //     "Does the map have an element property?", map.has("element")
    // );

    // Number of properties

    info.tag(
        "How many properties does the map have?", map.size
    )

    // Deleting properties

    // map.delete("name");
    // map.clear();

    // info.tag(
    //     "Map:",
    //     map
    // );

    // Don't do this:
    // map["hairColor"] = "brown";

    // You'll no longer be able to utilize the specific advantages of
    // maps with this property, and the methods specific to maps wont work.

    // Iteration ///////////////////////////////

    // for (const [key, value] of map) {
    //     info.comment(`The ${key} of ${map.get("name")} is ${value}`);
    // };

    // map.forEach((key, value) => {
    //     info.comment(`The ${key} of ${map.get("name")} is ${value}`);
    // });

    // Iterator Objects from Maps //////////////////////////////

    for (const key of map.keys()) {
        info.display(key);
    };

    for (const value of map.values()) {
        info.display(value);
    };


    for (const entry of map.entries()) {
        info.display(entry);
    };

    // Any type can be used for a key ////////////////////////////

    const num = 45;
    const str = "3452";
    const bool = true;
    const obj = {
        name: "Ringo",
        instrument: "drums",
    };
    const array = [2, 54, 12, 66];
    function sum(a, b) {
        return a + b;
    };

    const anyKey = new Map();
    anyKey.set(num, "Number Key!");
    anyKey.set(str, "String Key!");
    anyKey.set(bool, "Boolean Key!");
    anyKey.set(obj, "Object Key!!");
    anyKey.set(array, "Array Key!!");
    anyKey.set(map, "Map Key!!");
    anyKey.set(sum, "Function Key!!");

    // info.display(anyKey);

    // Maps, Arrays and Objects //////////////////////////////////////////
    // Maps are like the connecting point between objects and arrays

    // We can make a map from an entries-style array:
    const entriesStyleArray = [
        ["name", "Zuko"],
        ["element", "fire"],
        ["tribe", "Fire Nation"],
    ];

    let mapFromArray = new Map(entriesStyleArray);

    const avatar = {
        name: "Aang",
        element: "all",
        tribe: "Southern Air Temple",
    };

    info.comment("Entries style array from object:");
    info.display(Object.entries(avatar));

    mapFromArray = new Map(Object.entries(avatar));

    info.display(mapFromArray);

    // Easy to shallow clone, but doesn't deep clone!
    const cloneMap = new Map(map);
    cloneMap.set("name", "Saka");
    info.display(map.get("name"));

    // Maps Takeaways
    // Better for iteration than objects
    // Iterate in order of property insertion (objects should be considered un-ordered)
    // Access size easily
    // Any type of key
    // According to MDN: optimized for addition and removal

}