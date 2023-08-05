// ? A primitive value is a value that has no properties or methods.
// ? A primitive data type is data that has a primitive value.
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50, eyeColor: "blue"
}

const x = person;
x.age = 10;        // This will change both x.age and person.age

console.log(person.age); // 10

let person2 = person;
person2.lastName = "Paroi";
console.log(person2); // 10
debugger;

const myObj = {
    name: "John",
    age: 30,
    cars: [
        { name: "Ford", models: ["Fiesta", "Focus", "Mustang"] },
        { name: "BMW", models: ["320", "X3", "X5"] },
        { name: "Fiat", models: ["500", "Panda"] }
    ]
}

console.log(myObj.cars[0].models[2]);
console.log(myObj)
debugger;