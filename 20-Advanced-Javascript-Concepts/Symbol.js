const x = Symbol.for("hello");
const y = Symbol.for("hello");

console.log(x === y); // false
console.log(x);
console.log(y);

let arr = Symbol("Array for this Object");
arr = Symbol("Array of this Object");

const obj = {
  name: "Kishor",
  surName: "Paroi",
  age: 25,
  [arr]: [1, 2, 3, 4, 5],
  Nationality: "Indian",
  [x]: "world",
};

delete obj.age; // deleted age property
delete obj[Symbol("Array for this Object")]; // can't delete this property

for (let item in obj) {
  console.log(item);
}
console.log(obj);

const myArray = [1, 2, 3, 4, 5];
let includes = Symbol("My Own Array Includes Method");
Array.prototype[includes] = function () {
  console.log("This value exists in the array");
};

console.log(myArray);
console.log(myArray.includes(4));
console.log(myArray["includes"](3));
myArray[includes](2);

// Search Implementation

class Product {
  constructor(title) {
    this.title = title;
  }

  // implementing search
  [Symbol.search](string) {
    string.indexOf(this.title) >= 0
      ? console.log("Found " + this.title)
      : console.log("Not Found");
  }
}

let laptop = new Product("Laptop");
"HP Laptop".search(laptop);
let hello = new Product("Hello");
"Hello World".search(hello);
