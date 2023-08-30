console.log("Bangladesh".__proto__.__proto__.__proto__); // null
console.log("Bangladesh".__proto__.__proto__); // Object
console.log("Bangladesh".__proto__); // String
let x = new String("Bangladesh");
console.dir(x);

// make a function that sorts its arguments without using loops

function sortArguments(...args) {
  //   for (let arg of args) {
  //     console.log(arg);
  //   }
  console.log(args);

  let arr = Array.from(args);
  let arr2 = [...args];
  console.log(arr.sort((a, b) => a - b));
  console.log(arr2);
}

sortArguments(5, 3, 7, 1); // [1, 3, 5, 7]

const myFunc = function () {
  //   arguments;
  console.log(arguments);
  console.log(arguments.length);
  console.log(arguments[0]);

  //   console.log([...arguments].sort((a, b) => a - b));
  //   return Array.prototype.slice.call(arguments).sort((a, b) => a - b);
  return Array.from(arguments).sort((a, b) => a - b);
};

console.log(myFunc(2, 1, 4, 5));

debugger;
