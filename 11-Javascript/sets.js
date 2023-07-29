const set = new Set();
set.add('a');
set.add('b');
set.add('c');
const d = 'd';
set.add(d);

console.log(set);

set.forEach(function (value) {
    // console.log('hello');
    console.log(value);
});


console.log(typeof set);

// making set iterable objects
for (let value of set) {
    console.log(value);
}

set.values();
let text = "";

for (let value of set.values()) {
    text += value;
}

console.log(text);