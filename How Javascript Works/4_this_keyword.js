//////////////////////////////////////////////////////////////
// this KEYWORD //////////////////////////////////////////////
//////////////////////////////////////////////////////////////

// *this* is a sepcial object that is created for every function's Execution Context.
// Its one of the three components of an Execution Context.

// Takes the value of (Points to) the "owner" of the function in which *this* keyword is used.

// *this* is NOT STATIC. Its value is ONLY assigned when the function is actually called.

// In case of arrow functions' execution context, they do not have their own 'this' object.
// They get it from their outer regular function's execution context.
// Same with the 'arguments' object.

// In case of Browser's Event Listener's Execution Context, 'this' object points to DOM
// element that the handler is attached to.
