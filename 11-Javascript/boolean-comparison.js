const x = -0;
// const x = 0;
// const x = null;
// const x = "";
// const x = undefined;
// const x = NaN;
console.log(Boolean(x));

let Name = undefined;
let text = "missing";
// let result = Name ?? text;
let result = text ?? Name;
console.log(result);

const cars = {
    "type": "Fiat",
    "price": "10 lakh"
}

console.log(cars?.name);
console.log(cars.name);