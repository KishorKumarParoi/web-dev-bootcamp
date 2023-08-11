// nested function

function temporary() {
    let count = 0;

    return function () {
        count += 1;
        return count;
    }

    // plus();

    // return count;
}

const add = temporary();
add();
add();
add();
// count = -5;

// console.log(a);


debugger;