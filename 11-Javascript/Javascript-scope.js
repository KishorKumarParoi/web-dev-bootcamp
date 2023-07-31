var x = 10;
function myfunction() {
    var x = 30;
    console.log(x);
}

let xx = 20;
console.log(xx);

function myFunction() {
    let xx = 50;
    console.log(xx);
}

myFunction();
myfunction();
console.log(x);

y = 100;
console.log(y);

let str = "hello";
if (0 < 5) {
    str = "kkp";
}

console.log(str);

var car = "Volvo";
console.log(car);
// console.log(window.car);

let test = 1;
test == 2;
console.log(test);

// range error

let num = 1;
try {
    num.toPrecision(500);   // A number cannot have 500 significant digits
}
catch (err) {
    document.getElementById("demo").innerHTML = err.name;
}


// reference error
let xyx = 5;
try {
    x = y + 1;   // y cannot be used (referenced)
}
catch (err) {
    document.getElementById("demo").innerHTML = err.name;
}

//eval error
try {
    eval("alert('Hello)");   // Missing ' will produce an error
}
catch (err) {
    document.getElementById("demo").innerHTML = err.name;
}

// type error
let nnum = 1;
try {
    nnum.toUpperCase();   // You cannot convert a number to upper case
}
catch (err) {
    document.getElementById("demo").innerHTML = err.name;
}

// uri error
try {
    decodeURI("%%%");   // You cannot URI decode percent signs
}
catch (err) {
    document.getElementById("demo").innerHTML = err.name;
}