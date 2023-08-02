const person = {
    firstName: "John",
    lastName: "Doe",
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}

const member = {
    firstName: "Hege",
    lastName: "Nilsen",
}

console.log(person.fullName.call(member));
console.log(person.fullName.apply(member));
console.log(person.fullName.bind(member));

// With the bind() method, an object can borrow a method from another object. 
// This example creates 2 objects(person and member).
// The member object borrows the fullName method from the person object

let fullName = person.fullName.bind(member);
console.log(fullName());