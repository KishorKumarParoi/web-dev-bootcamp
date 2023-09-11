// console.log("Hello World Jonogon!");

// window.setTimeout(() => {
//   console.log("Hello World from Window!");
// }, 2000);

// globalThis.setTimeout(() => {
//   console.log("Hello World from Node Js!");
// }, 3000);

// globalThis.setTimeout(() => {
//   console.log("Hello World from Global This!");
// }, 4000);

// let largestNumber = Number.MAX_SAFE_INTEGER;
// console.log(largestNumber);
// ++largestNumber;
// console.log(largestNumber);
// largestNumber++;
// console.log(largestNumber); // doesn't work/increase as it is the largest number

// let biggestNumber = BigInt(Number.MAX_SAFE_INTEGER);
// console.log(biggestNumber);
// ++biggestNumber;
// console.log(biggestNumber);
// biggestNumber *= biggestNumber;
// console.log(biggestNumber);

// let num = 10n;
// num += 100n;
// console.log(num);

// let num1 = 10n;
// let num2 = 20n;

// console.log(num1 + num2);
// console.log(num1 - num2);
// console.log(num1 * num2);
// console.log(num1 / num2);
// console.log(num1 % num2);

// optimal Chaining
// let obj = {
//   a: 1,
//   b: 2,
//   c: {
//     d: {
//       e: {
//         f: "Kishor Kumar Paroi",
//       },
//     },
//     e: 4,
//   },
// };

// console.log(obj.c.d.e.f);
// console.log(obj.c?.d?.e?.f);
// let x = obj.c.f;
// console.log(x);
// console.log(obj.c?.f);

// let fruits = ["apple", "banana", "orange", "mango", "grapes"];
// fruits = null;
// console.log(fruits[0]); // throws error
// console.log(fruits?.[0]); // returns null
// console.log(fruits.length);

// nullish coalescing operator
// let language;
// language = "";

// nullish coalescing operator returns right part if first part is either null or undefined
// console.log(language ?? "Javascript");
// console.log(language || "Javascript");

// Promise.allSettled()

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 1");
  }, 1000);
});

const promise2 = new Promise((resolve, reject) => {
  //   resolve("Promise 2");
  reject(new Error("Error from Promise 2"));
});

const promise3 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Promise 3");
  }, 3000);
});

Promise.all([promise1, promise2, promise3])
  .then((result) => console.log(result))
  .catch((err) => console.log(err));

Promise.allSettled([promise1, promise2, promise3])
  .then((result) => console.log(result))
  .catch((err) => console.log(err));

// String MatchAll

let text = `My Favorite colors are #ff0000 #00ff00 #0000ff and #000000`;
let pattern =
  /#+(?<group1>[a-fA-F\d]{2})(?<group2>[a-fA-F\d]{2})(?<group3>[a-fA-F\d]{2})/gi;

// let result = text.match(pattern);
let result = text.matchAll(pattern);
for (let item of result) {
  console.log(item);
}
// console.log(result);
