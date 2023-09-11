// import { Hello, World } from "./export.js";
// Hello();
// World();

// (async function () {
//   const { Hello: hello } = await import("./export.js");
//   const { World: world } = await import("./export.js");
//   hello();
//   world();
// })();

// import * as all from "./export.js";
// all.Hello();
// all.World();

import("./export.js").then(({ Hello: hello, World: world }) => {
  hello();
  world();
});
