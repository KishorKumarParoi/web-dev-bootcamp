function Person(name, age) {
  this.name = name;
  this.age = age;

  this.fullName = function () {
    console.log(this.name + " " + this.age);
    // return this.name + " " + this.age;
  };
}

const kishor = new Person("kishor", 25);
console.log(kishor.fullName); // kishor 25
console.log(kishor.age); // 25

debugger;
