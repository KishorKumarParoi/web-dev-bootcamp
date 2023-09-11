let set = new Set();
set.add(5).add(9).add(59).add(9).add(100);
console.log(set);
console.log(set.has(9));
set.delete(set.has(100));
console.log(set.size);
set.delete(100);
console.log(set);

debugger;
