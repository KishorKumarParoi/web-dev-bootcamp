const obj = {
    one: 1,
    two: 2,
    three: 3,
};

const arr = [1, 2, 3];

for (let x in arr) {
    console.log(x);
}

console.dir(arr);
let iter = arr[Symbol.iterator]();
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());

// debugger;
console.log("fakka");

const arr2 = [3, 4, 5];
const numIter = arr2[Symbol.iterator]();

console.log(numIter.next());
console.log(numIter.next());
console.log(numIter.next());
console.log(numIter.next());

function myNumbers() {
    let n = 0;
    return {
        next: function () {
            n += 10;
            console.log(n, false);
            return { value: n, done: false };
        }
    };
}

const n = myNumbers();
n.next();
n.next();
n.next();

// A JavaScript iterable is an object that has a Symbol.iterator.
// The Symbol.iterator is a function that returns a next() function.


let myNumber = {};
// console.log(myNumbers[Symbol.iterator]);
myNumber[Symbol.iterator] = function () {
    let n = 0;
    let done = false;
    return {
        next() {
            n += 30;
            if (n > 100) {
                done = true;
            }
            return { value: n, done: done };
        }
    };
}

// const n2 = myNumbers[Symbol.iterator]();
// n2.next();
// n2.next();
// n2.next();
// n2.next();

for (let x of myNumber) {
    console.log(x);
}

const myArr = [1, 2, 3, 4, 5];
const myIter = myArr[Symbol.iterator]();

console.log(myIter.next());
console.log(myIter.next());
console.log(myIter.next());
console.log(myIter.next());
console.log(myIter.next());
console.log(myIter.next());

// make objects iterable
const numbers = {};

numbers[Symbol.iterator] = function () {
    let n = 10;
    let done = false;

    return {
        next() {
            n += 10;
            if (n === 100) {
                done = true;
            }
            return {
                value: n,
                done: done
            };
        }
    };
}

for (const x of numbers) {
    console.log(x);
}

debugger;