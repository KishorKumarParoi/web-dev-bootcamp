let x = (0.2 * 10 + 0.1 * 10) / 10;
console.log(x);
x = 123e-5;
console.log("🚀 ~ file: number.js:4 ~ x:", x);

x = 10;
let y = 20;
let z = x + y;
console.log(z)

// Numeric Strings
x = 100;
y = 10;
z = x + y;
console.log(z);
console.log(x - y);
console.log(x / y);
console.log(x * y);
let val = x + y + " the value is " + x + y;
console.log(val);

let a = "apple";
let b = 100;
let c = a / b;
console.log( a / b);
console.log(isNaN(a / b + 10));
console.log(typeof NaN);

let infinity = Infinity;
console.log(infinity);

let myNumber = 32;
myNumber.toString(32);
console.log("🚀 ~ file: number.js:33 ~ myNumber:", myNumber)

myNumber.toString(16);
console.log("🚀 ~ file: number.js:33 ~ myNumber:", myNumber)

myNumber.toString(12);
console.log("🚀 ~ file: number.js:33 ~ myNumber:", myNumber)

myNumber.toString(10);
console.log("🚀 ~ file: number.js:43 ~ myNumber.toString(10):", myNumber.toString(10))
console.log("🚀 ~ file: number.js:33 ~ myNumber:", myNumber)

myNumber.toString(8);
console.log("🚀 ~ file: number.js:46 ~ myNumber.toString(8);:", myNumber.toString(8));
console.log("🚀 ~ file: number.js:33 ~ myNumber:", myNumber)

console.log(myNumber.toString(2));
console.log("🚀 ~ file: number.js:33 ~ myNumber:", myNumber)

let xx = 500;
let yy = new Number(500);
let zz = new Number(100);

console.log(xx == yy);
console.log(xx === yy);
console.log(yy === zz);