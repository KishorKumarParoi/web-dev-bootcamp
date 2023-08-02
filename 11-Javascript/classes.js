class Car {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }

    age() {
        let date = new Date();
        return date.getFullYear() - this.year;
    }
}

let car1 = new Car('Toyota', 2020);
let car2 = new Car('Tesla', 2019);

console.log(car1.name);
console.log(car2.year);
console.log(`${car1.name} is ${car1.age()} years old`);
console.log(`${car2.name} is ${car2.age()} years old`);

class Player {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    play(val) {
        this.val = val;
    }

    injured(status) {
        if (Boolean(status) === true) {
            console.log(`${this.name} is injured`);
        }
        else {
            console.log(`${this.name} is not injured`);
        }
    }
}

let sakib = new Player('Sakib', 35);
let tamim = new Player('Tamim', 32);

sakib.play("good");
tamim.play("bad");

console.log(`${sakib.name} is playing ${sakib.val} `);
console.log(`${tamim.name} is playing ${tamim.val} `);
sakib.injured(true);

console.log(sakib);