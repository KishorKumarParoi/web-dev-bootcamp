const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arr2 = [...arr, 11, 12, 13, 14, 15];

const intersection = [];

arr.forEach((item) => {
  if (arr2.includes(item)) {
    intersection.push(item);
  }
});

console.log(intersection);
