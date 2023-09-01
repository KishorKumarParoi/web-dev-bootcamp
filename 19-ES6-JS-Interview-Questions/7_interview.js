// fetch api
fetch("https://jsonplaceholder.typicode.com/todos/1").then((response) =>
  console.log(response.json())
);

// 3. What is the output?
const user = {
  name: "John",
  years: 30,
};
const { name: Name, years: age, isAdmin = false } = user;

console.log(user.name);
console.log(user.years);
console.log(Name);
console.log(age);

// 4. What is the output?
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
