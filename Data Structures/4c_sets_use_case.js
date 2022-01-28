//////////////////////////////////////////////////////////////
// DATA STRUCTURES - SETS - USE CASES ////////////////////////
//////////////////////////////////////////////////////////////

// 1. Remove duplicates from an array.
const users = ['rahul' , 'hitesh' , 'rahul', 'rahul',  'aajesh' , 'rahul'];
const unq = new Set(users); // in ( ) we pass an iterable(like an array)

// 2a. Count of no. of unique items in an Array.
const dupArr = [1,2,3,5,7,8,1,1,2,4,5,2];
const countUnique = new Set(dupArr).size;
console.log(countUnique);	// 7

// 2b. String is also an iterable, so we can make a set out of it. 
// (creates a unique set of characters)
let name = 'Rahul is awesome';
const chars = new Set(name).size;
console.log(chars);			// 12

// 3. Convert Set to an Array.
// Useful when we want to remove duplicates from an array and want to use it later.
// spread operator works for any iterables and the set is also an iterable.
const usersUniq = [...new Set(users)];


