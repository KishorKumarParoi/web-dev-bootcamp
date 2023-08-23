const text = '{"name":"John", "age":30, "city":"New York"}';
const obj = JSON.parse(text);
console.log(obj.name);

const text1 = '["Ford", "BMW", "Audi", "Fiat"]';
const myArr = JSON.parse(text1);
console.log(myArr[0]);

obj.date = new Date();
console.log(obj);

const parsed = JSON.stringify(obj);
console.log(parsed);

const newObj = JSON.parse(parsed);
console.log(newObj);
console.log(new Date(newObj.date));

let reviver = JSON.parse(parsed, (key, value) => {
  if (key === "birth") return new Date(value);
  return value;
});

console.log(reviver);
reviver.func = function () {
  console.log("Hello");
};

console.log(reviver);
reviver.func();

reviver.func = reviver.func.toString();
console.log(reviver);
const rev = JSON.stringify(reviver);
console.log(rev);

const txt =
  '{"name":"John", "age":"function () {return 30;}", "city":"New York"}';

console.log(txt);
console.log(typeof txt);
console.log(JSON.parse(txt));
obj.age = eval("(" + obj.age + ")");
console.log(obj.age);

debugger;
