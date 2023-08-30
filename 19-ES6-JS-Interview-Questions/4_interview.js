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

debugger;
