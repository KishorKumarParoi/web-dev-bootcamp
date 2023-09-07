const arr = [1, 2, 3, 4, 5, 6, 8, 100];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

for (element of arr) {
  console.log(element);
}

for (index in arr) {
  console.log(arr[index]);
}

arr.forEach((element, index, arr) => {
  console.log(element);
});

let myObj = {
  name: "John",
  age: 30,
  city: "New York",
};

for (item in myObj) {
  console.log(item);
}

// for in for object
// for of for iterable objects
