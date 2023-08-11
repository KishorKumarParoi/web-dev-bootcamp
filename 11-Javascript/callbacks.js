function sum(a, b, callback) {
    let result = a + b;
    callback(result);
    // return display(result);
}

function display(result) {
    console.log(result);
}

let x = sum(10, 200, display);
// display(x);

// ? A callback is a function passed as an argument to another function.
