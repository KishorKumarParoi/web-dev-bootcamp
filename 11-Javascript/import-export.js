// import { Name, pi, e } from './modules.js';

// import { Name as Nam, pi as piVal, e as logE } from './modules.js';
// console.log(`${Nam} has ${piVal} and ${logE}`);  // * named import
// console.log(pi);
// console.log(e);


// import * as test from './modules.js'; // * import all

// console.log(test.Name);
// console.log(test.pi);
// console.log(test);

// ? Default import
import modules, { pi } from "./modules";
console.log(modules, pi);