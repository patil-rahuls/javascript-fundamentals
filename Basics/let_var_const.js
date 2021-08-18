//////////////////////////////////////////////////////////////
// LET, CONST AND VAR ////////////////////////////////////////
//////////////////////////////////////////////////////////////

// Use let and var for mutable primitive data.
// Use const for objects and for primitives that don't need to change.

// By default always use const if possible, so that there are less mutations in code which results in a better memory management.
// Avoid using var which is the old way(ES5) of defining variables and its more error prone. That's the reason the let keyword was born !!

// A const variable(primitive) needs to be initialized while declaring.
const a;        // Error "Missing initializer in const declaration."
const a = 2021; // This is correct (Primitive)
const b = {};   // This is allowed in case of Objects.
const c = [];   // An array is an object.
