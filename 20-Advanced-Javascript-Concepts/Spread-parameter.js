const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const arr2 = [...arr, 10, 11, 12];

console.log(arr);
console.log(arr2);

console.log(arr.slice(1));
console.log(arr.splice(3, 2));
console.log(arr);

let filter = arr.filter((item) => item !== 3);
console.log(filter);
arr.splice(3, 0, 100);
console.log(arr);

debugger;
