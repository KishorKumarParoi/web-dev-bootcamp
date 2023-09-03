// converting multiple parameters to a single parameter

const { conforms } = require("lodash");

function multiply(a, b, c) {
  return a * b * c;
}

function curriedMultiply(a) {
  return function (b) {
    return function (c) {
      return a * b * c;
    };
  };
}

let step1 = curriedMultiply(10);
let step2 = step1(22);
let step3 = 6 * step2(30);

// console.log(multiply(10, 20, 30));
console.log(step3);
console.dir(step1);
console.dir(step2);
console.dir(step3);

function discount(price, discount) {
  return price - price * discount;
}

let discount1 = discount(600, 0.1); // imperative
let discount2 = discount(600, 0.2); // imperative
let discount3 = discount(600, 0.3); // imperative

// redundant means repetitive or unnecessary code
// currying is a way to remove redundant code

// declaritive and imperative programming
// declaritive is like sql
// imperative is like javascript

// currying is a way to make a function more declaritive
// declaritive is what only
// imperative is how and what combined

console.log(discount1);

// declaritive version of discount

function discountCurried(discount) {
  return function (price) {
    return price - price * discount;
  };
}

let tenPercentDiscount = discountCurried(0.1);
let product1 = tenPercentDiscount(600);
let product2 = tenPercentDiscount(1000);
console.log(product1);
console.log(product2);

let thirtyPercentDiscount = discountCurried(0.3);
let product3 = thirtyPercentDiscount(6000);
console.log(product3);

// curry converter

function curry(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return function (...args2) {
        return curried.apply(this, args2.concat(args));
      };
    }
  };
}

function sum(a, b, c) {
  return a + b + c;
}

console.log(sum.length);

let curriedSum = curry(sum);

console.log(curriedSum(1, 2, 3));
console.log(curriedSum(1)(2, 3));
console.log(curriedSum(1)(2)(3));
console.log(curriedSum(1, 2)(3));

debugger;
