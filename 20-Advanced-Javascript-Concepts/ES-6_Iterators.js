let arr = [1, 2, 3, 4, 5];
console.dir(arr);

let iterator = arr[Symbol.iterator]();
console.dir(iterator);

for (let item of arr) {
  console.log(item);
}

// iterator contains next method
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
