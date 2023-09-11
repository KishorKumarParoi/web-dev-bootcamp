let set = new Set();
set.add(5).add(9).add(59).add(9).add(100);
console.log(set);
console.log(set.has(9));
set.delete(set.has(100));
console.log(set.size);
set.delete(100);
console.log(set);

for (let item of set) {
  console.log(item);
}

let arr = [...set];
console.log(arr);

let newSet = new Set(arr.map((item) => item * 2));
console.log(newSet);

newSet.add({
  a: 1,
  b: 2,
});

newSet.add({
  a: 1,
  b: 2,
});

let obj = {
  name: " Kishor",
  age: 24,
};

newSet.add(obj);
newSet.add(obj);

console.log(newSet);

// Set Union, Intersection

let a = new Set([1, 2, 3, 4, 5]);
let b = new Set([4, 5, 6, 7, 8]);

// Union
let union = new Set([...a, ...b]);
console.log(union);

// Intersection
let Intersection = new Set([...a].filter((item) => (b.has(item) ? item : "")));
console.log(Intersection);

// difference
let difference = new Set([...a].filter((item) => !b.has(item)));
let difference2 = new Set([...b].filter((item) => !a.has(item)));
console.log(difference);
console.log(difference2);

// weakset
let weakset = new WeakSet();
weakset.add(obj);
weakset.add({
  a: 1,
  b: 2,
});
weakset.add(obj);
weakset.add({
  a: 1,
  b: 2,
});
console.log(weakset);

// weakset is not an iterable
// for (let item of weakset) {
//   console.log(item);
// }

// return undefined
// for (let item in weakset) {
//   console.log(item);
// }

// usage of weakSet
// 1. to store private data
// 2. to maintain a list of registered listeners

class Person {
  constructor(name) {
    this.name = name;
  }
  method() {
    console.log("Hello World! ");
    // console.log(`Hello ${this.name}`);ß
  }
}

let person = new Person("Kishor");
// person.method();
// console.log(person.name);

console.log(Person.prototype.method());

debugger;
