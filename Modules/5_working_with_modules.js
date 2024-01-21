//////////////////////////////////////////////////////////////
// Working with Node JS moduless /////////////////////////////
//////////////////////////////////////////////////////////////

// How Node JS searches for the importe modules in our folders.
// It treats index.js file (by default) inside any folder as the main module.

let today = require("./today");
import today from "./today";
// The require/import statement above, will assume that the scripts have a file ext of .js
// If there is no 'today.js' file in the current directory, it will assume that 'today' is a sub directory
// and it will check for a subdirectory named 'today' and search for 'index.js' in that directory.
