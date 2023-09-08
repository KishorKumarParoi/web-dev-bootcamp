const arr = [12, 3, 4, 5, 6, 7, 8, 9, 10];
let str = arr.join();
console.log(str);

str = arr.join(" ");
console.log(str);

let arr2 = arr.join("$");
console.log(arr2);
console.log(typeof arr2);

let convertArr2 = arr2.split("$");
console.log(convertArr2);

debugger;
