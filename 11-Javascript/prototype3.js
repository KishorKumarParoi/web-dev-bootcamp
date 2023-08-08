function Person(name, age) {
    // let person = Object.create(Person.prototype); // automatically done by js
    this.name = name;
    this.age = age;
    this.country = "Bangladesh";
    // return person;  automatically done by js
}


// Permanent property

Person.prototype = {
    eat() {
        console.log(`Person is eating`);
    },
    sleep() {
        console.log(`Person is sleeping`);
    },
    play() {
        console.log(`Person is playing`);
    },
};

const Kishor = new Person("Kishor", 25);
const Arnab = new Person("Arnab", 27);

console.log(Kishor);
Kishor.play();
debugger;