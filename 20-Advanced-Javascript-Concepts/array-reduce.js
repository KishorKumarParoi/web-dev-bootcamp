const arr = [1, 2, 3, 4, 5, 6, 8, 100];
let initialValue = 0;

const res = arr.reduce((prevValue, currentValue, currentIndex, arr) => {
  return prevValue + currentValue;
}, initialValue);

console.log(res); // 129
