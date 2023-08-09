function myFunc(x, y = 20) {
    console.log(arguments);
    console.log(x + y);
}

myFunc(10);

function sumAll(...args) {
    let sum = 0, max = -Infinity;
    let length = arguments.length;
    for (let i = 0; i < length; i++) {
        sum += arguments[i];
        if (arguments[i] > max) {
            max = arguments[i];
        }
    }
    return { sum, max };
}


console.log(sumAll(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

// ? Arguments are Passed by Value
// ? Changes to arguments are not visible(reflected) outside the function.
// ? Objects are Passed by Reference
// ? Changes to object properties are visible (reflected) outside the function.

debugger;