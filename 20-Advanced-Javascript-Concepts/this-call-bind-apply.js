// implicit binding
// explicit binding
// window binding
// new binding

// implicit binding

let printPlayerNameFunction = function (name) {
  console.log(name);
};

printPlayerNameFunction("Tamim");

let sakib = {
  name: "Sakib",
  age: 34,
  printPlayerNameFunction: function () {
    console.log(this.name);
  },
};

sakib.printPlayerNameFunction();

let printPlayerNameFunction2 = function (obj) {
  obj.printPlayerNameFunction = function () {
    console.log(`${this.name} is ${this.age} years old`);
  };
};

let sakib2 = {
    name: "Sakib",
    age: 34,
  },
  tamim2 = {
    name: "Tamim",
    age: 32,
  };

printPlayerNameFunction2(sakib2);
printPlayerNameFunction2(tamim2);

sakib2.printPlayerNameFunction();
tamim2.printPlayerNameFunction();
