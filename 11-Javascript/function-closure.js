// nested function with closure



const add = (
    function () {
        let count = 0;

        return function () {
            count += 1;
            console.log(count);
            return count;
        }
    }
)();


add();
// console.dir(add);
// console.dir(temporary)
add();
// console.dir(add);
add();
console.dir(add);
// console.log(add);

// count = -5;

// console.log(a);


debugger;