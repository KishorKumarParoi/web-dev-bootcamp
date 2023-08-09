// function can be declared in 3 ways:
// 1. function declaration
// 2. function expression
// 3. arrow function

function func() {
    console.log('function declaration')
}

// ? After a function expression has been stored in a variable, the variable can be used as a function:

const x = function (a, b) { return a * b; };
console.log(x(5, 6));

const myFunc = new Function("a", "b", "return a * b");
console.log(myFunc(4, 3));


(function () {
    console.log("I Will become boss at Blockchain, Web3.0, AI, Modular Blockhchain and competitive programming");
})();

let xx = function myFunction(a, b) {
    return a * b;
}

// myFunction(4, 3) * 2;

console.log(xx(10, 20));
console.dir(xx);

function myFunction(a, b, c) {
    console.log(arguments.length);
    console.log(arguments[0]);
    // console.log(arguments);
    return a * b * c;
}

console.log(myFunction(4, 20, 100));
// console.log(myFunction(4, 20).toString());
let text = myFunction.toString();
console.log(text);

const arrow = (a, b) => {
    console.log('arrow function');
    return a * b;
};

console.log(arrow(11, 22));

const obj = {
    firstname: "Kishor",
    lastname: "Paroi",
    fullname: function () {
        return this.firstname + " " + this.lastname;
    },

    b: () => {
        // const text = this.firstname + " " + this.lastname;  arrow function doesn't have this keyword, it can't
        // be used in object methods
        // arrow function must be defined before it is used as it can't be hoisted
        console.log(text);
    }
}

obj.b();

debugger;