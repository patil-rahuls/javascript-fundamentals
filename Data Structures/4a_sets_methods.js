//////////////////////////////////////////////////////////////
// DATA STRUCTURES - SETS - METHODS //////////////////////////
//////////////////////////////////////////////////////////////

// Consider this Set as an example
const names = new Set (
   ['rahul' , 'hitesh' , 'rahul', 'rahul',  'aajesh' , 'rahul']
);                          // duplicate item 'rahul'
console.log(names);         // set(3) {'hitesh', 'aajesh' , 'rahul'}

// 1. has()
// Checks if an element exists in a Set.
names.has("anil");   		// false
names.has("hitesh"); 		// true


// 2. add()
// Add an item to a Set.
names.add("anil");
names.add("milan");
console.log(names);			// set(5) {'hitesh', 'aajesh' , 'rahul', 'anil', 'milan'}

names.add("kisan");
names.add("kisan");			// Will get added only once (Set has to have unique values)

console.log(names);			// set(6) {'hitesh', 'aajesh' , 'rahul', 'anil', 'milan', 'kisan'}


// 3. delete()
// Delete item from Set.
names.delete("kisan");
console.log(names);			// set(5) {'hitesh', 'aajesh' , 'rahul', 'anil', 'milan'}


// 4. clear()
// Empty/Truncate the Set.
names.clear();


// There is no method to get a specific item from a set.
// Because, there is no order(index) defined in which the items are stored in a Set unlike arrays.
// When using Sets, we just care about uniqueness and whether the item is present or not(in the Set).

// But since Sets are iterables too. We can loop over them.
for (const itm of names) {
   console.log(itm);
}
