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

console.log("converting whole code to class constructor");

class PersonNew {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  eat() {
    console.log(`${this.name} is eating`);
  }
}

class CricketerNew extends PersonNew {
  constructor(name, age, type, country) {
    super(name, age);
    this.age = age;
    this.name = name;
    this.type = type;
    this.country = country;
  }
  // getter is a tools which helps us to call like property

  get _getCountry() {
    return this.country;
  }

  set _getCountry(country) {
    this.country = country;
  }

  play() {
    console.log(`${this.name} is playing`);
  }

  playerCountry() {
    console.log(`${this.name} is from ${this.country}`);
  }
}

CricketerNew.prototype.sleep = function () {
  console.log(`${this.name} is sleeping`);
};

const Shanto = new CricketerNew("Shanto", 32, "Batsman", "Bangladesh");
console.log(Shanto);
Shanto.sleep();
console.log(Shanto._getCountry);
console.log((Shanto._getCountry = "India"));
console.log((Shanto._getCountry = "Uganda"));

Shanto.playerCountry();

const Soumya = new PersonNew("Soumya", 28);
console.log(Soumya);

debugger;
