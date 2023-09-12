const x = Symbol.for("hello");
const y = Symbol.for("hello");

console.log(x === y); // false
console.log(x);
console.log(y);
