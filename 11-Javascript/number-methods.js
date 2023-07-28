let x = 123.56;
console.log(typeof x);

let z = x.toString();
console.log(z);
console.log(typeof z);

console.log(x.toExponential(3));
console.log(x.toFixed(3));
console.log(x.toPrecision(4));
console.log(x.toLocaleString(5));
console.log(x.valueOf(4));

console.log(Number("  10 33 "));
Number("10  ");
Number(" 10  ");
Number("10.33");
Number("10,33");
Number("10 33");
Number("John");

console.log(new Date("2023-07-27"));
console.log(Date());

console.log(parseInt("blue 10.33 years"));
console.log(parseInt("10 33 years"));
console.log(parseInt("10 3 323"));
console.log(parseFloat("10.33 years 10"));