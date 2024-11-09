//////////////////////////////////////////////////////////////
// NESTED DESTRUCTURING ASSIGNMENT  //////////////////////////
//////////////////////////////////////////////////////////////

// Unpacks(and assigns) values from arrays, or properties from objects, into distinct variables.
// TIP: [ ] and { } is at the LHS of = 

// Nested Destructuring
const arr = [ 2,4,6, [1,3,5] ] ;
const [ i , , , j ]  = arr;
console.log(i, j);                 // 2 , [1,3,5] ;

const [  , x , ,  [ , , y]] = arr; 
console.log(x , y);                // 4 , 5 


