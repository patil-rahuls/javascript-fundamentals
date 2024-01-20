//////////////////////////////////////////////////////////////
// MODULES [ES 6] ////////////////////////////////////////////
//////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////
// Syntax:
//////////////////////////////////////////////////////////////

// New file : shoppingCart.js ////////////////////////////////////
//// Exporting module                                           //
    console.log('Exorting Module');                             //
    const shippingCost= 50;                                    //
    const cart = [];                                            //
                                                                //
    const addToCart = function(product , quantity){             //
        cart.push({product , quantity});                        //
        console.log(`${quantity} ${product} Added !! `);        //
    }                                                           //
                                                                //
    // Named export                                             //
    // Should be at top level. not inside any                   //
    // blocks like if/loops etc.                                //
    export const chkPinCode = function(pincode){                //
        console.log(`Pincode ${pincode} is servicable.`);       //
    }                                                           //
                                                                //
    // We can export multiple things using named export.        //
    const qtyLimit = 5;                                         //
                                                                //
    // These variables/methods are scoped to only this module.  //
    export{ shippingCost, addToCart, chkPinCode, qtyLimit };    //
    /* Aliases can be also used in exports                      //
    export { totalPrice, qtyLimit as maxQty };                  //
    */                                                          //
//////////////////////////////////////////////////////////////////

// Main file : script.js /////////////////////////////////////////
//// Importing module                                           //
    import {                                                    //
        addToCart,                                              //
        shippingCost,                                           //
        chkPinCode} from './shoppingCart.js';                   //
    /* using Aliases for imported values.                       //
    import {                                                    //
        addToCart,                                              //
        shippingCost as deliveryCharges                         //
    } from './shoppingCart.js';                                 //
                                                                //
    // Importing all values from a module                       //
    import * as shoppingCartDetails from "./shoppingCart.js";   //
    shoppingCartDetails.addToCart(10, "rubber");                //
    */                                                          //
                                                                //
    console.log('Importing Module');                            //
    // calling method imported from the shoppingCart Module     //
    addToCart("Shirt", 5);                                      //
    chkPinCode(400061);                                         //
//////////////////////////////////////////////////////////////////


// Default exports
// When we want to export only one item from a module.

// Suppose u want to export a function by default., then default export looks like :
export default function(product , quantity){
    cart.push({product , quantity});
    console.log(`${quantity} ${product} Added !! `);
};  // directly exporting a function.

// And while importing we can give it any name
import add from './shoppingCart.js';
// It checks for default export. No curly braces around add.
add('pizzza',2);

// Never mix default with named imported items.
import add , { addToCart, totalPrice as price, totalQty} from './shoppingCart.js'; // bad idea

// If a module only exports a single function or object,
// that function or object is automatically the default export.
// In this case, you can import it without using braces:
import myFunction from './myModule.js';