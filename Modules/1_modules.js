//////////////////////////////////////////////////////////////
// MODULES [ES 6] ////////////////////////////////////////////
//////////////////////////////////////////////////////////////

// 1 module per file.
// In a module, All top level variables are scoped to the module.

// In a script, All top level variables are scoped Globally.

// Default "strict mode" in Modules.

// Top Level "this" points to undefined in a Module, whereas in a script, it point to window object(Browser).

// Import export syntax works in modules.

// Imports are at the top level.
// Imports are hoisted, .
// Imports are the first thing that happen in a module.

<script type="module">

</script>
    
// A module loaded from an HTML file is asynchronous.

// Before the Execution starts all the imports are done Before.
// Modules are IMPORTED synchronously.

//////////////////////////////////////////////////////////////
// Syntax:
//////////////////////////////////////////////////////////////

// New file : shoppingCart.js
// Exporting module
console.log('Exorting Module');
const shippingCost = 50;        
const cart = [];
// ^^ These variables are scoped to only this module.  

const addToCart = function(product , quantity){
    cart.push({product , quantity});
    console.log(`${quantity} ${product} Added !! `);
}

// Named export
export const  addToCart   = function(product , quantity){ // should be at top level. and not inside any blocks like if, loops etc.
    cart.push({product , quantity});
    console.log(`${quantity} ${product} Added !! `);
}

// We can export multiple things using named export.
const totalPrice = 1000;
const totalQty = 4;

export{ totalPrice , totalQty  };

// Default export
// Later



// Main file : script.js
// Importing module
import {addToCart,  totalPrice , totalQty} from './shoppingCart.js'; // same name as written in exporting module

console.log('Importing Module');

addToCart(5, "Shirt");
console.log( totalPrice , totalQty);




// TO change name of imported values 
import {addToCart,  totalPrice as price , totalQty} from './shoppingCart.js'; // same name as written in exporting module
console.log(price);

// same can be done in exports
export{ totalPrice , totalQty  as QT }; // same need to be changed in importing module.



// Import all from a module
import * as shoppingCartDetails from "./shoppingCart.js";
shoppingCartDetails.addToCart(10, "rubber");


// Default exports
// when we want to export only one item from a module.

// supppose u want to export a function by default., then default export looks like :

export default function(product , quantity){
    cart.push({product , quantity});
    console.log(`${quantity} ${product} Added !! `);
};  // directly exporting a function.

// and while importing we can give it any name
import add from './shoppingCart.js';    // it checks for default export. No curly braces around add
add('pizzza',2);

// never mix default with named imported items.
import add , {addToCart,  totalPrice as price , totalQty} from './shoppingCart.js'; // bad idea


//////////////////////////////////////////////////////////////
// IMP: Imports are live connection to exports
//////////////////////////////////////////////////////////////

// Consider shoppingCart.js
// we have an array cart[], which gets updated on every addToCart() call.
// export cart; // we are exporting cart array too.

// So in import module
import cart from './shoppingCart.js'
add('bread', 3);
add('eggs', 12);
add('dry-ice', 1);

console.log(cart); // we get the updated array. because its a live connection and not a copy.
// imports are not copys of exports, they are live connections.
