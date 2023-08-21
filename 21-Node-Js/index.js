var a = 10;
let bb = {
  firstname: "kishor",
};

console.log(module.filename);
console.log(module.paths);
console.log(module);
// console.log(__.pathname);
// export default a;

module.exports = {
  a,
  bb,
};

debugger;
