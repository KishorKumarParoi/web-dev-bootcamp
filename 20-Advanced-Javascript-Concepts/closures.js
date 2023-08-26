var a = 100;
let c = 100;
let d = 120;

function outer() {
  let outerVar = "I'm from outer scope";
  var b = 200;

  function inner() {
    console.log(outerVar);
    return a + b;
  }

  return inner;
}

const closureFunction = outer();
closureFunction(); // Output: "I'm from outer scope"

console.dir(closureFunction);
// debugger;

function stopWatch() {
  let startTime = Date.now();
  return function getDelay() {
    console.log(Date.now() - startTime);
  };
}

let timer = stopWatch();
// for (let i = 0; i < 100000000; i++) {
//   let a = Math.random() * 10000000;
// }

timer(); // Output: Time elapsed: 1000ms
console.log(timer);

timer = null;
// timer();

for (let i = 0; i < 3; i++) {
  const myfunc = () => {
    console.log(i);
  };
  setTimeout(myfunc, 3000);
}

debugger;
