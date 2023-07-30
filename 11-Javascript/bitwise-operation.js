function dec2bin(dec) {
    return (dec >>> 0).toString(2);
}

function bin2dec(bin) {
    return parseInt(bin, 2).toString(10);
}

let x = 100;
let binX = x.toString(2);
console.log(binX);
console.log(typeof x.toString(2));

console.log(dec2bin(100));
console.log(bin2dec(1100100));

console.log(parseInt(binX, 2).toString(10));

console.log(parseInt(binX, 2).toString(16));