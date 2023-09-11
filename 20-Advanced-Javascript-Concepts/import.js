import external, { pi, e, phi } from "./export.js";
console.log(pi, e); // 3.14159
console.log(external); // 1.61803

// myFunc(external.name); // Hello World KKP
external.myFunc(external.name); // Hello World Kishor!
console.log(external.name); // Kishor

debugger;
