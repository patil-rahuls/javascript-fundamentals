//////////////////////////////////////////////////////////////
// SHORT CIRCUITING && and || ////////////////////////////////
//////////////////////////////////////////////////////////////

// TIP: || and && operators do not always return boolean

//  Example #1
// Default value if first operand is falsy.
const myObj = {  };

// Getting a property of which we have no idea whether it exists in "myObj".
const val1 = myObj.property1 ? myObj.property1 : 10;

// Better Solution: We can use short circuiting the OR operator to shorten this code.
const val2 = myObj.property1 || 10;

//  Example #2
const calcSq = function (val){
    return val**2;                      // val^2 
}
calcSq && calcSq(34);

// TIP:
// For variables short circuiting use ||
const age = myAge || 26;
// if myAge exists, age = myAge, else age = 26

// For function call short circuiting use &&
calcSq && calcSq(34);
// if calcSq() exists, then the second expression calcSq(34) will be executed.
