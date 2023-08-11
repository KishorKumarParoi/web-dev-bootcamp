let count = 0;

function add() {
    count++;
    return count;
}

add();
add();
add();
count = -5;

console.log(add());


debugger;