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

debugger;
