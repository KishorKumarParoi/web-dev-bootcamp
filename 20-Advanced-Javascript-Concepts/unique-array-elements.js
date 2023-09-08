const arr = [1, 2, 3, 4, 4, 6, 5, 6, 7, 8, 9];

// mutable way of removing duplicates

const newArr = [];
arr.forEach((item, index) => {
  if (!newArr.includes(item)) {
    newArr.push(item);
  }
});
console.log(newArr);
