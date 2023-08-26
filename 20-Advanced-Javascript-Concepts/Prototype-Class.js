function Person(name, age) {
  this.name = name;
  this.age = age;
  this.play = () => {
    console.log(`${this.name} is playing`);
  };
}

function Cricketer(name, type, country) {
  this.type = type;
  this.name = name;
  this.country = country;
  this.eat = () => {
    console.log(`${this.name} is eating`);
  };
}

Cricketer.prototype.name = (name) => {
  this.name = name;
};

const kkp = new Cricketer("Kishor", "All Rounder", "Bangladesh");
console.log(kkp);
kkp.eat("kishor");

const tamim = new Person("Tamim", 32);
console.log(tamim);
tamim.play();
