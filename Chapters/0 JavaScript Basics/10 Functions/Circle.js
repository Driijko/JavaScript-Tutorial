function Circle() {
    this.x = randRange(0, 1000);
    this.y = randRange(0, 1000);
    this.size = randRange(50, 200);
    this.strokeWeight = randRange(10, 20);
    this.strokeColor = randColor(0.5);
    this.fillColor = randColor(0.5);
}