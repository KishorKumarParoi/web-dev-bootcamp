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

function countMap(data) {
  let output = {};

  data.map((fruit) => {
    // output[fruit] = output[fruit] ? output[fruit] + 1 : 1;
    output[fruit] = (output[fruit] || 0) + 1;
    // if (output[fruit] !== undefined) {
    //   output[fruit]++;
    // } else {
    //   output[fruit] = 1;
    // }
  });

  output = {};
  //   console.log(output);

  data.forEach((ele) => (output[ele] = (output[ele] || 0) + 1));

  return output;
}

console.log(countMap(fruits));

// reverse a string words

let str = "I Love Bangladesh";

function reverseWords(str) {
  return str
    .split(" ")
    .map((word) => word.split("").reverse().join(""))
    .join(" ");
}

console.log(reverseWords(str));

// sorting words by length in a sentence by asc order

str = "Javascript is a Programming language";

function sortByAsc(str) {
  return str
    .split(" ")
    .sort((a, b) => a.length - b.length)
    .join(" ");
}

console.log(sortByAsc(str));

debugger;
