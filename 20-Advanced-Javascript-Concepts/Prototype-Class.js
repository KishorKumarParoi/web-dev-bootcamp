function Person(name, age) {
  this.name = name;
  this.age = age;
}

function Cricketer(type, country) {
  this.type = type;
  this.country = country;
}

Person.prototype.eat = (name) => {
  console.log(`${this.name} is eating`);
};

Cricketer.prototype = {
  play: function (type) {
    console.log(`${this.type} is playing`);
  },
};

Object.prototype.kishor = () => {
  console.log("Kishor");
};

const sakib = new Cricketer("All Rounder", "Bangladesh");
console.log(sakib);
sakib.kishor();
sakib.play();

const tamim = new Person("Tamim", 32);
console.log(tamim);
tamim.kishor();
tamim.eat();

debugger;
