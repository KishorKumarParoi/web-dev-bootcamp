const person = {
    // firstName: "Kishor",
    // LastName: "Paroi",
    fullname: function () {
        return this.firstName + " " + this.LastName;
    }
}

const person2 = {
    firstName: "Kishor",
    LastName: "Paroi",
}

console.log(person.fullname.call(person2));