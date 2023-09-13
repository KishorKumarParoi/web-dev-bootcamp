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
  value1: 10,
  value2: 20,
  value3: 30,
};

// console.log(Object.entries(obj));

obj[Symbol.iterator] = function () {
  let index = 0;
  let arr = Object.entries(this);
  let length = arr.length;
  console.log(arr);

  return {
    next() {
      if (index < length) {
        let result = {
          key: arr[index][0],
          value: arr[index][1],
          done: false,
        };
        index++;
        return result;
      }
      return {
        done: true,
      };
    },
  };
};

let iterator2 = obj[Symbol.iterator]();
console.log(iterator2.next());
console.log(iterator2.next());
console.log(iterator2.next());
console.log(iterator2.next());

console.log([...obj]);
