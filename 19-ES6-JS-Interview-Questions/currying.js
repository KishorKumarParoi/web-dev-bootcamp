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

debugger;
