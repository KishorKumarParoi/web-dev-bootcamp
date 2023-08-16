
function display(data) {
    console.log(data);
}

function sum(a, b, callback) {
    let sum = a + b;
    if (callback) callback(sum);
    return sum;
}

sum(5, 5, display);