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