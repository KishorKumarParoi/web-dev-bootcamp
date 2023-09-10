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

const arr = [1, 2, 3, 100, 4, 5];
const [first, second, ...restArr] = arr;
console.log(first);
console.log(second);
console.log(restArr);

const [a, , , , d, e] = arr;
console.log(a);
console.log(d);
console.log(e);
