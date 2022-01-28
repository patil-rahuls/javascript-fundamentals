//////////////////////////////////////////////////////////////
// DATA STRUCTURES - ARRAY - METHODS - CHECK ELEMENT EXISTS //
//////////////////////////////////////////////////////////////

// some():
// Returns a Boolean value.
// Same signature as that of forEach().
const salaries = [39000,99000,100000,178000,78000,89900];
salaries.includes(99000); 				// checks for equality.

const higherSalariesExists = movements.some( mov => mov > 100000 );

// Fundamental difference between includes() and some() :
// Includes() checks equality whereas some() checks for an expression.


