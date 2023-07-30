console.log(typeof Number("3.14"));
console.log(typeof Number(Math.PI));
console.log(Number(" "));
console.log(Number(""));
console.log(Number("99 88"));
console.log(Number("John"));

const x = 123.555;
console.log(x.toExponential(2));
console.log(x.toExponential(4));
console.log(x.toExponential(10));
console.log(x.toPrecision(4));
console.log(parseInt(x));
console.log(parseFloat(x));

// unary operator
console.log(typeof +x);
const y = "123.555";
const xx = +y;
console.log(typeof y);
console.log(xx);
console.log(typeof xx);

let xy = +"5.55" + +"10.55";
console.log(xy);

// xy += "john";
xy = +"john";
console.log(xy);

// Converting Numbers to Strings
String(x)         // returns a string from a number variable x
String(123)       // returns a string from a number literal 123
String(100 + 23)  // returns a string from a number from an expression
x.toString();
(123).toString();
(100 + 23).toString();

let d = new Date();
d.getTime();
console.log(d);
console.log(Number(d.getHours()));
console.log(d.toLocaleString());

console.log(d.toString());
console.log(typeof d.toString());

false.toString()   // returns "false"
true.toString()    // returns "true"
console.log(Number("false"));
console.log(Number(false));

const xyx = "123";
const xxyx = parseInt(xyx);
console.log(xxyx);
console.log(typeof xxyx);
console.log(xyx);

let num = 123;
num += "";
console.log(num);
console.log(typeof num);