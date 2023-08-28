// comma operator
// comma operator is used to evaluate each of its operands from left to right and returns the value of the last operand.

let a = 10;
a = (a, --a);
console.log(a);

let y = (100, 299);
console.log(y);

let arr = [
  [1, 2, 3, 4],
  [1, 2, 3],
  [1, 2],
  [1, 2],
];

for (let i = 0, j = 3; i < arr.length; i++, j--) {
  console.log(`arr[${i}][${j}] =  ${arr[i][j]}`);
}

debugger;
