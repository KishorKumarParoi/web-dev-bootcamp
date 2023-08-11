const Person = {
    firstName: 'John',
    lastName: 'Doe',
    fullName: function () {
        let x = this.firstName + ' ' + this.lastName;
        console.log(x);
        // return this.firstName + ' ' + this.lastName;
    }
}

const member = {
    firstName: 'Pallabi',
    lastName: 'Paroi',
};

let memberfullName = Person.fullName.bind(member);  // returns a function
console.log(memberfullName());

// sometimes the bind() method has is used to prevent this from getting lost in setTimeout() and setInterval() methods

console.log(Person.fullName());  // this refers to the Person object
setTimeout(Person.fullName, 5000); // this is lost here


debugger;