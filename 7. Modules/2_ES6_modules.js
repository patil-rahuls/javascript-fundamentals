//////////////////////////////////////////////////////////////
// MODULES [ES 6] ////////////////////////////////////////////
//////////////////////////////////////////////////////////////

// They use "import" and "export".
// They are asynchronous, which makes them better for
// web performance.
// Always in Strict Mode
// File extension are usually - .js (or .mjs)

// IMP: In ES6 Modules (import), you get a live connection
// (also called a "live binding"). If the original file updates
// the value, your imported variable updates automatically.


// Example 1: Named Exports/Imports
// A module can have as many names exports.
//////////////////////////////////////////////////////////////
// Exporting Module
// mathUtils.js (The Provider)
const add = (a, b) => a + b;
const pi = 3.14;
export { add, pi };

// OR we can export individually.
export const add = (a, b) => a + b;
export const pi = 3.14;
//////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////
// Importing Module
// app.js (The Consumer)
import { add, pi } from './mathUtils.js';
console.log(add(10, 20)); // 30
//////////////////////////////////////////////////////////////




// Example 2: Default Export/Imports
// A module can only have only ONE default export and more than
// one named exports.
// We specify Alias' using 'as' keyword.
//////////////////////////////////////////////////////////////
// Exporting Module
// mathUtils.js (The Provider)
export default (a, b) => a + b;
const pi = 3.14;
const K = -273.15;
export { pi, K as KelvinConstant }; // Exporting Alias
//////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////
// Importing Module
// app.js (The Consumer)
import
    addFunction,
    {
        KelvinConstant,  // We can't use 'K' here.
        pi as PiConstant // Alias while importing.
    } from './mathUtils.js';
console.log(addFunction(10, 20)); // 30
// When no curly braces are given around, it checks for the
// default export. e.g. for "addFunction" in this case.
//////////////////////////////////////////////////////////////




// Example 3: Namespace Imports
// Consider the exporting file from Example:2 for this example.
// Using '*' and 'as' we can import everything in an alias.
import * as name from "./mathUtils.js";

const result = name.default(10, 20);
// name.default would call the default exported fn.
console.log(name.pi);




// To Summarise -
// Named import: import { export1, export2 } from "module-name";
// Default import: import defaultExport from "module-name";
// Namespace import: import * as name from "module-name";
