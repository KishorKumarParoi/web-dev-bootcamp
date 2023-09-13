console.log("hello");

function* range(start, end, step) {
  let current = start;

  while (current <= end) {
    yield current;
    current += step;
  }
}

let iterator = [...range(1, 52, 3)];

for (let item of iterator) {
  console.log(item);
}

