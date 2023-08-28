// swap variables
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let temp = arr[3];
arr[3] = arr[5];
arr[5] = temp;

console.log(arr);

// swap variables using destructuring

[arr[2], arr[5]] = [arr[5], arr[2]];
console.log(arr);

let a = 10;
let b = 100;

[a, b] = [b, a];
console.log(a, b);

a = b + (b = a) - b;
console.log(a, b);

// Destructuring aliases

const obj = {
  name: "Kishor",
  age: 25,
  address: {
    city: "Dhaka",
    country: "Bangladesh",
  },
};

const { name: Name, age: Boyos } = obj;
console.log(Name, Boyos);
