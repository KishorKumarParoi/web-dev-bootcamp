var num1 = 10;
var k = 100;

var sum = function balance(intialBalance) {
    var num2 = 20;
    var balance = intialBalance;
    return function () {
        balance += num1 + num2 + k;
        return balance;
    };
}

var myFunc = sum(10000);
// console.log(sum());
console.dir(myFunc);



debugger;