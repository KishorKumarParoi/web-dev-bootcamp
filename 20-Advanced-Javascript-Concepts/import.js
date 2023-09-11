import external, { pi, e, name, myFunc } from "./export.js";
console.log(pi, e); // 3.14159
console.log(external); // 1.61803

myFunc(name); // Hello World KKP
console.log(name); // Kishor
