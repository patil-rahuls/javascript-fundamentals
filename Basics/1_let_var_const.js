//////////////////////////////////////////////////////////////
// LET, CONST, VAR ///////////////////////////////////////////
//////////////////////////////////////////////////////////////

// Use *let* and *var* to mutate primitive data.
// Use *const* for Objects and for primitives that don't need to change.

// By default always use *const* if possible so that there are less mutations in code.
// It results in better memory management.

// Avoid using *var* which is the old way(ES5) of defining variables and its more error prone.
// That's the reason the *let* keyword was born !

// A *const* variable for primitive data needs to be initialized with a value while declaring.
const a;        // Error "Missing initializer in const declaration."
const b = 2021; // This is correct for primitive.
const c = {};   // This is allowed in case of Objects.
const d = [];   // Arrays are a special type of Object, hence allowed.
