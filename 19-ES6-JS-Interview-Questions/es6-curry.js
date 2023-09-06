function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) return fn.apply(this, args);
    else {
      return function (...args2) {
        return curried.apply(this, args.concat(args2));
      };
    }
  };
}

function sum(a, b, c) {
  return a + b + c;
}

let getSum = curry(sum);
console.log(getSum(10, 20, 30));
