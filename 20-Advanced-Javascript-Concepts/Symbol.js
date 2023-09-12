const x = Symbol.for("hello");
const y = Symbol.for("hello");

console.log(x === y); // false
console.log(x);
console.log(y);

const obj = {
  name: "Kishor",
  surName: "Paroi",
  age: 25,
  Nationality: "Indian",
  [x]: "world",
};

for (item in obj) {
  console.log(item);
}

console.log(obj);
