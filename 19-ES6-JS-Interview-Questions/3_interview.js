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

debugger;
