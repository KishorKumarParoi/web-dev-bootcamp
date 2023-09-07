// splice modifies main array

const arr = [1, 2, 3, 4, 5, 6, 8, 100];
const newArr = arr.splice(2, 3, 100, 200, 300);
console.log(arr); // [1, 2, 100, 200, 300, 6, 8, 100]
console.log(newArr); // [3, 4, 5]

const arr2 = [1, 2, 3, 4, 5, 6, 8, 100];
const newArr2 = arr2.splice(-3, 2, 100, 200, 300);
console.log(arr2); // [1, 2, 3, 4, 5, 100, 200, 300, 8, 100]
console.log(newArr2); // [6, 8]
