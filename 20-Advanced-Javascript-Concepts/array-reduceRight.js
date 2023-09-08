const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let initialVal = 0;

const val = arr.reduce((prevValue, currValue) => {
  return prevValue + currValue;
}, initialVal);

initialVal = 1;
const val2 = arr.reduceRight((prevValue, currValue) => {
  return prevValue * currValue;
}, initialVal);

console.log(val);
console.log(val2);
