const fruits = [
  "apple",
  "banana",
  "orange",
  "apple",
  "banana",
  "kiwi",
  "mango",
  "kiwi",
];

const uniqueFruits = [...new Set(fruits)];
console.log(uniqueFruits); // ["apple", "banana", "orange", "kiwi", "mango"]

console.log(fruits);


debugger;
