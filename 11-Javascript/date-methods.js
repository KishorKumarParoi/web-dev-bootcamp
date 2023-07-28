let d = new Date();
console.log(d);

console.log(Date.parse(d));

console.log(d.getDate());
console.log(d.getMinutes());
console.log(d.getFullYear());
console.log(d.getSeconds());
console.log(d.getMilliseconds());
console.log(d.getUTCDate());
console.log(Date.now(d));

console.log(d.getTimezoneOffset());

d.setDate(29);
console.log(d.toLocaleString());
d.setFullYear(2022, 2, 12);
console.log(d);
d.setDate(d.getDate() + 50);
console.log(d.toLocaleString());