function sum(...nums) {
  // console.log(arguments);

  return nums.reduce((total, currVal) => {
    return total + currVal;
  }, 0);
}

console.log(sum(1, 2, 3, 4, 5));

const [c, ...a] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(a);
console.log(c);

const { name, age, ...restInfo } = {
  name: "Alice",
  age: 30,
  city: "New York",
  country: "USA",
};
console.log(name); // 'Alice'
console.log(age); // 30
console.log(restInfo); // { city: 'New York', country: 'USA' }

debugger;
