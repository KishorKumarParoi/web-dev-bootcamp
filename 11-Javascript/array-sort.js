const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
fruits.reverse();
console.log(fruits);

const numbers = [1, 2, 25, 100, 7, 60, 19];
// numbers.sort();
// numbers.sort(function (a, b) {
//     return (a - b);
// })

// descending sorting
numbers.sort(function (a, b) {
    return (b - a);
})
 
// sorting in random order 
numbers.sort(function (a, b) {
    return (0.5 - Math.random());
})
console.log(numbers);

//  FIsher Yates Method from Data Science
const points = [40, 100, 1, 5, 25, 10];

for (let i = points.length -1; i > 0; i--) {
  let j = Math.floor(Math.random() * (i+1));
  let k = points[i];
  points[i] = points[j];
  points[j] = k;
}
console.log(points);

function myArrayMax (points) {
    return Math.max.apply(null, points);
}
function myArrayMin (points) {
    return Math.min.apply(null, points);
}

console.log(myArrayMax(points));
console.log(myArrayMin(points));

const cars = [
  {type:"Volvo", year:2016},
  {type:"Saab", year:2001},
  {type:"BMW", year:2010}
];
cars.sort(function (a, b) {
    return (a.year - b.year);
})

console.log(cars);

let kkp = ['a', 'b', 'c'];
console.log(kkp);

let k = kkp.toString();
console.log(k);

let j = kkp.join();
console.log(j);

// kkp.replace("a", "abc");
kkp[0] = "abc";
console.log(kkp)