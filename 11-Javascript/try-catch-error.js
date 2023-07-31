// try {
//     addlert("Welcome guest!");
// }
// catch (err) {
//     throw new Error('custom error');
//     console.log(err.message);
//     console.log(err.name);
// }

// throws an error
// cusotm error


function myFunction(x) {
    console.log(x);
    try {
        // if (x.trim() == "") throw "empty string";
        // if (isNaN(x)) throw "not a number";
        if (x > 10) throw "too high";
        else {
            err = new Error("custom error");
            err.message = "less than 5";
            err.name = "custom error";
        }
    }
    catch (err) {
        console.log(err.name + ": " + err.message);
    }
    finally {
        console.log("finally");
    }
}

myFunction(2);

console.log(isNaN('s'));
console.log(Boolean({}));