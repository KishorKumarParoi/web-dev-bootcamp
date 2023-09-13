function* generator() {
  yield 1;
  yield 2;
  return "I am finished!";
  yield 3;
  yield 4;
}

let iterator = generator();
console.dir(iterator);
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

// Making a object iterable

const obj = {
  value1: 1,
  value2: 2,
  value3: 3,
};

console.log(Object.entries(obj));
obj[Symbol.iterator] = function () {};
