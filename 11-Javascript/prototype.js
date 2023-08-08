console.log("hello world");

function Person(name, age) {
    let person = {};
    person.name = name;
    person.age = age;

    person.eat = function () {
        console.log(`${person.name} is eating`);
    }
    person.sleep = function () {
        console.log(`${person.name} is sleeping`);
    }
    return person;
}

const Kishor = new Person("Kishor", 25);
const Arnab = new Person("Arnab", 27);

console.dir(Kishor);
console.log(Arnab);
debugger;