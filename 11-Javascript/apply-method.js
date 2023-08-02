const person = {
    fullName: function (id, age) {
        return this.firstName + " " + this.lastName + ", " + id + " " + age;
    }
}

const person1 = {
    firstName: "John",
    lastName: "Doe"
}

// console.log(person.fullName.apply(person1));
console.log(person.fullName.apply(person1, [1703053, 24]));
