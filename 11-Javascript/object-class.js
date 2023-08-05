// ? A JavaScript class is not an object.
// ? It is a template for JavaScript objects.

// ? function Person() is an object constructor function.

class Car {
    constructor(name, year, price) {
        this.name = name;
        this.year = year;
        this.price = price;
    }

    age() {
        return Math.abs(this.year - new Date().getFullYear());
    }

    set(price) {
        this.price = price;
    }
}

const myCar = new Car("Ford", 2014, 20000);
debugger;

myCar.set(50000);
debugger;

Object.defineProperty(myCar, "updatedPrice", {
    set: function (value) { this.price += value; }
});

myCar.updatedPrice = 10000;
console.log(myCar.price);
console.log(myCar);
console.log(`${myCar.name} is ${myCar.age()} years old`);
debugger;