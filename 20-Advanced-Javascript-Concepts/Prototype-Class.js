function Person(name, age) {
  this.name = name;
  this.age = age;
}

function Cricketer(type, country) {
  this.type = type;
  this.country = country;
}

Person.prototype.eat = () => {
  console.log(`${this.name} is eating`);
};

Cricketer.prototype = {
  play: () => {
    console.log(`${this.name} is playing`);
  },
};

const sakib = new Cricketer("All Rounder", "Bangladesh");
console.log(sakib);

const tamim = new Person("Tamim", 32);
console.log(tamim);
debugger;
