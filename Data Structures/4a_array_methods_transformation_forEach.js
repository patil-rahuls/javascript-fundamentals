//////////////////////////////////////////////////////////////
// DATA STRUCTURES - ARRAY METHODS - forEach() ///////////////
//////////////////////////////////////////////////////////////

// Using a for-of loop
const arr = [11,22,33,44,55,66];
for (const [i, item] of arr.entries()) {
   console.log( `At position ${index} - ${item}` );
}

// Using forEach()
// It's an higher order function that takes a call back function which executes on each iteration.
const arr = [11,22,33,44,55,66];
arr.forEach( function(item) {
   console.log( item );
});
// Observe that the callback function parameter 'item' is the current array element in each iteration.

// forEach() takes 3 parameters.
// current_item, current_index, and entire array
arr.forEach( function(item, index, entireArr) {
   console.log( `At position ${index} : Element - ${item}` );
} );

// Disadvantage:
// break and continue does not work! So if you need to break out of the loop, then use the ordinary for-of loop.

// Also see forEach on Maps and Sets.

