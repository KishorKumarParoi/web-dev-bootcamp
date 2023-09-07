const arr = [1, 2, 3, 4, 5, 6, 8, 100];
let res = arr.push(200, 300, 500, 69);
console.log(res);
console.log(arr.length);
console.log(arr);

arr.pop();
console.log(arr.length);
console.log(arr);

arr.unshift(1000, 2000, 3000);
console.log(arr.length);
console.log(arr);

arr.shift();
console.log(arr.length);
console.log(arr);
