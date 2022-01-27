//////////////////////////////////////////////////////////////
// ARROW FUNCTION [ES6] //////////////////////////////////////
//////////////////////////////////////////////////////////////

birthYear => 2037-birthYear;
// birthYear is a parameter
// the expression "2037-birthYear" is evaluated and returned. 
// The return happens implicitly in case of single line arrow function without { }. 

// Lets assign this function to a variable, just like we did in the function expression earlier.
const calcAge = birthYear => 2037-birthYear;
const age2 = calcAge(1992);

// Explanation : 
// calcAge is the function name.
// birthYear is a function parameter. In case of multiple parameters we use parenthesis ()
// 2037 - birthYear is the expression which is evaluated and the result of which is returned.

// We need to explicitly return value from an arrow function when using function blocks { }
const someFunction = parameter => {
   const x = 5;
   return x*parameter;                // Explicitly return value
}
console.log(someFunction(4));

// For more than one parameters we enclose them in parentheses
const someFunction = ( x, y, parameter3) => {  // Accepts 3 parameters x , y and parameter3
   return x*y*parameter3;
}
console.log(someFunction(4,5,7));


