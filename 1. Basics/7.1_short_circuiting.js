//////////////////////////////////////////////////////////////
// SHORT CIRCUITING && and || ////////////////////////////////
//////////////////////////////////////////////////////////////

// TIP: || and && operators do not always return boolean

//  Example #1 (Default value if first operand is falsy)
const myObj = {  };
// getting a property of which we have no idea whether it exists in "myObj".
const val1 = myObj.property1 ? myObj.property1 : 10;

// Better Solution: We can use short circuiting the OR operator to shorten this code.
const val2 = myObj.property1 || 10;
// If first operand is falsy, we will have default value 10 assigned to val2.


//  Example #2 (Calling a function if it exists)
const calcSq = function (val){
    return val**2;                      // val^2
}
calcSq && calcSq(34);
// if calcSq() function exists, then the second expression calcSq(34) will be executed.


// TIP:-
// For variables, use ||
const age = myAge || 26;
// For function calls, use &&
calcSq && calcSq(34);
