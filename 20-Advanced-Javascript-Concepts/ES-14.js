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

// let SplicedArr = arr.toSpliced(2, 2, 100, 200); // es-14 feature
let SplicedArr = [...arr].splice(2, 2, 100, 200);
SplicedArr = arr.slice().splice(2, 2, 100, 200);
console.log(SplicedArr);
console.log(arr);

// replacing array element in immutable way

let newArr = arr.with(2, 100); // es-14 feature
newArr = [...arr].map((value, index) => {
  if (index === 2) {
    return 100;
  } else return value;
});

console.log(newArr);
