const person = {
    name: "John",
    age: 30,
    city: "New York"
};

const myArray = Object.values(person);
// document.getElementById("demo").innerHTML = myArray;
console.log(typeof myArray);
console.log(myArray);

let myString = JSON.stringify(person);
console.log(myString);
console.log(typeof myString);
console.log(myString.length);
console.log(myString[0]);
console.log(myString.match(/john/gi));
debugger;

person.date = new Date();
console.log(person);
console.log(person);
debugger;

person.age = function age() {
    return 30;
}

person.age = person.age.toString();

myString = JSON.stringify(person);
console.log(myString);
debugger;

const arr = [1, 2, 3, 4, 5];
arr.toString();

console.log(JSON.stringify(arr));   // [1,2,3,4,5]