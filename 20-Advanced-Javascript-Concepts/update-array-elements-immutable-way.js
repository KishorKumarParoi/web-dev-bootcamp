const arr = [
  [1, 2],
  [3, 4],
];
const newArr = arr.map((subArr, i) =>
  i !== 0 ? subArr : subArr.map((num, j) => (j === 1 ? 5 : num))
);

console.log(newArr);




debugger;
