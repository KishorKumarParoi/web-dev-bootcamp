// interview questions

// 1. What is the output?
const user = {
  name: "John",
  years: 30,
};

const { name: Name, years: age, isAdmin = false } = user;

console.log(Name); // John

console.log(age); // 30

console.log(isAdmin); // false

// 2. What is the output?

let salaries = {
    John: 100,
    Pete: 300,
    Mary: 250,
  },
  sum = 0;

for (let salary of Object.values(salaries)) {
  sum += salary;
}

console.log(sum);
