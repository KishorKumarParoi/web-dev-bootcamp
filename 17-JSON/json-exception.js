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

debugger;
