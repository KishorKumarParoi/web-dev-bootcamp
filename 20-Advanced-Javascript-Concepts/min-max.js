const arr = [7, 2, 5, 9, 1];
const min = arr.reduce((acc, curr) => Math.min(acc, curr), Infinity);
const max = arr.reduce((acc, curr) => Math.max(acc, curr), -Infinity);

console.log(min);
console.log(max);
