//////////////////////////////////////////////////////////////
// DATA STRUCTURES - ARRAY - METHODS TO GET NEW ARRAY ////////
//////////////////////////////////////////////////////////////

// Array data transformation methods: map(), filter() and reduce()
// These are array methods that transform data
// A big advantage of using these functions over traditional loops is that we can chain these functions together in one statement.

// Map() is like forEach() + it also returns a new modified array.
const numbers = [2, 4, 3, 0, 10, 20, 30, 40];
const power = 3;
const newValues = numbers.map(function(val){
   return val ** power; // modify each item and put in new array
});
console.log(numbers);      // [2, 4, 3, 0, 10, 20, 30, 40]
console.log(newValues);    // [8, 64, 27, 0, 1000, 8000, 27000, 64000]

// Use the arrow function to simplify our code.
const newValues2 = numbers.map(mov => mov * power);

// Just like forEach(), Map() also has 3 three parameters.
const newArr = numbers.map( (curr, key, arr) => {
   return `${key} : ${curr}`;       // will store these strings to the newArr array.
});

console.log(newArr);
// ["0 : 2", "1 : 4", "2 : 3", "3 : 0", "4 : 10", "5 : 20", "6 : 30", "7 : 40"]
