const arr = [1, 2, 3, 4, 4, 6, 5, 6, 7, 8, 9];

// mutable way of removing duplicates

const newArr = [];
arr.forEach((item, index) => {
  //   if (!newArr.includes(item)) {
  //     newArr.push(item);
  //   }

  if (newArr.indexOf(item) === -1) {
    newArr.push(item);
  }
});

console.log(newArr);

// immutable way of removing duplicates

const arr2 = arr.filter((item, index) => arr.indexOf(item) === index);
console.log(arr2);
