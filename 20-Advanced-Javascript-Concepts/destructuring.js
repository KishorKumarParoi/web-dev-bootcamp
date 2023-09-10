// destructuring

const obj = {
  name: "Alice",
  age: 30,
  city: "New York",
};

const { name: Name, age: Boyos } = obj;
console.log(Name);
console.log(Boyos);

const { city, ...rest } = obj;
console.log(city);
console.log(rest);
