// Reverse Array Immutable Way
const arr = [1, 2, 3, 4, 5];
// const reversedArr = arr.toReversed();  // es-14 feature
let reversedArr = [...arr].reverse();
reversedArr = arr.slice().reverse();

// using reduce
reversedArr = arr.reduce((prev, curr) => [curr, ...prev], []);

console.log(reversedArr);
console.log(arr);

// Splice Array in Immutable Way

let SplicedArr = arr.toSpliced(2, 2, 100, 200); // es-14 feature
console.log(SplicedArr);
console.log(arr);
