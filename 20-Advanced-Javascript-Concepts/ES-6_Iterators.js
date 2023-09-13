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
console.log(iterator.next()); // returns object with value and done

let str = "Helo";
console.dir(str);
for (let char of str) {
  console.log(char);
}

console.dir(String);
console.dir(String.prototype[Symbol.iterator]());
let stringIterator = str[Symbol.iterator]();
console.dir(stringIterator.next());
console.dir(stringIterator.next());
console.dir(stringIterator.next());
console.dir(stringIterator.next());
console.dir(stringIterator.next());

console.log("-> Implementing custom iterator");

function customIterator(collection) {
  let i = 0;
  return {
    next() {
      return {
        value: collection[i++],
        done: collection.length < i,
      };
    },
  };
}

let customIteratorObj = customIterator([...arr]);
console.dir(customIteratorObj.next());
console.dir(customIteratorObj.next());
console.dir(customIteratorObj.next());
console.dir(customIteratorObj.next());
console.dir(customIteratorObj.next());
console.dir(customIteratorObj.next());


