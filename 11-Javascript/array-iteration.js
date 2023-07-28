const numbers = [45, 4, 9, 16, 25];
let txt = "";
numbers.forEach(myFunction);

function myFunction(value, index, array) {
    txt += value + "<br>";
    ++value;
    console.log(value);
}

console.log(txt);
console.log(numbers);

let mapp = numbers.map(myFunction);
 function myFunction(value, index, array) {
    return value * 2;
}
console.log(mapp);

function func(value, index, array) {
    return value * value;
}

let newMap = numbers.map(func);
console.log(newMap);

// const flatmapp = numbers.flatmap((x) => x * 10);
// console.log(flatmapp);

console.log(numbers);
console.log(Array.isArray(numbers));

const myArr = [1, 2, 3, 4, 5,6];
const newArr = myArr.flatMap((x) => x * 20);
console.log(newArr);

let over10 = numbers.filter(fun);
function fun(value, index, array) {
    return value > 10;
}

console.log(over10);

let sum = numbers.reduce(funny);
function funny(total, value, index, array) {
  return  total + (value + value);
}

console.log(sum);
console.log(numbers);

let reduceRight = numbers.reduceRight(fu);
function fu(total, value, index, array) {
    console.log(total, value);
    return total + value;
}
console.log(reduceRight);

const numberss = [45, 4, 9, 16, 25];
let allOver18 = numberss.every(myFunc);

function myFunc(value, index, array) {
  return value >= 4;
}

const numbersss = [45, 4, 9, 16, 25];
let allOver10 = numbersss.every(myFuncton);

function myFuncton(value) {
  return value > 10;
}

console.log(allOver18);
console.log(allOver10);
console.log(numbers);
console.log(numbers.indexOf(25));

let found = numberss.find(myF);
let foundIdx = numberss.findIndex(myF);
function myF(value, index, array) {
    return value > 9;
}
console.log(found);
console.log(foundIdx);

const fruits = ['apple', 'komla', 'lebu', 'kathal'];
console.log(fruits);
for (let i of fruits.keys()) {
  console.log(i);
}
for (let i of fruits.entries()) {
  console.log(i);
}

console.log(fruits.includes('kathal'));

const fruits1 = ["jam", "kola", "lichu"];
const fruits2 = ['apple', "bedana", 'peyara', 'jambura'];

console.log(...fruits1, ...fruits2);
console.log(...fruits,...fruits1,...fruits2);
console.log(fruits);