//////////////////////////////////////////////////////////////
// REST OPERATOR [ES6] ///////////////////////////////////////
//////////////////////////////////////////////////////////////

// LHS
// "..." is seen on the LHS of the assignment expression "="
// The Rest Operator packs elements of a LIST into an iterable objects such as Arrays, Sets, Maps and Objects.

// Rest Operator can "ONLY" be used in following 2 cases:
        //    1. Packing an Iterable.
        //    2. As a function parameter.

// There can only be ONE Rest element in an expression.
// The Rest Operator has to be at the end of any destructuring assignment.

//  Example #1 (Packing an Iterable)
const arr = [1,2,3,4,5,6,7];
const [ a,b,c,d, ...restValues ] = arr;
// ‘restValues’ will be an array of the "rest of the elements" of arr.
// Hence the name "REST" operator(I believe).

console.log(a,b,c,d,restValues);           // 1,2,3,4,[5,6,7]
console.log(a,b,c,d,...restValues);        // 1,2,3,4,5,6,7

const [dishA, dishB, , ...restAllDishes] = [...restaurant.starters, ...restaurant.categories];
//          <REST OPERATOR>                             <SPREAD OPERATOR>
// "restDishes" above, gets the 'rest' of the menu items

//  Example #2
// IMP: The rest operator has to be at the end of any destructuring assignment.
// (Refer the example shown above), else how will Javascript know until when it has to take the elements?
// Also there can only be one rest element in any destructuring assignment.
const [dish1, dish2, , ...restDishes, someOtherDish] = [ ...restaurant.starters, ...restaurant.categories ];
// Error : "Rest element must be last element."

// Same applies for Objects:
const { weekdays, ...restDays } = restaurant.workingHours;
