function Person(name, age) {
  this.name = name;
  this.age = age;

  this.fullName = this.name + " " + this.age;
  this.fullName = () => {
    return this.name + " " + this.age;
  };
}

const kishor = new Person("kishor", 25);
console.log(kishor.fullName); // kishor 25
console.log(kishor.age); // 25

debugger;
