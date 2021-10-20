//////////////////////////////////////////////////////////////
// SHORT CIRCUITING && and || ////////////////////////////////
//////////////////////////////////////////////////////////////

// VERY IMP : || and && operators do not always return boolean
// More practical example: (Default value if first operand is falsy)
// Consider the following object as an example.
const myObj = {  };

// Getting a property of which we have no idea whether it exists in an Object.

const val1 = myObj.property1 ? myObj.property1 : 10;
// We can use short circuiting the OR operator to shorten this code.
const val2 = myObj.property1 || 10;

// While evaluating expressions between ORs if it finds a truthy value, it short circuits and returns that value itself.

// Practical example:
const calcSq = function (val){
    return val**2;                      // val^2 
}
calcSq && calcSq(34);

// IMP:
// For variables short circuiting use ||
const age = myAge || 26;
// if myAge exists, it will be assigned to age, else age = 26

// For function call short circuiting use &&
calcSq && calcSq(34);
// if calcSq() exists, then the second expression calcSq(34) will be executed.

