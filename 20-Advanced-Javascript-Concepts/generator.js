console.log("---------Generator-----------");
const obj = {
  value1: 10,
  value2: 20,
  value3: 30,
};

function* generator(obj) {
  let arr = Object.entries(obj);
  let length = arr.length;
  let index = 0;

  for (let item of arr) {
    yield item[1];
  }
  return "KKP";
}

let iterator = generator(obj);

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

for (let item of iterator) {
  console.log(item);
}

for (let item in obj) {
  console.log(item);
}
