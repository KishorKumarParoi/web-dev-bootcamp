const arr = [1, 2, 3, 4, 5, 6, 8, 100];

const sliced = arr.slice(2, 5); // 3 4 5
console.log(sliced);

const slice = Array.prototype.slice;
console.log(slice);

const sliced2 = slice.call(arr, 1, 6);
console.log(sliced2);

const sliced3 = slice.apply(arr, [1, 6]);
console.log(sliced3);

const sliced4 = slice.bind(arr, 1, 6);
console.log(sliced4());

const sliced5 = slice.bind(arr);
console.log(sliced5(1, 6));

const sliced6 = arr.slice(-1, -4);
console.log(sliced6);

debugger;
