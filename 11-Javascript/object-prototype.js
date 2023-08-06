// ? All JavaScript objects inherit properties and methods from a prototype.
// ? Date objects inherit from Date.prototype. Array objects inherit from Array.prototype.
// ? Person objects inherit from Person.prototype.
// ? The Object.prototype is on the top of the prototype inheritance chain.
// ? All JavaScript objects (Date, Array, RegExp, Function, ....) inherit from the Object.prototype.
// ? The JavaScript prototype property allows you to add new properties to object constructors:
// ? The JavaScript prototype property also allows you to add new methods to objects constructors:

function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
}
// Person.nationality = "English";
Person.prototype.nationality = "English";
Person.prototype.name = function () {
    return this.firstName + " " + this.lastName;
};

console.log(Person);

const Kishor = new Person("Kishor", "Paroi", 24, "black");
const Arnab = new Person("Arnab", "Baisnab", 24, "black");

console.log(Kishor);
console.log(Arnab);
console.log(Arnab.nationality);
console.log(Kishor.name());
debugger;
