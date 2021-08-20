//////////////////////////////////////////////////////////////
// DATA STRUCTURES - ARRAY METHODS - flatMap() ///////////////
//////////////////////////////////////////////////////////////

// map() first and then flat() the result is a common practice. 
// However this can be combined into one operation and that is done by the flatMap() method.

// flatMap():
// Better performance. 
// It's a combination of map() first and then flat() operation.

const totalUsersWalletBalance = accounts
   .map(acc => acc.walletBalance)
   .flat()
   .reduce((acc, mov) =>  acc+mov , 0);


// same example using flatMap() method
const totalUsersWalletBalance2 = accounts
   .flatMap(acc => acc.walletBalance)
   .reduce((acc, mov) =>  acc+mov , 0);

// Since flatMap() does the mapping too, it needs to receive exactly the same arguments as passed to the map method. 

// IMP: flatMap() goes only one level deep. 
// Hence if you need to go deeper, then you still need to use the flat() method with depth argument.

