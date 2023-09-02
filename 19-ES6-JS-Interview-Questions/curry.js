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

console.log(multiply(10, 20, 30));
