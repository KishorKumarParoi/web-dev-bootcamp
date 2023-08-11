// nested function

function add() {
    let count = 0;

    function plus() {
        count += 1;
    }

    plus();

    return count;
}

add();
add();
add();
// count = -5;

console.log(add());


debugger;