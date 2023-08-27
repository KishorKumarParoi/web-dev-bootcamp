function Person(name, age) {
  this.name = name;
  this.age = age;
}

function Cricketer(name, age, type, country) {
  // making connection with Person
  Person.call(this);
  this.name = name;
  this.age = age;

  this.type = type;
  this.country = country;
}

Person.prototype.eat = function () {
  console.log(`${this.name} is eating`);
};

Object.prototype.kishor = () => {
  console.log("Kishor");
};

Cricketer.prototype = Object.create(Person.prototype);
Cricketer.prototype.constructor = Cricketer;

Cricketer.prototype = {
  play: function () {
    console.log(`${this.name} is playing`);
  },
};

const sakib = new Cricketer("Sakib", 34, "All Rounder", "Bangladesh");
console.log(sakib);
sakib.kishor();
sakib.play();

const tamim = new Person("Tamim", 32);
console.log(tamim);
tamim.kishor();
tamim.eat();

debugger;
