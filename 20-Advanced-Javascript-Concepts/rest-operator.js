function sum(...nums) {
  // console.log(arguments);

  return nums.reduce((total, currVal) => {
    return total + currVal;
  }, 0);
}

console.log(sum(1, 2, 3, 4, 5));

debugger;
