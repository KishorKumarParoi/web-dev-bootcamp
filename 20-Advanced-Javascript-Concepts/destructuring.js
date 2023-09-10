// destructuring

const obj = {
  name: "Alice",
  age: 30,
  city: "New York",
  education: {
    degree: "Masters",
    school: "NYU",
  },
};

const { name: Name, age: Boyos } = obj;
console.log(Name);
console.log(Boyos);

const { city, ...rest } = obj;
console.log(city);
console.log(rest);

const {
  education: { degree: Certificate },
} = obj;
// console.log(degree);
console.log(Certificate);

const { residence: { district } = {} } = obj;
console.log(district);
