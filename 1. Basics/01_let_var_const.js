//////////////////////////////////////////////////////////////
// LET, CONST, VAR ///////////////////////////////////////////
//////////////////////////////////////////////////////////////

// Use "let" and "var" to mutate primitive data.
// Use "const" for objects and primitives that don't
// need to mutate/change.

// By default always use "const" if possible so that there
// are less mutations in the code.
// It results in better memory management.

// Avoid using "var" which is the old way(ES5) of defining
// variables as its more error prone.
// That's the reason the "let" keyword was born!

// A "const" variable, while declaring, needs to be
// initialized.
const a;        // error
// 'Uncaught SyntaxError: Missing initializer in const declaration'
const b = 2021;
const c = {};   // Allowed for Objects.
const d = [];   // Arrays are a special type of Object.
