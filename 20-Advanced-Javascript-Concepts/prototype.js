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

function Person(name, age) {
  const person = {};
  person.age = age;
  person.name = name;

  person.eat = function () {
    console.log("Person is eating");
  };

  person.sleep = function () {
    console.log("Person is sleeping");
  };
  return person;
}

const Kishor = Person("Kishor", 24);
const JoeRogan = Person("Joe Rogan", 54);

console.log(Kishor.name);
JoeRogan.sleep();
console.log(JoeRogan);

debugger;
