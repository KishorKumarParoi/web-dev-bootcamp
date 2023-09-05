// Currying is a technique of evaluating function with multiple arguments, into sequence of functions with single argument.

// import _ from "lodash";

function multiply(a) {
  return function (b) {
    return function (c) {
      return a * b * c;
    };
  };
}

let step1 = multiply(10);
let step2 = step1(20);
let step3 = step2(30);

console.dir(step1);
console.dir(step2);
console.log(step3);

// function curry(fn) {
//   return function curried(...args) {
//     if (args.length >= fn.length) {
//       return fn.apply(this, args);
//     } else {
//       return function (...args2) {
//         return curried.apply(this, args2.concat(args));
//       };
//     }
//   };
// }

// ES6 Syntax Curry Converter

function curry(fn) {
  return function curried(...args) {
    if (fn.length <= args.length) {
      return fn.apply(this, args);
    } else {
      return function (...args2) {
        return curried.apply(this, [...args, ...args2]);
      };
    }
  };
}

function sum(a, b, c, d, e, f) {
  return a + b + c + d + e + f;
}

let curryConverter = curry(sum);

console.dir(curryConverter(10, 20, 30));
console.dir(curryConverter(10)(20, 30));
console.dir(curryConverter(10)(20)(30));
// console.dir(curryConverter(10)(20)(30)(40)(50)(60));

function product(discount) {
  return function (price) {
    return price - price * discount;
  };
}

let twentyPercentDiscount = product(0.2);
let prod1 = twentyPercentDiscount(1000);
console.log(prod1);

debugger;
