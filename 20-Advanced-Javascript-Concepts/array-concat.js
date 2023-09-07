const arr = [1, 2, 3, 4, 5, 6, 8, 100];
const arr2 = [3, 4, 5, 2];

const result = arr.concat(arr2);
console.log(result); // [1, 2, 3, 4, 5, 6, 8, 100, 3, 4, 5, 2]
console.log(arr2); // [3, 4, 5, 2]
console.log(arr); // [1, 2, 3, 4, 5, 6, 8, 100]
