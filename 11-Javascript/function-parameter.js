function myFunc(x, y = 10) {
    console.log(x + y);
}

myFunc(10);

function sumAll(...args) {
    let sum = 0;
    let length = arguments.length;
    for (let i = 0; i < length; i++) {
        sum += arguments[i];
    }
    return sum;
}


console.log(sumAll(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

debugger;