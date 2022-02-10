//////////////////////////////////////////////////////////////
// SHORT CIRCUITING && and || ////////////////////////////////
//////////////////////////////////////////////////////////////

// The operators || and && do not always return boolean.

// 1. SHORT CIRCUITING LOGICAL OR - ||
// Keeps evaluating until a 'Truthy' value is found and returns it. Returns last value otherwise.

//  Example #1
console.log(undefined || 0 || "" || 'Hello' || 23 || null);
// Outputs 'Hello'
// In OR operation, the first truthy value is printed. 
// It will be short circuited at the first truthy value 'Hello' in the expression above.

//  Example #2
console.log(3 || '');           // 3
// 3 is a truthy value, so the next expression is not evaluated 
console.log(3 || 'Rahul');      // 3
console.log(true || 0);         // true

//  Example #3
console.log(undefined || null); // null
// As no truthy value found, so the last value is returned.


// 2. SHORT CIRCUITING &&
// Keeps evaluating until a 'FALSY' value is found and returns it. Returns last value otherwise.

//  Example #4
console.log(undefined && 0 && "" && 'Hello' && 23 && null);
// Outputs undefined
// In AND operation, the first falsy value is printed.
// It will be short circuited at the first falsy value 'undefined' in the expression above.

//  Example #5
console.log(3 && 'Rahul');      // 'Rahul'
// As no falsy value found, so the last value is returned.

//  Example #6
console.log(0 && 'Rahul');      // 0

//  Example #6
console.log('Hello' && 23 && null && "rest"); 
// null
// The first Falsy value where the short circuit happened.

// From the above examples, we observed that the || and && operations do not always return a boolean, 
// instead they return the data based on the operands (where the short circuiting happens).


