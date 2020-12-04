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

    // Property Flags Part 2 //////////////////////////////

    const rec = {
        width: 5,
        height: 3,
        posX: 5,
        posY: 9,
        color: "blue",
    };

    // Accessor Properties
    // Can't use 'value' or 'writeable'

    Object.defineProperty(rec, "height", {
        get() {
            return this._height;
        },
        set(height) {
            if (Number.isInteger(height) && height >= 1) {
                this._height = height;
            }
        },
        enumerable: false,
        configurable: false,
    });

    rec.height = 56;
    info.display(rec.height);

    // Writing Multiple Property Descriptors

    Object.defineProperties(rec, {
        posX: {
            get() {
                return this._posX;
            },
            set(x) {
                if (Number.isInteger(x) && x >= 0) {
                    this._posX = x;
                }
            },
            configurable: false,
            enumerable: true,
        },
        posY: {
            get() {
                return this._posY;
            },
            set(y) {
                if (Number.isInteger(y) && y >= 0) {
                    this._posY = y;
                }
            },
            configurable: false,
            enumerable: true,
        },
        color: {
            value: "blue",
            writable: false,
            configurable: false,
            enumerable: true,
        }
    });

    // info.tag(
    //     "Property Descriptors for Rectangle Object:",
    //     Object.getOwnPropertyDescriptors(rec)
    // );

    // Showing the property descriptors exposes the protected property
    // '_height'. Let's set it as well.

    Object.defineProperty(rec, "_height", {
        value: 1,
        writable: true,
        enumerable: false,
        configurable: false,
    });
}