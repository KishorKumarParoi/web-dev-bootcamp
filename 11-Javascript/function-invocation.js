// Javascript Function can be invoked without being called
// There are 4 ways to invoke a function in Javascript
// 1. Function Invocation
// 2. Method Invocation
// 3. Constructor Invocation
// 4. Indirect Invocation

// invoking a function as a function
function mul(a, b) {
    return a * b;
}

console.log(mul(1, 2));
// console.log(window.mul(10, 20));

function myFunc() {
    return this;
}

let x = myFunc();
console.log(x);

debugger;