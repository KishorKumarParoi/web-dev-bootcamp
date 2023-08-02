const person = {
    firstName: 'John',
    lastName: 'Doe',
    id: 5566,

    main: function myFunction() {
        return this; // this denotes the person object
    },

    my: function () {
        return this;
    }
    ,
    fullName: function () {
        // return this.firstName + " " + this.lastName;
        return this.firstName + " " + this.lastName;   // this denotes person object
    }

};


console.log(person.main());
console.log(person.fullName());
console.log(person.id);

function myFunction() {
    return this; // this denotes the global object default
}

console.log(myFunction());

let x = this;
console.log(x);  // this denotes the window object, global object

"use strict";
let y = this;
console.log(y); // this also denotes the window object, global object

"use strict";
function myFunction2() {
    return this; // this denotes the undefined object
}

console.log(myFunction2());


{/* <button onclick="this.style.display='none'">Click to Remove Me!</button> */ }
// this refers to html element that received the event


// Object Method Binding 
console.log(person.my());  // implicit binding

// explicit binding
const person1 = {
    firstName: "John",
    lastName: "Doe",
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
};

const person2 = {
    firstName: "John",
    lastName: "Doe",
};

const member = {
    firstName: "Kishor",
    lastName: "Paroi",
}


// console.log(person1.fullName.call(person2));

// with bind method an object can borrow a method from another object
console.log(person1.fullName.bind(member));