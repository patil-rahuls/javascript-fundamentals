//////////////////////////////////////////////////////////////
// DATA STRUCTURES - SETS ////////////////////////////////////
//////////////////////////////////////////////////////////////

// Sets - Unordered Unique collection { ... }
const names = new Set (
   ['rahul' , 'hitesh' , 'rahul', 'rahul',  'aajesh' , 'rahul']
);                          // duplicate item 'rahul'
console.log(names);         // set(3) {'hitesh', 'aajesh' , 'rahul'}

// While defining duplicates can be added, but it boils down to an unordered set of unique values.
// Mixed data type allowed.

// Size of a Set
names.size;                 // 3
// It gives 'unique' count, hence its called "size", and not "length" unlike arrays. arrays can have duplicate values.
