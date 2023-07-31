// A regular expression is a sequence of characters that forms a search pattern.

// The search pattern can be used for text search and text replace operations

// /pattern/modifiers;
let text = "Visit W3Schools w3schools w3Schools!";
let n = text.search(/w3Schools/ig);
console.log(n);

let rep = text.replace(/w3Schools/ig, "kishor");
text.replace(/w3Schools/ig, "kishor");
console.log(text);
console.log(rep);

text = "\nIs th\nis it?";
let result = text.match(/is/m);
console.log(text);
console.log(result);

console.log(/e/.test("The best things in life are free!"));
console.log(/e/.exec("The best things in life are free!"));

