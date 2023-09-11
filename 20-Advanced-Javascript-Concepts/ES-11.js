console.log("Hello World Jonogon!");

window.setTimeout(() => {
  console.log("Hello World from Window!");
}, 2000);

globalThis.setTimeout(() => {
  console.log("Hello World from Node Js!");
}, 3000);

globalThis.setTimeout(() => {
  console.log("Hello World from Global This!");
}, 4000);
