console.log("hello world");

function Person(name, age) {
    let person = {};
    this.name = name;
    this.age = age;

    this.eat = function () {
        console.log(`${this.name} is eating`);
    }
    this.sleep = function () {
        console.log(`${this.name} is sleeping`);
    }
    // return person;
}

const Kishor = new Person("Kishor", 25);
const Arnab = new Person("Arnab", 27);

console.log(Kishor);
console.log(Arnab);
debugger;