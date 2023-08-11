class Car {
    constructor(brand) {
        this.name = brand;
    }

    static show(x) {
        return `I have a ${x.name}`;
    }
}

const myCar = new Car('Tesla');
// console.log(myCar.show()); // raise error due to static
console.log(Car.show(myCar));
console.log(Car.show('Ford')); // returns undefined

debugger;