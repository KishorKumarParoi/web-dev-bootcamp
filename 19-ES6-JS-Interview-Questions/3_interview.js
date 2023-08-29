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

const str = myFunc`Hello`;
console.log(str);

debugger;
