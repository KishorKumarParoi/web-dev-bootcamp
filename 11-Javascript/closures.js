// (function () {
//     var num1 = 10;
//     var k = 100;
//     let num = 189;

//     var sum = function balance(intialBalance) {
//         var num2 = 20;
//         var balance = intialBalance;
//         return function () {
//             balance += num1 + num2 + k + num;
//             return balance;
//         };
//     }

//     var myFunc = sum(10000);
//     // console.log(sum());
//     console.dir(myFunc);
// })()

// var num1 = 10;
// var k = 100;
// let num = 189;

// var sum = function balance(intialBalance) {
//     var num2 = 20;
//     var balance = intialBalance;
//     return function () {
//         balance += num1 + num2 + k + num;
//         return balance;
//     };
// }

// var myFunc = sum(10000);
// console.log(sum());
// console.dir(myFunc);


let x = 10;
let jog = function () {
    let y = 20;
    return function () {
        return x + y;
    };
}

console.dir(jog());

debugger;