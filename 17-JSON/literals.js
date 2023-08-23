const myJSON = '{"name":"John", "age":30, "car":null}';
const myObj = JSON.parse(myJSON);

let text = "";
for (const x in myObj) {
  text += x + ", ";
}

console.log(text);

// object literals and json are not the same
// object literals are not json
// json is not object literals
// json is a string
// json is a string that looks like an object literal but is not an object literal and is not an object and is not a function and is not a date

let arr = [1, 2, 3, 4, 5];
console.log(arr);
console.log(typeof arr);
const jsonArr = JSON.stringify(arr);
console.log(jsonArr);

debugger;
