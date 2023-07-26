let x = "kishki kishdsfd Kishor Kishor Kishor Dak Pari Kishor Moder Kar bari";
console.log(x.indexOf('Kishor', 30));
console.log(x.lastIndexOf('Kishor'));
console.log(x.lastIndexOf('Kishor', 20));
console.log(typeof x.lastIndexOf('Kishor', 20));
console.log(x.lastIndexOf('Kisr'));

console.log(x.search('Kishor'));
console.log(x.search(/Kishor/));
console.log(typeof x.search('Kishor'));
console.log(x.match("Kishor"));
console.log(x.match(/Kishor/));
console.log(x.match(/Kishor/g));
console.log(x.match(/Kishor/i));
console.log(x.match(/Kishor/gi));
// console.log(x.matchAll("Kishor"));
// console.log(x.matchAll(/Kishor/));
// console.log(x.matchAll(/Kishor/g));
// console.log(x.matchAll(/Kishor/i));
let text = "I love cats. Cats are very easy to love. Cats are very popular."
const iterator = text.matchAll(/Cats/g);

// document.getElementById("demo").innerHTML = Array.from(iterator);
console.log(iterator);

console.log(text.includes('cats'));
console.log(text.startsWith('Cats', 13));
console.log(text.endsWith('cats', 10));
// console.log(x.matchAll(/Kishor/gi));