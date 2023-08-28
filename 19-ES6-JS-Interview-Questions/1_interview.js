// Remove Falsy values from  array
// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, "", null, undefined, NaN, 0, false];
let newArr = arr.filter(Boolean);
console.log(newArr);

// convert any value to boolean
let x = "Kishor";
console.log(Boolean(x));
console.log(!!x);

// resizing an array
newArr.length = 5;
console.dir(newArr);

// flatten an array
let arr1 = [1, 2, 3, [4, [5, 6], [7, [8], 9]]];
console.log(arr1.flat(Infinity));

// shortform
// let Kishor = "Dreamer and Firm Believer";
let captain = "Mashrafi";

captain === "Mashrafi" && console.log("Captain is Mashrafi");
captain === "Mashrafi" || console.log("Captain is not Mashrafi");

// replace all occurances of a string
let str = "Kishor is a dreamer and Kishor is a firm believer";
console.log(str.replace(/kishor/gi, "KKP"));

const lang1 = "JavaScript";
const lang2 = "Python";

console.log({ lang1 });
console.log({ lang2 });

// timing of a function

let startTime = performance.now();

for (let i = 0; i < 100000000; i++) {
//   console.log(i);
}

let endTime = performance.now();

console.log(`Time Elapsed: ${(endTime - startTime) / 1000} seconds.`);

debugger;
