console.log("hello world");

const personMethods = {
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

function Person(name, age) {
    let person = Object.create(personMethods);
    person.name = name;
    person.age = age;

    // person.eat = personMethods.eat;
    // person.sleep = personMethods.sleep;
    // person.play = personMethods.play;
    return person;
}

const Kishor = Person("Kishor", 25);
const Arnab = Person("Arnab", 27);

console.log(Kishor);
console.log(Kishor.play());
console.log(Arnab);
debugger;