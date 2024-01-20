//////////////////////////////////////////////////////////////
// MODULES PATTERNS [ES 6] ///////////////////////////////////
//////////////////////////////////////////////////////////////

// The Module Pattern is a design pattern in JavaScript that allows you to create encapsulated and
// reusable code by creating a self-contained module that can expose public APIs to the outside world
// while keeping the implementation details hidden from other parts of your code.

// We use IIFE to create a self-contained module.
var myModule = ( function () {
    // private variable
    var message = "Hello World!";

    // private function
    function showMessage() {
      console.log(message);
    }

    // public API
    return {
      displayMessage: function () {
        showMessage();
      }
    };
})();
myModule.displayMessage(); // outputs "Hello World!"

// In the example above, we create a new module by defining an IIFE that returns an object with the
// public API of our module. Inside the IIFE, we define private variables and functions that are
// not exposed to the outside world.

// The message variable and the showMessage() function are private, meaning they cannot be accessed
// from outside the module. The displayMessage() function is part of the public API,
// so it can be accessed from outside the module.

// When we call myModule.displayMessage(), the displayMessage() function calls the private showMessage()
// function, which displays the message "Hello World!" in the console.

// The Module Pattern allows us to create reusable and encapsulated code, avoiding potential naming
// conflicts with other parts of our code. It also helps to keep our code organized and easier to
// maintain by hiding implementation details.

//////////////////////////////////////////////////////////////
// And this is how are modules implemented inside/behind the scenes. By writing an IIFE which returns(exports) only
// required data. Simple.
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
