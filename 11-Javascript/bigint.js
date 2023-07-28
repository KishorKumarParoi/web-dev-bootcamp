let x = 999999999999999999;
let y = 9999999999999999;

x = BigInt(x);
y = BigInt(y);
console.log(x);
console.log(typeof x);

console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y);

let z = 2324n;
let zz = 12;

let ans = Number(z) / zz;
console.log("🚀 ~ file: bigint.js:19 ~ ans :", ans.toFixed(2));

let hex = 0x20000000000003n;
let oct = 0o400000000000000003n
let bin = 0b100000000000000000000000000000000000000000000000000011n;

let notice =
    `
MAX_SAFE_INTEGER
MIN_SAFE_INTEGER

`;

let xx = Number.MAX_SAFE_INTEGER;
let xxx = Number.MIN_SAFE_INTEGER;

console.log(xx);
console.log(xxx);

console.log(Number.isSafeInteger(12345678901234567890));
console.log(Number.isInteger(123456789012323242424244424567890));
console.log(Number.isInteger(1290));
