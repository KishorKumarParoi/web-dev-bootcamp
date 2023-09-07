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

const newArr = [...arr.slice(0, 3), 6969, 7878, [...arr2], ...arr.slice(3)];
console.log(newArr);

// mutable way of merging
newArr.push(...arr2);
console.log(newArr);

arr.concat(...newArr);
console.log(arr);
console.log(newArr);

debugger;
