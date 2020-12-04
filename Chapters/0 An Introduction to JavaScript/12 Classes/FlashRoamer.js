class FlashRoamer extends Roamer {
    constructor(x, y, size, pulse) {
        super(x, y, size);

        this.pulse = pulse;
    }

    pulsate() {
        if (frameCount % this.pulse === 0) {
            this.strokeWeight = 50;
        }
        else if (frameCount % this.pulse === 5) {
            this.strokeWeight = 10;
        }
    }
}