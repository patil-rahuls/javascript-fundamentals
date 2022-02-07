//////////////////////////////////////////////////////////////
// LET, CONST AND VAR ////////////////////////////////////////
//////////////////////////////////////////////////////////////

// Use *let* and *var* to mutate primitive data.
// Use *const* for primitives that don't need to change and for *objects*.

// By default always use *const* if possible so that there are less mutations in code.
// It results in better memory management.
// Avoid using *var* which is the old way(ES5) of defining variables and its more error prone.
// That's the reason the *let* keyword was born !

// A *const* variable for primitive data needs to be initialized while declaring.
const a;        // Error "Missing initializer in const declaration."
const b = 2021; // This is correct for primitive.
const c = {};   // This is allowed in case of Objects.
const d = [];   // An array is an Object type too, hence allowed.


