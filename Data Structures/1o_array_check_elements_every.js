//////////////////////////////////////////////////////////////
// DATA STRUCTURES - ARRAY - METHODS - CHECK ELEMENT EXISTS //
//////////////////////////////////////////////////////////////

// every():
// Returns true ONLY if ALL the elements of the array satisfy the condition. 
// Hence the name every.

const check = wallet.every( acc => acc.bal >0 );
if(check)
   alert(`All Wallet balance are positive.`);


// Another example: (A good approach)
// Write a callback function separately wherever necessary, so that, it can be reused.
const deposit = mov => mov > 0;

// Now we can reuse the same function as a callback to different fn.
wallet.some(deposit);
wallet.filter(deposit);


