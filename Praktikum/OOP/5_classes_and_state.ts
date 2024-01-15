class TuneableCar {
    color: string;
    horsePower: number;
    private tunableParts: number;

    constructor(color: string, horsePower: number, tuneableParts: number) {
        this.color = color;
        this.horsePower = horsePower;
        this.tunableParts = tuneableParts;
    }

    isFast(): boolean {
        return this.horsePower > 400
    }

    tune(): void {
        if (this.tunableParts > 0) {
            this.horsePower += 20;
            console.log("increased horsepower!")
            this.tunableParts -= 1;
            console.log(this.tunableParts + " Part left to tune!")
        } else {
            console.log("cannot increase horsepower anymore, no tunable Parts left!")
        }
    }
}

const mcLarren = new TuneableCar('black', 340, 3);

if (mcLarren.isFast()) {
    console.log("Ready for a race!")
} else {
    console.log("Need to tune to be faster!")
}

mcLarren.tune();
mcLarren.tune();
mcLarren.tune();
mcLarren.tune();

if (!mcLarren.isFast()) {
    console.log("still not ready!")
}