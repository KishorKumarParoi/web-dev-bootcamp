let text = `Hello World!`;
let firstName = "John";
let lastName = "Doe";
let kkp = `
Heellooo Jongoono
whatsss upp
ki khobor tomader
Mod Khaba Naki
`;
let Name = `Welcome ${firstName}, ${lastName}!`;

console.log(text);
console.log(kkp);
console.log(Name);

let price = 10;
let VAT = 0.25;

let total = `Total: ${(price * (1 + VAT)).toFixed(2)}`;
console.log(total);
console.log("🚀 ~ file: template-literals.js:21 ~ total:", total)

let header = "Templates Literals";
let tags = ["template literals", "javascript", "es6"];

let html = `<h2>${header}</h2><ul>`;

for (const x of tags) {
  html += `<li>${x}</li>`;
}

html += `</ul>`;
console.log("🚀 ~ file: template-literals.js:28 ~ html :", html )

// variable vitore dhukiye deyai interpolation
