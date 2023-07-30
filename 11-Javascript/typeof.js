const type_of = `

In JavaScript there are 5 different data types that can contain values:

string
number
boolean
object
function
There are 6 types of objects:

Object
Date
Array
String
Number
Boolean
And 2 data types that cannot contain values:

null
undefined

typeof "John"                 // Returns "string"
typeof 3.14                   // Returns "number"
typeof NaN                    // Returns "number"
typeof false                  // Returns "boolean"
typeof [1,2,3,4]              // Returns "object"
typeof {name:'John', age:34}  // Returns "object"
typeof new Date()             // Returns "object"
typeof function () {}         // Returns "function"
typeof myCar                  // Returns "undefined" *
typeof null                   // Returns "object"

Please observe:

The data type of NaN is number
The data type of an array is object
The data type of a date is object
The data type of null is object
The data type of an undefined variable is undefined *
The data type of a variable that has not been assigned a value is also undefined *


`;

console.log(typeof typeof [1, 2, 3]);

// constructor
const constructorr =
    `
"John".constructor                // Returns function String()  {[native code]}
(3.14).constructor                // Returns function Number()  {[native code]}
false.constructor                 // Returns function Boolean() {[native code]}
[1,2,3,4].constructor             // Returns function Array()   {[native code]}
{name:'John',age:34}.constructor  // Returns function Object()  {[native code]}
new Date().constructor            // Returns function Date()    {[native code]}
function () {}.constructor        // Returns function Function(){[native code]} 

`;


isArray([1, 2, 3]);
function isArray(myArray) {
    console.log(myArray.constructor.toString().indexOf('Array') > -1 ? "Yes" : "No");
}

isArr([1, 2, 4]);
function isArr(myArray) {
    console.log(myArray.constructor === Array ? "true" : "false");
}

let person = { firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue" };
person = null;    // Now value is null, but type is still an object

let car = "";    // The value is "", the typeof is "string"
car = undefined;    // Value is undefined, type is undefined

typeof undefined           // undefined
typeof null                // object

null === undefined         // false
null == undefined          // true

const cars = ["Saab", "Volvo", "BMW"];

(cars instanceof Array);
(cars instanceof Object);
(cars instanceof String);
(cars instanceof Number);

const voidd = `The void operator evaluates an expression and returns undefined.This operator is often used to obtain the undefined primitive value, using "void(0)"(useful when evaluating an expression without using the return value).`;

console.log(void (0));
console.log(typeof (typeof ("hello World")));