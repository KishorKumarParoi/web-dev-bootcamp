const person = {
    firstName: "John",
    lastName: "Doe",
    language: "en",
    age: function () {
        return 30;
    },
    get lang() {
        return this.language;
    },
    set lang(lang) {
        this.language = lang;
        // return this.language;
    }
};

console.log(person.language);
person.lang = "fr";
console.log(person.lang);
console.log(person.age());
// debugger;

Object.defineProperty(person, "fullName", {
    get: function () {
        return this.firstName + " " + this.lastName;
    }
});

console.log(person.fullName);   