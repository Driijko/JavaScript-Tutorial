class Roamer {
    constructor(x, y, size) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.strokeWeight = 10;
        this.strokeColor = "white";
        this.fillColor = "black";
    }

    display() {
        strokeWeight(this.strokeWeight);
        stroke(this.strokeColor);
        fill(this.fillColor);
        circle(this.x, this.y, this.size);
    }

    roam() {
        this.x += randRange(-10, 10);
        this.y += randRange(-10, 10);
    }
}