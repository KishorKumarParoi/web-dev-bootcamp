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
