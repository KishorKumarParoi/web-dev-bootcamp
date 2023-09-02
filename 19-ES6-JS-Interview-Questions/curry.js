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
