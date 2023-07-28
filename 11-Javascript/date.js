const d = new Date();
console.log(d);

const dd = new Date("October 13, 2014 11:13:00");
console.log(dd);

const de = new Date(2018, 12, 34, 10, 33, 30, 0);
console.log("🚀 ~ file: date.js:8 ~ e :", de);

const ed = new Date(2018,11,22);
console.log("🚀 ~ file: date.js:11 ~ ed:", ed);

const eed = new Date(9, 11, 24);
console.log("🚀 ~ file: date.js:14 ~ eed:", eed);

const ddd = new Date(-100000000000);
console.log("🚀 ~ file: date.js:17 ~ ddd:", ddd);

// let date = new Date().toDateString();
// let date = new Date().toString();
// let date = new Date().toUTCString();
// let date = new Date().toISOString();
// let date = new Date().toTimeString();
let date = new Date().toLocaleString();
console.log(date);