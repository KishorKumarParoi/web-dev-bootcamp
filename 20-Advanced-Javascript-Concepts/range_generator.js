console.log("hello");

function* range(start, end, step) {
  let current = start;

  while (current <= end) {
    yield current;
    console.log("did you execute me?");
    current += step;
  }
}

let iterator = range(1, 2, 3);
console.log(iterator.next());
// console.log(iterator.next());

// for (let item of iterator) {
//   console.log(item);
// }
