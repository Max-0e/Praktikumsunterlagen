class Car {
    // properties are defined like types
    color: string;
    horsePower: number;
    kwPower: number;

    // the constructor defines how a class can be instanciated
    constructor(color: string, horsePower: number) {
        // the this keyword references the properties of our object that gets created and not the parameter/variables defined inside of the scope of the constructor
        this.color = color;
        this.horsePower = horsePower;
        // constructor parameter can also be used to make instance creation simpler so the user has to only provide the horsepower instead of hp and kw
        this.kwPower = horsePower / 1.341;
    }

    // :boolean defines the return type so we make shure that we define the right value
    isFast(): boolean {
        return this.horsePower > 400;
        // this would show an error since 'yes' is not type boolean
        // return 'yes';
    }
}

// classes can be used to create an object with the properties defined in the class.
// the 'new' keyword signals the creation followed by the class name and all constructor parameters, passed in like a function
const ferrari = new Car('red', 600);

if (ferrari.isFast()) {
    console.log("Ready for a race!")
} else {
    console.log("Need to tune to be faster!")
}