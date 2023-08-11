// nested function

function add() {
    let count = 0;

    return function plus() {
        count += 1;
        return count;
    }

    // plus();

    // return count;
}

add();
add();
add();
// count = -5;

console.log(add());


debugger;