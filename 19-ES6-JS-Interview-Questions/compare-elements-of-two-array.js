const hasSameElements = (arr1, arr2) => {
  return (
    arr1.length === arr2.length &&
    arr1.every((element, index) => element === arr2[index])
  );
};

console.log(hasSameElements([1, 3, 2], [1, 2, 3]));
debugger;
