class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  test() {
    return "Hello World KKP !!!";
  }

  fullName = function () {
    return `${this.name} ${this.age}`;
  };

  exampleFunction = function () {
    let arr = [1, 2, 3, 4, 5];
    let val = arr.find(function (ele) {
      console.log(this);
      console.log(this.test());
      console.log(this.fullName());
      return ele > 4;
    }, this);
    return val;
  };
}

const kishor = new Person("kishor", 25);
let x = kishor.fullName();
console.log(x); // kishor 25
console.log(kishor.exampleFunction()); // 1 2 3 4 5
// kishor.exampleFunction();

debugger;
