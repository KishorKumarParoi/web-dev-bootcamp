// Constructor function for Person objects
function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
    this.changeName = function (name) {
        this.lastName = name;
    }
}

// You can NOT add a new property to a constructor function
Person.nationality = "English";

// Create 2 Person objects
const myFather = new Person("John", "Doe", 50, "blue");
const myMother = new Person("Sally", "Rally", 48, "green");

console.log(myFather);
console.log(myMother);

myMother.changeName("Paroi");
console.log(myMother);

function Employee(first, last, age, eye, university, Salary) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
    this.university = university;
    this.Salary = Salary;

    // get fullName() {
    //     return this.firstName + " " + this.lastName;
    // };

    this.changeName = function (name) {
        this.lastName = name;
    }
    this.changeSalary = function (salary) {
        this.Salary = salary;
    }
}

const Kishor = new Employee("Kishor", "Paroi", 24, "black", "RUET", 50000);
const Arnab = new Employee("Arnab", "Baisnab", 24, "black", "RUET", 50000);

console.log(Kishor);

Kishor.nationality = "Bangladeshi";
console.log(Kishor);
console.log(typeof Arnab);
debugger;


// ? Math method isnot a builtin constructor for javascript its a global object