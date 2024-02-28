//////////////////////////////////////////////////////////////
// MODULES [ES 6] ////////////////////////////////////////////
//////////////////////////////////////////////////////////////

// 1. Named Exports ( curly braecs {  } )
// New file : shoppingCart.js ////////////////////////////////////
//// Exporting module                                           //
    console.log('Exorting Module');                             //
    const shippingCost= 50;                                     //
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
    export { shippingCost, addToCart, chkPinCode, qtyLimit };   //
    /* Aliases can be also used in exports                      //
    export {                                                    //
        shippingCost,                                           //
        addToCart,                                              //
        chkPinCode,                                             //
        qtyLimit as maxQty                                      //
    };                                                          //
    */                                                          //
//////////////////////////////////////////////////////////////////

// Main file : script.js /////////////////////////////////////////
//// Importing module                                           //
    import {                                                    //
        addToCart,                                              //
        shippingCost,                                           //
        chkPinCode } from './shoppingCart.js';                  //
    /* using Aliases for imported values.                       //
    import {                                                    //
        addToCart,                                              //
        shippingCost as deliveryCharges                         //
    } from './shoppingCart.js';                                 //
                                                                //
    // Importing all values from a module                       //
    // a.k.a Namespace import                                   //
    import * as shoppingCartDetails from "./shoppingCart.js";   //
    shoppingCartDetails.addToCart(10, "rubber");                //
    */                                                          //
                                                                //
    console.log('Importing Module');                            //
    // calling method imported from the shoppingCart Module     //
    addToCart("Shirt", 5);                                      //
    chkPinCode(400061);                                         //
//////////////////////////////////////////////////////////////////


// 2. Default exports ( no curly braces {  } )
// A module can only have ONE default export,
// but as many named exports as you'd like.
// And You can import them all together:

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
// import add , { addToCart, totalPrice as price, totalQty} from './shoppingCart.js'; 
// peolpe say its a bad idea, dont know why. Please correct me :)

// 3. MIXED default with named exports
// B.js
import A, { myA, Something } from './A'
// Here, we import the default export as A, and
// named exports called myA and Something, respectively.

// A.js
export default 42
export const myA = 43
export const Something = 44

// We can also assign them all different names when importing:
// B.js
import X, { myA as myX, Something as XSomething } from './A'

// Remember, the curly braces are used only for named exports,
// while the default exports are imported directly i.e. without the curly braces.

// To Summarise -
// Named import: import { export1, export2 } from "module-name";
// Default import: import defaultExport from "module-name";
// Namespace import: import * as name from "module-name";