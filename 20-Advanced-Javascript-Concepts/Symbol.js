const x = Symbol.for("hello");
const y = Symbol.for("hello");

console.log(x === y); // false
console.log(x);
console.log(y);

const arr = Symbol("Array for this Object");
const obj = {
  name: "Kishor",
  surName: "Paroi",
  age: 25,
  [arr]: [1, 2, 3, 4, 5],
  Nationality: "Indian",
  [x]: "world",
};

for (let item in obj) {
  console.log(item);
}
console.log(obj);

const myArray = [1, 2, 3, 4, 5];
let includes = Symbol("My Own Array Includes Method");
Array.prototype[includes] = function () {
  console.log("This value exists in the array");
};

console.log(myArray);
console.log(myArray.includes(4));
console.log(myArray["includes"](3));
myArray[includes](2);
