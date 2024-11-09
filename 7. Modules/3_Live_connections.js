//////////////////////////////////////////////////////////////
// IMP: Imports are live connection to exports      //////////
//////////////////////////////////////////////////////////////

// Consider shoppingCart.js
// We have an array cart[], which gets updated on every addToCart() call.
// Let's assume we have exported cart[] from shoppingCart;

// So in import module
import cart from './shoppingCart.js'
add('bread', 3);
add('eggs', 12);
add('dry-ice', 1);

console.log(cart); // We get the updated cart[]. Because its a live connection and not a copy.
// Imports are not copys of exports, they are read-only live bindings/connections. Thus saving memory.

// IMP Note: The imported values are read-only views of the features that were exported. 
// Similar to *const* variables, you cannot re-assign the variable that was imported, 
// but you can still modify properties of object values. 
// The value can only be re-assigned by the module exporting it.
