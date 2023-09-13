console.log("Sum Generator");
function* sumGenerator() {
  let sum = 0;
  while (true) {
    sum += yield sum;
  }
}

let iterator = sumGenerator();
console.log(iterator.next());
console.log(iterator.next(100));
console.log(iterator.next(20));
console.log(iterator.next(50));

function* generator(a, b) {
  let k = yield a + b;
  let m = yield a + b + k;
  let n = yield a + b + k + m;
}

let gen = generator(10, 20);
console.log(gen.next());
console.log(gen.next(130));
console.log(gen.next(40));
