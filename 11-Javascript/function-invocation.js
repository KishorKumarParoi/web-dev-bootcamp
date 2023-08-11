// Javascript Function can be invoked without being called
// There are 4 ways to invoke a function in Javascript
// 1. Function Invocation
// 2. Method Invocation
// 3. Constructor Invocation
// 4. Indirect Invocation

// invoking a function as a function
function mul(a, b) {
    return a * b;
}

console.log(mul(1, 2));
// console.log(window.mul(10, 20));

function myFunc() {
    return this;
}

let x = myFunc();
console.log(x);

// invoking a function as a method
const myObj = {
    firstName: 'John',
    lastName: 'Doe',
    fullName: function () {
        // return this.firstName + ' ' + this.lastName;
        return this;
    },
    method: function () {
        return this;
    }
};

console.log(myObj.fullName());
console.log(myObj.method());

// invoking a function as a constructor

function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullName = function () {
        return this.firstName + ' ' + this.lastName;
        // return this;
    }
}

const Kishor = new Person('Kishor', 'Naik');
console.log(Kishor);
console.log(Kishor.fullName());

debugger;

