class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    eat() {
        console.log(`Person is eating`);
    }
    sleep() {
        console.log(`Person is sleeping`);
    }
    play() {
        console.log(`Person is playing`);
    }
}

const Kishor = new Person("Kishor", 25);
const Arnab = new Person("Arnab", 27);

Kishor.play();
console.log(Arnab);
console.log(Kishor);
debugger;