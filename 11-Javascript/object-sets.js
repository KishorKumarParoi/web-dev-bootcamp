const letters = new Set(['a', 'b', 'c', 'd', 'a', 'b', 'c', 'd']);
console.log(letters);

letters.add('g');
console.log(letters.size);
console.dir(letters);
let x = "X";
letters.add(x);
console.log(letters);

letters.delete('a');
const arr = letters.entries();
const arr1 = letters.values();
const arr2 = letters.keys();

console.log(typeof arr);
for (const x of arr) {
    console.log(x);
}
console.log("Values");
for (const x of arr1) {
    console.log(x);
}
console.log("Keys");
for (const x of arr2) {
    console.log(x);
}

console.log(letters.has('g'));
let text = "";
letters.forEach(function (value, key) {
    text += value + " " + key + "\n";
});
console.log(text);

console.log(typeof letters);
console.log(letters instanceof Set);

debugger;