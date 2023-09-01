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
