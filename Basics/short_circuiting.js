//////////////////////////////////////////////////////////////
// SHORT CIRCUITING && and || ////////////////////////////////
//////////////////////////////////////////////////////////////

// VERY IMP : || and && operators do not always return boolean

// 1. SHORT CIRCUITING ||
console.log(undefined || 0 || "" || 'Hello' || 23 || null);
// Outputs 'Hello'
// In OR operation, the first truthy value is printed. 
// It will be short circuited at the first truthy value 'Hello' in the expression above.

console.log(3 || '');
// Outputs 3 
// First value i.e. 3 is a truthy value, so the control does not evaluate the next expression.

console.log(3 || 'Rahul');      // 3
console.log(true || 0);         // true
console.log(undefined || null); // null - as no truthy value found. So the last value is returned.

// 2. SHORT CIRCUITING &&
// If a value is truthy, it evaluates the next and simply returns the LAST value irrespective of truthy or falsy value type.
console.log(undefined && 0 && "" && 'Hello' && 23 && null);
// Outputs undefined
console.log(3 && 'Rahul');
// Outputs 'Rahul' - first value 3 is truthy so the second value is evaluated and because its the last value its returned.
console.log(0 && 'Rahul');     // 0 - short circuited at 0 - falsy value.
console.log(7 && 'Rahul');     // 'Rahul'.
console.log('Hello' && 23 && null && "rest"); 
// null. The last value where the short circuit happened.

// From the above examples, we observed that the || and && operations do not always return a boolean, 
// instead they return the data based on the operands (where the short circuiting happens).
