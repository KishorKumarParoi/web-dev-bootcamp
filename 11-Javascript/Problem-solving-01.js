// print 10 to 60 randomly
console.log(Math.floor(Math.random() * (60 - 10 + 1)) + 10);

// Sort alphabetically 
const students = ["Kishor", "Pallabi", "Mondira", "Abul", "Shahin"];
console.log(students.sort());

// Sort according to roll number
const rollNumber = [101, 2, 40, 5, 20];
console.log(rollNumber.sort(function (a, b) {
    return (a - b);
}))


// Check Leap Year 
isLeapYear(2024);

function isLeapYear(Year) {
    if ((Year % 400) === 0 || ((Year % 4 === 0) && (Year % 100 !== 0))) {
        console.log(`${Year} is a Leap Year`);
    }
    else {
        console.log(`${Year} isn't a Leap Year`);
    }
}

// Count vowels of a sentence
const str = "I want to be a 500k Dollar Earning Software Engineer";

let strLower = str.toLowerCase();
console.log(strLower);

let count = 0;
for (let i = 0; i < strLower.length; ++i) {
    if (strLower[i] === 'a' || strLower[i] === 'e' || strLower[i] === 'i' || strLower[i] === 'o' || strLower[i] === 'u')
        count++;
    // console.log(strLower[i])
}

console.log(count);
// const words = Array.from(str);
// console.log(words);


// usage of FlatMap()
const arr1 = [1, 2, 1];
const result = arr1.flatMap((num) => (num === 2 ? [2, 2] : 1));
console.log(result);
// Expected output: Array [1, 2, 2, 1]


// filter out duplicate numbers from an array
const arr = [1, 2, 1, 3, 40, 40, 3, 2, 5, 5];
console.log(arr);

const duplicates = [];

arr.filter(function myFunction(value, index, array) {
    if (duplicates.includes(value) === false) {
        duplicates.push(value);
    }
});

const anotherWay = arr.filter(function myFunction(value, index, array) {
    if (arr.indexOf(value) !== index)
        return value;
})

console.log(anotherWay);

console.log(arr.sort(function (a, b) {
    return (a - b);
}));

console.log(duplicates);