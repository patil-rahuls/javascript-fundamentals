//////////////////////////////////////////////////////////////
// DATA STRUCTURES - ARRAY - METHODS TO GET NEW ARRAYS ///////
//////////////////////////////////////////////////////////////

// map() first and then flat() the result is a common practice.
// However this can be combined into one operation and that is done by the flatMap() method.

// flatMap():
// Better performance.
// It's a combination of map() first and then flat() operation.

const totalUsersWalletBalance = accounts
   .map(acc => acc.walletBalance)
   .flat();


// Example #1
const totalUsersWalletBalance2 = accounts
   .flatMap(acc => acc.walletBalance)
   .reduce((acc, mov) =>  acc+mov , 0);

// Since flatMap() does the mapping too, it needs to receive exactly the same arguments as you would
// pass to the map method.

// IMP: flatMap() goes only one level deep.
// Hence if you need to go deeper, then you still need to use the flat() method separately
// with depth argument.
