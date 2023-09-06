function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) return fn(...args);
    else {
      return (...args2) => {
        return curried(...args, ...args2);
      };
    }
  };
}

function sum(a, b, c) {
  return a + b + c;
}

let getSum = curry(sum);
console.log(getSum(10, 20, 30));
console.log(getSum(10)(40, 30));
