const person = {
    firstName: "Mary",
    lastName: "Jan",
    // fullName: function (id, age) {
    //     // console.log(id);
    //     // console.log(age);
    //     return this.firstName + " " + this.lastName + ", " + id + " " + age;
    // }
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}

const person1 = {
    firstName: "John",
    lastName: "Doe",
}

const person2 = {
    firstName: "Kishor",
    lastName: "Paroi",
}

const member = {
    firstName: "Hege",
    lastName: "Refsnes",
}

console.log(person.fullName.call(person1));
console.log(person.fullName.call(person1, 1703053, 24));
console.log(person.fullName.apply(person1, [1703053, 24]));
console.log(person.fullName());
console.log(person.fullName.apply(person2));
console.log(person.fullName.apply(person1));
console.log(Math.max.apply(null, [1, 2, 4]));
let fullName = person.fullName.bind(member);
console.log(fullName());