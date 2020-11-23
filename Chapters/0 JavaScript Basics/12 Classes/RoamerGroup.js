class RoamerGroup {
    constructor(canvasX, canvasY, numOfRoamers) {
        this.group = [];
        for (let i = 0 ; i < numOfRoamers ; i++) {
            this.group[i] = new Roamer(
                randRange(0, canvasX), 
                randRange(0, canvasY),
                randRange(20, 150)
            )
        }
    }

    display() {
        // console.log('Hi')
        for (let i = 0 ; i < this.group.length ; i++) {
            this.group[i].roam();
            this.group[i].display();
        }
    }
}