// converting multiple parameters to a single parameter

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

debugger;
