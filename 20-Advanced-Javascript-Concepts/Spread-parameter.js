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

let arr1 = [1, 2, 3];
let arr3 = [4.5, 100];
console.log(arr1.concat(arr3));
console.log(arr1);
console.log([...arr1, ...arr3]);
arr1.push(...arr3);
console.log(arr1);

// mutable way of flatting
const ar = [1, [2, 3], [4, [5]]];
const ar2 = [...ar];
const flatArr = ar2.flat(Infinity);
console.log(ar);
console.log(flatArr);

// immutable way of flatting
function flatten(arr) {
  // return arr.reduce((acc, item) => {
  //     if (Array.isArray(item)) {
  //     acc = acc.concat(flatten(item));
  //     } else {
  //     acc.push(item);
  //     }
  //     return acc;
  // }, []);

  return arr.reduce((prevValue, currValue) => {
    Array.isArray(currValue)
      ? prevValue.concat(flatten(currValue))
      : prevValue.push(currValue);
    return prevValue;
  }, []);
}
const arr12 = [1, [2, 3], [4, [5]]];
const newArr12 = flatten(arr);

const myObj = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];

// let newObj = myObj.map((obj) => {
//   obj.name = "Kishor";
// });

const Arr = myObj.map((obj) =>
  obj.id === 1 ? { ...obj, name: "Kishor" } : obj
);

console.log(myObj);
// console.log(newObj);
console.log(Arr);

debugger;
