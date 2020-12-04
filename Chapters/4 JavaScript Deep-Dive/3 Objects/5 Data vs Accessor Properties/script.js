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

    // Data Properties vs. Accessor Properties ////////////////

    // Computed Values /////////////////////////////////////
    let rec = {
        width: 2,
        height: 4,
        get size() {
            return this.width * this.height;
        },
    }

    info.tag("Rectangles size:", rec.size);

    // Restricting Values ////////////////////////////////
    rec = {
        width: 2,
        height: 4,
        posX: 0,
        posY: 0,
        get size() {
            return this.width * this.height;
        },
        set pos(array) {
            if (array[0] >= 0 && array[1] >= 0) {
                this.posX = array[0];
                this.posY = array[1];
            }
        },
        get pos() {
            return [this.posX, this.posY];
        },
    }

    rec.pos = [3, 4];
    info.tag("Rectangle position:", rec.pos);

    rec.pos = [-1, -2];

    info.tag("Rectangle position:", rec.pos);

    // Limits of Accessor Properties

    // We can still overwrite properties in ways that we are trying
    // to avoid. 
    rec.posX = -2;

    // 'get' can't have any parameters
    // 'set' can only have on parameter

    rec = {
        width: 2,
        height: 4,
        color: "red",
        posX: 0,
        posY: 0,
        get size() {
            return this.width * this.height;
        },
        setPos(x, y) {
            if (x >= 0 && y >= 0) {
                this.posX = x;
                this.posY = y;
            }
        },
        get pos() {
            return [this.posX, this.posY];
        },
    }

    rec.setPos(3, 4);
    rec.setPos(-1, -4);
    info.tag("Rectangle position:", rec.pos);

    // You can't have a data property with the same name as your accessor property

    // rec = {
    //     get width() {
    //         return this.width;
    //     },
    //     set width(width) {
    //         if (width >= 1) {
    //             this.width = width;
    //         }
    //     },
    // };

    // rec.width = 5;
    // info.tag("Rectangles width:", rec.width);

    // Protected Properties
    // Provides a convetion by which we circumvent the 
    // limitation on data vs. accessor property naming. 
    // The underscore is a convention, not a built-in feature
    // with unique functionality. We can technically overwrite
    // a protected property.

    rec = {
        _width: 1,
        get width() {
            return this._width;
        },
        set width(width) {
            if (width >= 1) {
                this._width = width;
            }
        },        
    }

    rec.width = 5;
    rec.width = 0;
    info.display(rec.width);
}