const person = {
    // firstName: "Kishor",
    // LastName: "Paroi",
    fullName: function (city, country) {
        return this.firstName + " " + this.LastName + ", " + city + " " + country;
    }
}

const person2 = {
    firstName: "Kishor",
    LastName: "Paroi",
}

// console.log(person.fullName.call(person2, 'Rajshahi', 'Bangladesh'));

// call () method cann take arguments

console.log(person.fullName.call(person2, "Rajshahi", "Bangladesh"));