    // Things to Watch Out For //////////////////////////////////
    // Inherited properties should be constant (unvarying).
    // .setPrototypeOf is an expensive method! Only set prototype once,
    // ideally at creation.
    // Freeze an object = freeze it's prototype.
    // Encapsulation vs. Inheritance