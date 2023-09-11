// import { Hello, World } from "./export.js";
// Hello();
// World();

(async function () {
  const { Hello: hello } = await import("./export.js");
  const { World: world } = await import("./export.js");
  hello();
  world();
})();
