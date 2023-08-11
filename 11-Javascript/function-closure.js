// nested function with closure

function temporary() {
    let count = 0;

    return function () {
        count += 1;
        console.log(count);
    }

    // plus();

    // return count;
}

const add = temporary();
add();
console.dir(add);
// console.dir(temporary)
add();
console.dir(add);
add();
console.dir(add);

// count = -5;

// console.log(a);


debugger;