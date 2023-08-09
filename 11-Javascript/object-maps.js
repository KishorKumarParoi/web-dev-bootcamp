const letters = new Map([
    ['a', 'g'],
    // ['a', 'g', 'b', 'c'],
    ['d', 'f'],
    ['h', 'i'],
    ['a', 'k']
]);
console.log(letters);

letters.set('apple', 500);
console.log(letters.size);
console.dir(letters);
let x = "X";
letters.set(x, 100);
console.log(letters);

letters.delete('a');
console.log(letters.has('apple'));
console.log(letters.get('apple'));

const arr = letters.entries();
const arr1 = letters.values();
const arr2 = letters.keys();

// arr.forEach((x) => {  can't do this operation as arr is iterable but not an array
//     console.log(x);
// });

for (const x of arr) {
    console.log(x);
}

// arr1.forEach((x) => {
//     console.log(x);
// });

for (const x of arr1) {
    console.log(x);
}

for (const x of arr2) {
    console.log(x);
}

const obj = {
    firstname: "Kishor",
    lastname: "Paroi"
}

obj.firstname = "Arnab";
console.log(obj);

letters.set(obj, 1000);
console.log(letters);
console.log(typeof letters[0]);
console.log(letters instanceof Map);
console.log(letters.get(obj));

obj.fullname = function () {
    return this.firstname + " " + this.lastname;
}
console.log(obj.fullname());

function bark() {
    console.log("Bark");
}

bark.animal = "Dog";
console.log(bark);

debugger;
