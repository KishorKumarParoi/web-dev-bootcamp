const arr = [1, 2, 3, 4, 5, 6, 8, 100];
const arr2 = [3, 4, 5, 2];
const arr3 = [1, 23];
const arr4 = [20, 204];

const result = arr.concat(arr2, arr3, arr4);
console.log(result); // [1, 2, 3, 4, 5, 6, 8, 100, 3, 4, 5, 2]
console.log(arr2); // [3, 4, 5, 2]
console.log(arr); // [1, 2, 3, 4, 5, 6, 8, 100]
