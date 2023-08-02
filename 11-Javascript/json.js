// json is lightweight data interchange format
// json is language independent
// json is "self-describing" and easy to understand
// json uses JavaScript syntax, but the json format is text only
// json is text, written with JavaScript object notation
// json is a format for storing and transporting data
// json is often used when data is sent from a server to a web page
// json stands for JavaScript Object Notation

let text = '{ "employees" : [' +
    '{ "firstName":"John" , "lastName":"Doe" },' +
    '{ "firstName":"Anna" , "lastName":"Smith" },' +
    '{ "firstName":"Peter" , "lastName":"Jones" } ]}';

let obj = JSON.parse(text);
console.log(text);
console.log(obj);
console.log(obj.employees[1].firstName);

const person = {
    firstName: "John",
    lastName: "Doe",
    Age: 30,
}

let myJSON = JSON.stringify(person);
console.log(person);
console.log(myJSON);