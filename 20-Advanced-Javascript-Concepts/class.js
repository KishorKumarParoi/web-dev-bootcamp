class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.fullName = () => {
      return `${this.name}`;
    };
  }
  eat() {
    console.log(`${this.name} is eating`);
  }
  sleep() {
    console.log(`${this.name} is sleeping`);
  }
  play() {
    console.log(`${this.name} is playing`);
  }
}

Person.prototype.gender = "unknown";
Person.prototype.coding = (name) => {
  console.log(`${name} is coding`);
};

const Kishor = new Person("Kishor", 24);
const JoeRogan = new Person("Joe Rogan", 54);

console.log(Kishor.name);
JoeRogan.sleep();
console.log(Kishor.gender);
console.log(JoeRogan.fullName());
JoeRogan.coding("Joe Rogan");

debugger;
