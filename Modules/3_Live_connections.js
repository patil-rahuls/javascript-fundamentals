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
// Imports are not copys of exports, they are live connections. Thus saving memory.
