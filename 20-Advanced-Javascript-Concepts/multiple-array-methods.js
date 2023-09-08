const numbers = [1, 2, 3, 4, 5];
const result = numbers
  .filter((num) => num % 2 === 0)
  .map((num) => num * 2)
  .reduce((acc, num) => acc + num, 0);

console.log(result);
