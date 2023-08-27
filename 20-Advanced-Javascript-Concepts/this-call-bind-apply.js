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

let Person = function (name, age) {
  return {
    name: name,
    age: age,
    printName: function () {
      console.log(this.name);
    },
    father: {
      name: "Mr. X",
      age: 50,
      printName: function () {
        console.log(this.name);
      },
      grandfather: {
        name: "Mr. Y",
        age: 80,
        printName: function () {
          console.log(`${this.name} is ${this.age} years old`);
        },
      },
    },
  };
};

let Shanto = Person("Shanto", 24);
Shanto.printName();
console.log(Shanto.age);

Shanto.father.printName();
console.log(Shanto.father.age);

Shanto.father.grandfather.printName();
console.log(Shanto.father.grandfather.age);

// explicit binding

function printName() {
  console.log(`${this.name} is ${this.age} years old`);
}

let Soumya = {
  name: "Soumya",
  age: 28,
};

printName.call(Soumya);
