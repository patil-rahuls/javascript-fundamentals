//////////////////////////////////////////////////////////////
// DATA STRUCTURES - ARRAY METHODS - filter() ////////////////
//////////////////////////////////////////////////////////////

// Array data transformation methods: map(), filter() and reduce()
// These are array methods that transform data
// A big advantage of using these functions over traditional loops is that we can chain these functions together in one statement.

// filter() filters out elements from an array that do not satisfy a certain condition.
const txn = [122,24,355,-55,780,-999];
const positives = txn.filter(function(amount, index, arr){
   amount > 0;                      // no return statement for single line arrow fn.
});

console.log(positives);              // [122,24,355,780]

// Observe that filter’s Callback function need to return a Boolean and NOT a value.
// If that condition is true for the current item then that item is returned to the new array.

