let obj = {
  name: "KKP",
  age: 30,
  city: "New York",
  test: function () {
    console.log("Hello World");
  },
  fullName: function () {
    return `${this.name} ${this.age}`;
  },
};

let keys = Object.keys(obj);
let value = Object.values(obj);
let entries = Object.entries(obj);

console.log(keys);
console.log(value);
console.log(entries);

let x = 10;
let y = 100;
let res = { x, y };
console.log(res);
console.log(typeof res);

res = x + y;
obj.x = x;
obj.y = y;
obj.res = res;

console.log(obj);

let myObj = {
  obj,
  x,
  y,
  res,
};

console.log(myObj);

debugger;
