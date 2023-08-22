// JSON stands for javascript object notation
// JSON is a lightweight data-interchange format
// JSON is language independent
// JSON is "self-describing" and easy to understand
// JSON is built on two structures:
// 1. A collection of name/value pairs. In various languages, this is realized as an object, record, struct, dictionary, hash table, keyed list, or associative array.
// 2. An ordered list of values. In most languages, this is realized as an array, vector, list, or sequence.

// JSON Syntax Rules
// JSON syntax is derived from JavaScript object notation syntax:
// Data is in name/value pairs
// Data is separated by commas
// Curly braces hold objects
// Square brackets hold arrays
// JSON Data - A Name and a Value
// JSON data is written as name/value pairs.
// A name/value pair consists of a field name (in double quotes), followed by a colon, followed by a value:
// "name":"John"
// JSON names require double quotes. JavaScript names don't.
// JSON Objects
// JSON objects are written inside curly braces.
// Just like in JavaScript, objects can contain multiple name/value pairs:
// {"name":"John", "age":30, "car":null}
// JSON Arrays
// JSON arrays are written inside square brackets.
// Just like in JavaScript, an array can contain objects:
// "employees":[
//     {"name":"John", "age":30, "car":null},
//     {"name":"John", "age":30, "car":null},
//     {"name":"John", "age":30, "car":null}
// ]
// JSON Uses JavaScript Syntax
// Because JSON syntax is derived from JavaScript object notation, very little extra software is needed to work with JSON within JavaScript.
// With JavaScript you can create an object and assign data to it, like this:
// var person = {name:"John", age:31, city:"New York"};
// You can access the object data in the same way you would access JavaScript variables:
// person.name;
// person.age;
// person.city;

const txt = '{"name":"John", "age":30, "city":"New York"}';
const obj = JSON.parse(txt);
console.log(obj.name);
console.log(obj.age);
console.log(obj);

const text = '["Ford", "BMW", "Audi", "Fiat"]';
const myArr = JSON.parse(text);
console.log(myArr[0]);

const Kishor = {
  name: "Kishor",
  age: 25,
  cars: ["Ford", "BMW", "Fiat"],
  text: txt,
};

const myJSON = JSON.stringify(Kishor);
console.log(myJSON);
console.log(typeof txt);
