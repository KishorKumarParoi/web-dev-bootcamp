const arr = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];

const newArr = arr.map((obj) =>
  obj.id === 1 ? { ...obj, name: "Charlie" } : obj
);
console.log(newArr);

debugger;
