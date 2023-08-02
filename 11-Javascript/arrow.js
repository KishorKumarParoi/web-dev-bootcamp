let hello = function () {
    return "Hello World!";
}
console.log(hello());

hello = () => "Hello KKP";
console.log(hello());

hello = (name) => "Hello " + name + "!";
console.log(hello("Kishor"));

hello = name => "Hello " + name + "!";
console.log(hello("Kumar"));

// ? with arrow functions there are no binding of this
// ? In regular functions the this keyword represented the object that called the function, 
// ? which could be the window, the document, a button or whatever.
// * With arrow functions this keyword always represents the object that 
// ! defined the arrow function.

// * With a regular function this represents the object that calls the function:
// * With an arrow function this represents the owner of the function:

let arr = [];
arr[40] = 'Kishor';
console.log(arr.length);
console.log(arr[20]);