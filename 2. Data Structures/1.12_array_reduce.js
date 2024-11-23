//////////////////////////////////////////////////////////////
// DATA STRUCTURES - ARRAY - METHODS - REDUCE TO ONE VALUE ///
//////////////////////////////////////////////////////////////

// Array data transformation methods: map(), filter() and reduce()
// These are array methods that transform data
// A big advantage of using these functions over traditional loops is that we can chain these functions together in one statement.

// Reduce() boils(reduces) down all the array values to one single value.
// Returns a single value NOT an array.
const numbers = [34,5,6,7,8,88,2,89,100];
const total = numbers.reduce(function(acc, val, index, arr){
   return acc + val;
} , 0);

// 0 is default value to the accumulator parameter ‘acc’
// In the Callback function 'acc' is a new parameter here which is an accumulator.
//    It accumulates the data on every Iteration.
//    It keeps holding and/or changing a value throughout the iterations.
//    A value needs to be returned (on every iteration). It can be the 'acc' Or any calculations with acc.

// Same using arrow fn.
const total2 = numbers.reduce((acc,val) => acc+val, 0);

// Another Example: getting maximum value from an array.
const numbers2 = [34,5,6,7,8,88,2,89,100];
const max = numbers2.reduce(
     (acc, curr_amount) => {
           if (acc > curr_amount)
                 return acc;
           else
                 return curr_amount;
     }
, txn[0]);                 // here this parameter is the starting item
console.log(max);          // 100

// The accumulator holds the net result of the function.
// IMP - We need to return something in the callback which will go into the accumulator.
