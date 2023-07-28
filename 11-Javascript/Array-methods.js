const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log("🚀 ~ file: Array-methods.js:2 ~ fruits:", fruits);

let size = fruits.length;
console.log("🚀 ~ file: Array-methods.js:3 ~ size:", size);

let str = fruits.toString();
console.log("🚀 ~ file: Array-methods.js:6 ~ str:", str);

let newS = fruits.join(" - ");
console.log("🚀 ~ file: Array-methods.js:11 ~ newS:", newS);

let x = Array.from(newS);
console.log("🚀 ~ file: Array-methods.js:11 ~ newS:", newS);
console.log(typeof x);
x.pop();
console.log(x);

console.log(fruits);
fruits.pop();
console.log(fruits);
delete fruits[1];
console.log(fruits);

const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];
const myChildren = arr1.concat(arr2, arr3, "Kishor");

console.log(myChildren);

const arr = [[1, 2], [3, 4], [5, [6, 7]]];
const newArr = arr.flat();
console.log(newArr);

console.log(typeof newArr);
console.log(Array.isArray(newArr));

let splicing = newArr.splice(2, 2, "Kishor", "Kumar");
console.log(splicing);
console.log(newArr);

let slicing = newArr.slice(2, 4);
console.log(slicing);
console.log(newArr);

//  Slice creates new array has two parameter and can't change main array
//  Splice creates new array has four parameter and can change main array