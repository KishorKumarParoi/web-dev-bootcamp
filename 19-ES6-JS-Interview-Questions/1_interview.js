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


debugger;
