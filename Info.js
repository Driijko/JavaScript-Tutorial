class Info {

    constructor() {
        this.lineHeight = 50;
        this.linePos = this.lineHeight;
        this.leftMargin = 30;
    }

    display(tag, input, hOffset=this.leftMargin) {

        textSize(30);
        noStroke();

        if (input instanceof Function) {
            this.linePos += 20;
            fill("cornflowerBlue");
            text(tag, hOffset, this.linePos);
            hOffset += textWidth(tag) + 50;
        }
        else if (
            input instanceof Array
            && (
                input[0] instanceof Object
                && (input[0] instanceof Array) === false
            )
        ) {
            this.linePos += 30;
            fill("lightGreen");
            text(tag, hOffset, this.linePos);
            hOffset -= 10;
        }
        else if (
            input instanceof Object
            && (input instanceof Array) === false
        ) {
            this.linePos += 20;
            fill("red");
            text(tag, hOffset, this.linePos);
            hOffset -= 10;
        }     
        else {
            fill("white");
            text(tag, hOffset, this.linePos);
            hOffset += textWidth(tag) + 20;
        }

        if (typeof(input) === "number" || typeof(input) === "bigint") {
            this.displayNumber(input, hOffset);
        }
        else if (typeof(input) === "string") {
            this.displayString(input, hOffset);
        }
        else if (typeof(input) === "boolean") {
            this.displayBoolean(input, hOffset);
        }
        else if (input === undefined) {
            this.displayUndefined(hOffset);
        }
        else if (input === null) {
            this.displayNull(hOffset);
        }
        else if (input instanceof Function) {
            this.displayFunction(input, hOffset, hOffset - textWidth(tag) - 60);
        }
        else if (input instanceof Array) {
            this.displayArray(input, hOffset);
        }
        else if (input instanceof Object) {
            this.displayObject(input, hOffset);
        }

        this.linePos += this.lineHeight;
        if (input instanceof Array) {
            this.linePos += 20;
        }
    }

    displayNumber(num, hOffset) {
        noStroke();
        fill("lightGreen");
        text(String(num), hOffset, this.linePos);
    }

    displayString(str, hOffset) {
        noStroke();
        fill("yellow");
        text(`" ${str} "`, hOffset, this.linePos);
    }

    displayBoolean(bool, hOffset) {
        strokeWeight(3);
        stroke("blue");
        fill("lightBlue");
        text(String(bool).toUpperCase(), hOffset, this.linePos)
    }

    displayUndefined(hOffset) {
        strokeWeight(3);
        stroke("red");
        fill("orange");
        text("undefined", hOffset, this.linePos);
    }

    displayNull(hOffset) {
        strokeWeight(3);
        stroke("silver");
        fill("blue");
        text("null", hOffset, this.linePos);
    }

    displayFunction(func, hOffset, rectOffset) {
        const startLinePos = this.linePos - 40;

        const functionString = String(func);

        // this.linePos += 60;
        fill("aqua");
        text(functionString, hOffset, this.linePos);

        const lines = functionString.split(/\r\n|\r|\n/).length;
        this.linePos += (30 * lines) + 20;

        stroke("blue");
        strokeWeight(5);
        noFill();
        rect (
            rectOffset,
            startLinePos,
            width - rectOffset - 20,
            this.linePos - startLinePos
        );
    }

    displayArray(array, hOffset) {

        if (
            array[0] instanceof Object
            && (array[0] instanceof Array) === false
        ) {
            this.displayObjectArray(array, hOffset);
        }
        else {
            stroke("purple");
            strokeWeight(5);
            fill("magenta");
            textSize(40);
            text("[", hOffset, this.linePos);
            textSize(30);
    
            hOffset += 40;
    
            if (typeof(array[0]) === "number") {
                hOffset += this.displayNumberArray(array, hOffset);
            }
            else if (typeof(array[0]) === "string") {
                hOffset += this.displayStringArray(array, hOffset);
            }
            else if (typeof(array[0]) === "boolean") {
                hOffset += this.displayBooleanArray(array, hOffset);
            }
            else if (array[0] instanceof Array) {
                
                for (const subArray of array) {
                    hOffset = this.displayArray(subArray, hOffset);
                    hOffset += 30;
                }
                hOffset -= 20;
            }
    
            hOffset += 30;
    
            stroke("purple");
            strokeWeight(5);
            fill("magenta");
            textSize(40);
            text("]", hOffset, this.linePos);
            textSize(30);
    
            return hOffset;
        }
    }

    displayNumberArray(array, hOffset) {
        noStroke();
        fill("lightGreen");
        const numbersString = array.join(" ,  ");
        text(numbersString, hOffset, this.linePos);
        return textWidth(numbersString);
    }

    displayStringArray(array, hOffset) {
        noStroke();
        fill("yellow");
        const stringsString = '" ' + array.join(' " ,  " ') + ' "';
        text(stringsString, hOffset, this.linePos);
        return textWidth(stringsString);
    }

    displayBooleanArray(array, hOffset) {
        stroke("blue");
        strokeWeight(4);
        fill("lightBlue");
        const booleansString = array.join(" ,  ").toUpperCase();
        text(booleansString, hOffset, this.linePos);
        return textWidth(booleansString);
    }

    displayObjectArray(array, hOffset) {
        const startLinePos = this.linePos - 40;
        this.linePos += 60;

        array.forEach((obj, index) => {
            this.display(String(index), obj, hOffset + 30)
        })

        stroke("green");
        strokeWeight(5);
        noFill();
        rect(
            hOffset, 
            startLinePos,
            width - hOffset - 20, 
            this.linePos - startLinePos
        );

    }

    displayObject(obj, hOffset) {

        const startLinePos = this.linePos - 40;

        const keys = Object.keys(obj);

        this.linePos += 40;

        for (const key of keys) {
            this.display(
                key + " :",
                obj[key],
                hOffset + 50
            )
        } 

        stroke("darkRed");
        noFill();
        strokeWeight(5);
        rect(
            hOffset, 
            startLinePos,
            width - hOffset - 20, 
            this.linePos - startLinePos
        );
    }
}