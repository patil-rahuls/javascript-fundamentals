//////////////////////////////////////////////////////////////
// DATA STRUCTURES - SETS - METHODS forEach() ////////////////
//////////////////////////////////////////////////////////////

// Sets - Unordered Unique collection { ... }
const names = new Set (
   ['rahul' , 'hitesh' , 'rahul', 'rahul',  'aajesh' , 'rahul']
);

// forEach() takes 3 parameters.
// current_item, current_index, and entire set
names.forEach(function( val, key, set){
   console.log(`${key} : ${val}`);     // will print key as same as val
});
// hitesh : hitesh
// aajesh : aajesh
// rahul : rahul

// The key in forEach() over a Set does not make any sense there. 
// But to make this as a common function available to all iterables, its signature remains the same for all iterables. 

// For such values we can use the throwaway variable ‘_’
uniqCurrencies.forEach(function( val , _ , set){
   console.log(`${val}`);
});
// hitesh
// aajesh
// rahul

// Disadvantage:
// break and continue does not work! So if you need to break out of the loop, then use the ordinary for-of loop.