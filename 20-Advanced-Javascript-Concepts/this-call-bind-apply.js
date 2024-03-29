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

function printName(...v1) {
  console.log(
    `${this.name} is ${this.age} years old and he is ${v1}, ${v2}, ${v3}`
  );
}

let v1 = "Handsome";
let v2 = "Dotbaba";
let v3 = "Khatash";

let Soumya = {
  name: "Soumya",
  age: 28,
};

let Mithun = {
  name: "Mithun",
  age: 30,
};

printName.call(Soumya, v1, v2, v3);
printName.apply(Mithun, [v1, v2, v3]);

let instance = printName.bind(Soumya, v1, v2, v3);
instance();

// new Binding

function Persona(name, age) {
  // let this = object.create(null);
  this.name = name;
  this.age = age;
  this.printName = function () {
    console.log(`${this.name} is ${this.age} years old`);
  };
  // return this;
}

const kkp = new Persona("KKP", 24);
console.log(kkp);
kkp.printName();

// window binding

let printNameFunction = function () {
  console.log(this);
  console.log(window === this);
  console.log(this.name);
};

let kishor = {
  name: "Kishor",
};
printNameFunction();

debugger;
