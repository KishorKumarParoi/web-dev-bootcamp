const cars = ["Fiat", "BMW", "Volvo", "Tesla"];
let text = "<ul>";

for (let i = 0; i < cars.length; ++i){
    // console.log(i)
    text += "<li>" + cars[i] + "</li>";
    console.log(cars[i]);
}

text += "/ul";

cars[4] = "Tata";
console.log(text);

for (let i = 0; i < cars.length; ++i){
    // console.log(i)
    console.log(cars[i]);
}

let x = cars.toString();
console.log(x);

function myFunction(val) {
    console.log(val);
}
cars.forEach(myFunction);

cars.push("Volkswagan");
console.log("🚀 ~ file: array.js:30 ~ cars:", cars);

cars[cars.length] = "Toyota";
cars.shift();
console.log("🚀 ~ file: array.js:33 ~ cars:", cars)

cars.unshift("Nissan");
console.log("🚀 ~ file: array.js:34 ~ cars:", cars);

const obj = {
    "firstName": "Kishor",
    "surName": "Paroi",
    "Dream": "Becoming Millionar by 2024"
}

console.log(Array.isArray(cars));
console.log(Array.isArray(obj));

console.log(cars instanceof Object);
console.log(cars instanceof Array);
console.log(obj instanceof Array);
console.log(obj instanceof Object);
