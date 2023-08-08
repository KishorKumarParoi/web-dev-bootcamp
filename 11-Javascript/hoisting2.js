// var a;
// a = undefined;
// console.log(a);
// a = 40;

// let x;
// console.log(x);
// x = undefined; x = 10; let x = 10;

var a;
console.log(a);
// console.dir(a);
a = 40;
console.log(a);

let x; // x = undefined
console.log(x);

// let language = "JavaScript";
// let LANGUAGE = "Python";

// function getLanguage() {
//     if (!language) {
//         let language = "Ruby";
// console.log(language);
//     }
//     return language;
// }

// console.log(getLanguage());

// let x; // x = undefined
// console.log(x);

// var language = "JavaScript";
// var LANGUAGE = "Python";

// function getLanguage() {
//     var language; //
//     language = undefined;//

//     if (!language) {
//         var language = "Ruby";
//         language = "Ruby";//
// console.log(language);
//     }
//     return language;
// }

// console.log(getLanguage());

// ? Function Hoisting
// function myFunc() {
//     console.log("Hello from myFunc");
// };

// myFunc();


// ! const hoisting

// const func
func();

const func = function () {  // func = undefined; func = function(){} const can't be reassigned
    console.log("Hello from myFunction of const variable hoisting");
};


debugger;



// * Hoisting means that the JavaScript interpreter will move all 
// * variable and function declarations to the top of the current scope.
// * var a; at the top of the scope.
// * a = undefined; like placeholder in html by javascript