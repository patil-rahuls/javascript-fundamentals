//////////////////////////////////////////////////////////////
// MODULES PATTERNS [ES 6] ///////////////////////////////////
//////////////////////////////////////////////////////////////

// How are modules implemented inside/behind the scenes.

const ShoppingCart = (function(product, qty){
    const cart = [];
    const shippingCost = [];
    const totalPrice = [];
    const totalQty = [];

    const addToCart = function()  {
        cart.push({product , qty});
        console.log(`${qty} ${product}(s) Added !! `);
    };

    const sc = function(){
        console.log(`Shipping Cost - ${shippingCost}`)   ;
    }

    return{
        addToCart,
        cart,
        totalPrice,
        totalQty
    };
})();


ShoppingCart.addToCart("item1", 10);        // ShoppingCart.cart keeps getting updated.
ShoppingCart.addToCart("item2", 2);
ShoppingCart.addToCart("item3", 1);

console.log(ShoppingCart.cart);
// Observe, that by now, the IIFE has been executed, but still the array "ShoppingCart.cart" keeps getting updated,
// This hapens because of, again, CLOSURES.


