// function test() { }
// console.log(test);

function Person(name, age) {
    let person = Object.create(Person.prototype);
    person.name = name;
    person.age = age;

    // person.eat = personMethods.eat;
    // person.sleep = personMethods.sleep;
    // person.play = personMethods.play;
    return person;
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

const Kishor = Person("Kishor", 25);
const Arnab = Person("Arnab", 27);

console.log(Kishor);
console.log(typeof Arnab.sleep());  // undefined
console.log(Arnab.sleep());   // undefined
Arnab.sleep();
Kishor.play();
console.log(Arnab);

debugger;