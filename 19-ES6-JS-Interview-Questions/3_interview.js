const { doc } = require("prettier");

console.log(typeof ([] + []));
console.log(String([] + []));
console.log(typeof ({} + []));
console.log(String({} + []));
console.log(true / 5 + "5" * true);
console.log(true / 5 + "5");
console.log(true + "5");
console.log(true + 5 + "5");
console.log(true + 5 + "5" + true);
console.log(true / 5 + "5" * true - 5);

function myFunc(x) {
  //   return "Bangladesh";
  return x;
}

const str = myFunc`Hello + World`;
console.log(str);
// console.log(str.raw);
// console.log(str.arguments);

function customTag(strings, ...values) {
  console.log(strings); // Array of string literals
  console.log(values); // Array of substituted values
}

const text = "world";
const txt2 = "world2";
const txt3 = "world3";
const txt4 = "world4";

customTag`Hello ${text} ${txt2} ${txt3} ${txt4} !`;

// document.body.contentEditable = true;

function b() {
  console.log(`the length is ${this.length}`);
}

let a = {
  length: 10,
  method: function (a) {
    arguments[0](); // this is arguments
  },
};

a.method(b, 1, 100);

let aa = new String("constructor");
console.log(aa);
console.log(aa.constructor);
console.log(aa[aa][aa]);
console.log(aa[aa][aa][aa]);

console.log(typeof aa[aa](1120));
console.log(aa[aa][aa](1120));
console.log(typeof aa[aa][aa][aa](1120));

console.log((0.1 * 10 + 0.2 * 10) / 10);

debugger;
