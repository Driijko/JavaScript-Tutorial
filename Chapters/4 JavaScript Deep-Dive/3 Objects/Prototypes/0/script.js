    // Prototypes and Inheritance ////////////////////////////////
    // Basic Concepts ////////////////////////

    // Re-writing moveDown and moveRight over and over,
    // despite EXACTLY THE SAME values.
    // const rec1 = {
    //     width: 4,
    //     height: 2,
    //     color: "red",
    //     posX: 2,
    //     posY: 6,
    //     moveDown() {
    //         this.posY += 1;
    //     },
    //     moveRight() {
    //         this.posX += 1;
    //     },
    // };

    // const rec2 = {
    //     width: 2,
    //     height: 9,
    //     color: "blue",
    //     posX: 4,
    //     posY: 7,
    //     moveDown() {
    //         this.posY += 1;
    //     },
    //     moveRight() {
    //         this.posX += 1;
    //     },
    // };

    // Get the same functionality but with a prototype and inheritance

    const rec = {
        moveDown() {
            this.posY += 1;
        },
        moveRight() {
            this.posX += 1;
        },
    }

    const rec1 = {
        width: 4,
        height: 2,
        color: "red",
        posX: 2,
        posY: 6,
    };

    Object.setPrototypeOf(rec1, rec);

    const rec2 = {
        width: 2,
        height: 9,
        color: "blue",
        posX: 4,
        posY: 7,
    };

    Object.setPrototypeOf(rec2, rec);

    // We don't see the inherited methods!
    // info.display(rec1);

    // But we can access them!
    rec1.moveDown();

    // info.display(rec1);

    // If a property or method is not found in an object, it's prototype is 
    // examined.
    // That way, certain parts of code only need to be written once,
    // and only stored in memory once.
    // That's why you only want to pass on properties or methods
    // that will be exactly the same for all inheriting objects
