const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const flatten = arr.flatMap((ele) => [[ele, ele * 5]]);
console.log(flatten);

const normal = flatten.flat(Infinity);
console.log(normal);

function flatt(arr) {
  return arr.reduce(
    (acc, val) =>
      Array.isArray(val) ? acc.concat(flatt(val)) : acc.concat(val),
    []
  );
}

const flat = flatt(flatten);
console.log(flat);

const arr3 = ["apple", "banana", "cherry"];
const obj = arr3.reduce((acc, curr) => {
  acc[curr] = curr.length;
  return acc;
}, {});
// Result: { apple: 5, banana: 6, cherry: 6 }
console.log(obj);

debugger;