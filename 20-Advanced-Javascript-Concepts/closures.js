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
