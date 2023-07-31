// Hoisting is JavaScript's default behavior of moving declarations to the top.

// In JavaScript, a variable can be declared after it has been used.

// In other words; a variable can be used before it has been declared.

// Variables defined with let and const are hoisted to the top of the block, but not initialized.
// Meaning: The block of code is aware of the variable, but it cannot be used until it has been declared.
// Using a let variable before it is declared will result in a ReferenceError.
// The variable is in a "temporal dead zone" from the start of the block until it is declared:

// JavaScript only hoists declarations, not initializations.

// var x = 5; // Initialize x
// // var y;
// // y = undefined;

// elem = document.getElementById("demo"); // Find an element
// elem.innerHTML = x + " " + y;           // Display x and y

// var y = 7; // Initialize y

console.log(str);
var str = "kishor";

z = 100;
console.log(z);
var z;

let a;
console.log(a);

let x;
console.log(x);
x = 100;

var lang = "en";
var Lang = "EN";
// var lang;
// lang = undefined;
// lang = "hi"; 

console.log(Boolean(!lang));

function myFunction() {
    if (lang) {  // acts differently for different values of lang
        var lang = "hi";
    }
    return lang;
}

console.log(myFunction());

