// reverse Array Immutable Way
const arr = [1, 2, 3, 4, 5];
// const reversedArr = arr.toReversed();  // es-14 feature
let reversedArr = [...arr].reverse();
reversedArr = arr.slice().reverse();

// using reduce
reversedArr = arr.reduce((prev, curr) => [curr, ...prev], []);

console.log(reversedArr);
console.log(arr);
