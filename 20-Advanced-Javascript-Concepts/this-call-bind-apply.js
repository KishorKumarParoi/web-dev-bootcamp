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
