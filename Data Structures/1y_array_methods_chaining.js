//////////////////////////////////////////////////////////////
// DATA STRUCTURES - ARRAY METHODS - chaining() //////////////
//////////////////////////////////////////////////////////////

// Array data transformation methods: map(), filter() and reduce()
// These are array methods that transform data
// A big advantage of using these functions over traditional loops is that we can chain these functions together in one statement.

// Method Chaining forms something called as "pipeline"
const arr = [122,24,355,-55,780,-999];
const multiplier = 1.1;
const transformedData = arr.filter(val => val > 0).map(val => val*multiplier).reduce((acc, val) => acc+val, 0);
// 1409.1000000000004

// But if any error occurs, it's hard to guess from where that error came in this pipeline. 
// To monitor errors we can check arrays returned at each step in this pipeline. 
// Remember we have the third parameter in the Callback function of each of these methods which gives the entire array.

const transformedData2 = arr
     .filter(mov => mov > 0)
     .map( (mov, i, arr) => {
           console.log(arr);    
           // Now we can monitor this array in the console.
           return mov*multiplier;
     })
     .reduce((acc, val) => acc+val, 0);
// (4) [122, 24, 355, 780]
// (4) [122, 24, 355, 780]
// (4) [122, 24, 355, 780]
// (4) [122, 24, 355, 780]

console.log(transformedData2);
// 1409.1000000000004

// Remarks about chaining:
// 1. Never overuse chaining. 
//    It can cause real performance issues if we have really huge arrays.
// 2. Never chain methods that mutate the underlying arrays (like splice() or reverse()) in large applications.

