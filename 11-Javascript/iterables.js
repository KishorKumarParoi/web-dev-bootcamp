const letters = new Set(["a", "b", "c"]);

// List all Elements
let text = "";
for (const x of letters) {
    text += x + "<br>";
}
console.log(text);

// Create a Map
const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
]);

// List all entries
let textt = "";
for (const x of fruits) {
    textt += x + "<br>";
}

console.log(fruits);

// console.log(fruits.pop);
// console.log(fruits);

const cars = ['Fiat', 'Tesla', 'BMW'];
console.log(cars.pop('Tesla'));
console.log(cars);

var year = 2020;
if (year) {
    console.log(year);
    let year = 2029;
}
