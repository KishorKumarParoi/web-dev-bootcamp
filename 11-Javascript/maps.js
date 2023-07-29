console.log("Maps");

// A Map holds key - value pairs where the keys can be any datatype.
// A Map remembers the original insertion order of the keys.

const fruits = new Map(
    [
        ['apples', 500],
        ['oranges', 300],
        ['bananas', 200]
    ]
);

fruits.set('grapes', 1000);
fruits.set('apples', 1100);

console.log(fruits);

console.log(typeof fruits);

console.log(fruits.size);
console.log(fruits.get('apples'));
fruits.delete('apples');
console.log(fruits.has('apples'));

let text = "";
fruits.forEach(function (value, key) {
    text += `${key} = ${value}\n`;
});

console.log(text);

let anotherText = "";
for (const x of fruits.entries()) {
    anotherText += x + "\n";
}

console.log(anotherText);
console.log(fruits.get('grapes'));
console.log(fruits.has('grapes'));

const newMap = new Map(
    [
        [1, 'one'],
        [2, 'two'],
        [3, 'three']
    ]
);

newMap.set(4, 'four');
console.log(newMap);

let set = new Set(['a', 'b', 'c']);
set.add('kishore');
console.log(set);