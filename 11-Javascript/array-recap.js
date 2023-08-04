const fruits = ["Banana", "Orange", "Apple", "Mango"];
let str = fruits.toString();
console.log(str);

const myArr = [[1, 2], [3, 4], [5, 6]];
const newArr = myArr.flat();

console.log(newArr);

newArr.splice(2, 1, 40, 60);
console.log(newArr);

newArr.splice(2, 2);
console.log(newArr);

let sliceArr = newArr.slice(2, 4);
console.log(sliceArr);

newArr.forEach(function myFunc(value, index, array) {
    console.log(value, index);
});

let mapArr = newArr.map(function myfun(value, index, array) {
    return value * 2;
});

console.log(mapArr);

let ar = [1, [2, 2], [1, 2]];
let flatMap = ar.flatMap(function myfun(value, index, array) {
    return value * 2;
});

console.log(flatMap);

const arr1 = [1, 2, 3, 4];

arr1.map((x) => [x * 2]);
// [[2], [4], [6], [8]]

arr1.flatMap((x) => [x * 2]);
// [2, 4, 6, 8]

// only one level is flattened
arr1.flatMap((x) => [[x * 2]]);
// [[2], [4], [6], [8]]