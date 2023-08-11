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

// ? invoking a function as a constructor

function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullName = function (city, country) {
        let text = `${this.firstName} ${this.lastName} is from ${city}, ${country}`;
        // return this.firstName + ' ' + this.lastName;
        // return this;
        return text;
    }
}

const Kishor = new Person('Kishor', 'Naik');
console.log(Kishor);
console.log(Kishor.fullName('Dhaka', 'Bangladesh'));

// invoking a function indirectly using call() and apply() methods
// call() and apply() are used to invoke a function indirectly
// call() and apply() are methods of the Function.prototype object
// call() and apply() are used to set the this value explicitly
// call() and apply() are used to invoke a function with a different this value
// call() and apply() are used to invoke a function with a different context
// call() and apply() are used to invoke a function with a different receiver
// call() and apply() are used to invoke a function with a different scope
// call() and apply() are used to invoke a function with a different execution context
// call() and apply() are used to invoke a function with a different environment
// call() and apply() are used to invoke a function with a different this binding
// call() and apply() are used to invoke a function with a different this object
// call() and apply() are used to invoke a function with a different this argument

const obj = {
    firstName: 'John',
    lastName: 'Doe',
    fullName: function (city, country) {
        let text = `${this.firstName} ${this.lastName} is from ${city}, ${country}`;
        // return this.firstName + ' ' + this.lastName;
        return text;
    }
};

const person1 = {
    firstName: 'Kishor',
    lastName: 'Paroi'
}

const person2 = {
    firstName: 'Arnab',
    lastName: 'Naik'
}

let fullName = obj.fullName();
console.log(fullName);

console.log(obj.fullName.call(person1, 'Rajshahi', 'Bangladesh'));
console.log(obj.fullName.apply(person2, ['Rajshahi', 'Bangladesh']));


const Person2 = {
    firstName: 'John',
    lastName: 'Doe',
    fullName: function () {
        return this.firstName + ' ' + this.lastName;
    }
}

const member = {
    firstName: 'Pallabi',
    lastName: 'Paroi',
};

let memberfullName = Person2.fullName.bind(member);  // returns a function
console.log(memberfullName());

debugger;

