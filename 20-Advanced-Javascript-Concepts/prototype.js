// javascript prototype
// - Prototype is a property of a function
// - Prototype is an object
// - Prototype is used to add methods and properties to an object, object constructor, instance

// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 30,
//   fullName: function () {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };

// const permanentMethods = {
//   eat() {
//     console.log("Person is eating");
//   },
//   sleep() {
//     console.log("Person is sleeping");
//   },
// };

function Person(name, age) {
  //   const person = Object.create(Person.prototype);   automatic
  this.age = age;
  this.name = name;
  //   person.eat = permanentMethods.eat;
  //   person.sleep = permanentMethods.sleep;
  //   return person;  automatic
}

Person.prototype = {
  eat() {
    console.log("Person is eating");
  },
  sleep() {
    console.log("Person is sleeping");
  },
};

Person.prototype.play = () => {
  console.log("Person is playing");
};

const Kishor = new Person("Kishor", 24);
const JoeRogan = new Person("Joe Rogan", 54);

console.log(Kishor.name);
JoeRogan.sleep();
Kishor.play();
console.log(JoeRogan);

const captain = {
  name: "Captain America",
  power: "Shield",
  getPower() {
    return this.power;
  },
};

const tonyStark = Object.create(captain);
// const tonyStark = new captain();
console.log(tonyStark.power);

debugger;
