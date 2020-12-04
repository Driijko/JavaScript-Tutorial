    // We can create chains of prototypes.
    // If a property or method is not found in an object, it's prototype is
    // examined, and if not found there, the prototype of the prototype is
    // examined, and so on...
    const shape = {
        doubleSize() {
            this.width *= 2;
            this.height *= 2;
        },
    };

    Object.setPrototypeOf(rec, shape);

    rec1.doubleSize();

    // info.display(rec1);

    // An object can only have one prototype!