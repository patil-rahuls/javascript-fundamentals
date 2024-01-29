//////////////////////////////////////////////////////////////
// MODULES TYPES & SCOPES ////////////////////////////////////
//////////////////////////////////////////////////////////////

// What are Modules-
// Modules are a way to organize code into separate files or units of functionality.

// Benfits are-
//    1. Reusable code
//    2. Maintainability and
//    3. Scalability

// There are two main types of modules in JavaScript based on specifications:
//    1. CommonJS modules:
//       This is the default module format used in Node.js.
//       It is used in Node.JS FOR ALMOST ALL OF ITS IMPLEMENTATION.
//       It uses the *require()* function to import modules and the *module.exports* object to export them.

//    2. ES6 modules:
//       This is the module format introduced in ES6.
//       It uses the *import* statement to import modules and the *export* keyword to export them.
//       ES6 modules can be used both in Node.js and in modern web browsers that support them.


// Functionally three types of modules-
//    1. core modules - inbuilt modules in node js like http, fs, os, util, url and querystring.
//    2. local modules. - modules that are writen by developers as a part of creating their application.
//    3. third party modules - all available online in public domain. like AsyncJS, Axios, and Express to name a few.

// Scopes in Modules-
// In a module, all top level variables are scoped to the module.
// In a script, all top level variables are scoped Globally.

// By default "strict mode" is used in Modules.

// Top Level "this" points to undefined in a Module,
// whereas in a script, it point to window(Browser)/global(NodeJS) object.

// We should write only 1 module per file.
// Imports are at the top level.
// Imports are hoisted.
// Imports are the first thing that happen in a module.
