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

debugger;
