class Info {

    constructor() {
        this.lineHeight = 50;
        this.linePos = this.lineHeight;
        this.leftMargin = 30;
    }

    type(data) {
        if (typeof(data) === "number") {
            return "Number";
        }
        else if (typeof(data) === "bigint") {
            return "BigInt";
        }
        else if (typeof(data) === "string") {
            return "String";
        }
        else if (typeof(data) === "symbol") {
            return "Symbol";
        }
        else if (typeof(data) === "boolean") {
            return "Boolean";
        }
        else if (data === null) {
            return "Null";
        }
        else if (data === undefined) {
            return "Undefined";
        }
        else if (typeof(data) === "function") {
            return "Function";
        }
        else if (data instanceof Array) {
            return "Array";
        }
        else if (data instanceof Map) {
            return "Map";
        }
        else if (data instanceof Set) {
            return "Set";
        }
        else if (typeof(data) === "object") {
            return "Object";
        }
    }

    fontSettings() {
        noStroke();
        textFont(fontRegular, 35);
    }

    lineAdjust(newLine) {
        if (newLine) {
            this.linePos += this.lineHeight;
        }
    }

    determineType(data) {
        if (typeof(data) === "number" || typeof(data) === "bigint") {
            return this.displayNumber;
        }
        else if (typeof(data) === "string") {
            return this.displayString;
        }
        else if (typeof(data) === "boolean") {
            return this.displayBoolean;
        }
        else if (data === undefined) {
            return this.displayUndefined;
        }
        else if (data === null) {
            return this.displayNull;
        }
        else if (typeof(data) === "function") {
            return this.displayFunction;
        }
        else if (data instanceof Array) {
            if (
                (data[0] instanceof Array) === false
                && typeof(data[0]) === "object"
            ) {
                return this.displayObjectArray;
            }
            return this.displayArray;
        }
        else if (data instanceof Object) {
            return this.displayObject;
        }
    }

    comment(str, hOffset=this.leftMargin, newLine=true) {

        this.fontSettings();
        fill("white");
        text(str, hOffset, this.linePos);

        this.lineAdjust(newLine);
    }

    display(data, hOffset=this.leftMargin, newLine=true) {
        this.fontSettings();

        if (data instanceof Map) {
            data = Object.fromEntries(data.entries());
        }
        else if (data instanceof Set) {
            data = Array.from(data);
        }

        if (
            (typeof(data) === "object" && (data instanceof Array) === false)
            || (data instanceof Array && typeof(data[0]) === "object" && (data[0] instanceof Array) === false) 
        ) {
            newLine = false;
        }

        this.displayMethod = this.determineType(data);

        const displayOffset = this.displayMethod(data, hOffset);

        // Create a new line?
        this.lineAdjust(newLine);

        return displayOffset;
    }

    tag(tag, data, hOffset=this.leftMargin) {
        this.fontSettings();

        if (
            data instanceof Array 
            && (data[0] instanceof Array) === false
            && typeof(data[0]) === "object"
        ) {
            this.displayObjectArray(data, hOffset, tag);
        }
        else if (typeof(data) === "object" && (data instanceof Array) === false) {
            this.displayObject(data, hOffset, tag);
        }
        else {
            this.comment(tag, hOffset, false);
            hOffset += textWidth(tag) + 20;
    
            this.display(data, hOffset);
        }
    }

    displayObjectArray(array, hOffset, tag=null) {
        this.linePos += 20;
        const startLinePos = this.linePos - 40;

        fill("lightGreen");
        noStroke();

        if (tag !== null) {
            text(tag, hOffset + 30, this.linePos);
            this.linePos += this.lineHeight;
        }

        array.forEach((obj, index) => {
            text(String(index), hOffset + 30, this.linePos + 10);
            this.display(obj, hOffset + 120)
        })

        stroke("green");
        strokeWeight(5);
        noFill();
        rect(
            hOffset, 
            startLinePos,
            width - hOffset, 
            this.linePos - startLinePos - 30
        );
    }

    displayNumber(num, hOffset) {
        fill("lightGreen");
        const numString = String(num);
        text(numString, hOffset, this.linePos);
        return textWidth(numString);
    }

    displayString(str, hOffset) {
        fill("gold");
        const stringString = '" ' + str + ' "';
        text(stringString, hOffset, this.linePos);
        return textWidth(stringString);
    }

    displayBoolean(bool, hOffset) {
        strokeWeight(3);
        stroke("blue");
        fill("lightBlue");
        const boolString = String(bool).toUpperCase();
        text(boolString, hOffset, this.linePos);
        return textWidth(boolString);
    }

    displayUndefined(data, hOffset) {
        strokeWeight(3);
        stroke("red");
        fill("orange");
        text("undefined", hOffset, this.linePos);
        return textWidth("undefined");
    }

    displayNull(data, hOffset) {
        strokeWeight(3);
        stroke("silver");
        fill("blue");
        text("null", hOffset, this.linePos);
        return textWidth("null");
    }

    displayFunction(func, hOffset) {
        this.linePos += 10;
        const startLinePos = this.linePos - 40;

        const functionString = String(func);

        fill("aqua");
        text(functionString, hOffset + 10, this.linePos);

        const lines = functionString.split(/\r\n|\r|\n/).length;
        this.linePos += (30 * lines) + 20;

        stroke("blue");
        strokeWeight(5);
        noFill();
        rect (
            hOffset,
            startLinePos,
            width - hOffset,
            this.linePos - startLinePos
        );
    }

    displayArray(array, hOffset) {

        // Left Square Bracket
        stroke("purple");
        strokeWeight(5);
        fill("magenta");
        textSize(40);
        text("[", hOffset, this.linePos);
        textSize(30);

        hOffset += 40;

        array.forEach((value, index) => {

            if (value instanceof Array) {
                hOffset = this.display(value, hOffset, false) + 5;
                if (index < array.length - 1) {
                    fill("grey");
                    noStroke();
                    text(",", hOffset + 10, this.linePos);
                    hOffset += 40;
                }
            }
            else {
                hOffset += this.display(value, hOffset, false) + 5;

                if (index < array.length - 1) {
                    fill("grey");
                    noStroke();
                    text(",", hOffset, this.linePos);
                    hOffset += 20;
                }
            }
        });

        hOffset += 20;
        // Right Square Bracket
        stroke("purple");
        strokeWeight(5);
        fill("magenta");
        textSize(40);
        text("]", hOffset, this.linePos);
        textSize(30);

        return hOffset;
    }

    displayObject(obj, hOffset, tag=null) {
        this.linePos += 30;
        const startLinePos = this.linePos - 40;
        const origHOffset = hOffset;
        hOffset += 20;

        if (tag !== null) {
            fill("red");
            strokeWeight(2);
            stroke("red");
            text(tag, hOffset, this.linePos);
            this.linePos += this.lineHeight;
            hOffset += 50;
        }

        const keys = Object.keys(obj);

        for (const key of keys) {
            this.tag(
                key + " :",
                obj[key],
                hOffset
            )
        } 

        stroke("red");
        noFill();
        strokeWeight(5);
        rect(
            origHOffset, 
            startLinePos,
            width - origHOffset, 
            this.linePos - startLinePos - 30
        );

        this.linePos += 20;
    }
}