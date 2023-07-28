// Math Object has no contructor
// Math object is static

const mathProperties =
    `
Math.E        // returns Euler's number
Math.PI       // returns PI
Math.SQRT2    // returns the square root of 2
Math.SQRT1_2  // returns the square root of 1/2
Math.LN2      // returns the natural logarithm of 2
Math.LN10     // returns the natural logarithm of 10
Math.LOG2E    // returns base 2 logarithm of E
Math.LOG10E   // returns base 10 logarithm of E

`;

console.log(mathProperties);
console.log(typeof mathProperties);

const number = -4.5552;
console.log(Math.ceil(number));
console.log(Math.floor(number));
console.log(Math.abs(number));
console.log(Math.trunc(number));
console.log(Math.round(number));

console.log(Math.floor(Math.random() * 11));

function random(min, max) {
    return (Math.floor(Math.random() * (max - min + 1)) + min);
}

console.log(random(30, 50));

console.log(Math.sin(30 * (Math.PI / 180)).toFixed(2));

console.log(new Date().getFullYear());
console.log(new Date().toUTCString());

console.log(Date.parse(new Date()));

console.log(Math.round(1.49992));
// Math.random