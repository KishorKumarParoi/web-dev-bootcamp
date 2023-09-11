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
