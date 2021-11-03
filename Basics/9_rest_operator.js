//////////////////////////////////////////////////////////////
// REST OPERATOR [ES6] ///////////////////////////////////////
//////////////////////////////////////////////////////////////

// (three dots "..." on LHS OF assignment operator "=")
// The Rest Operator packs elements of a LIST into an iterable objects such as Arrays, Sets, Maps and Objects.
// Rest Operator can "ONLY" be used in following 2 cases:
        //    1. Packing an Iterable.
        //    2. As function parameter.

// There can only be ONE Rest element in an expression.
// The Rest Operator has to be at the end of any destructuring assignment.

// 1. Packing an Iterable
const arr = [1,2,3,4,5,6,7];
const [a,b,c,d, ...rest_values ] = arr;
// ‘rest_values’ will be an array of the rest of the elements of arr. Hence the name "REST" operator(I believe).

console.log(a,b,c,d,rest_values);           // 1,2,3,4,[5,6,7]
console.log(a,b,c,d,...rest_values);        // 1,2,3,4,5,6,7

const [dish1 , dish2 , , ...restDishes] = [...restaurant.starters , ...restaurant.categories];

// "restDishes" gets the 'rest' of the menu items
// IMP: The rest operator has to be at the end of any destructuring assignment.
// (The example shown above), else how will Javascript know until when it has to take the elements?
// Also there can only be one rest element in any destructuring assignment.

const [dish1 , dish2 , , ...restDishes, someOTherDish] = [...restaurant.allItems];
// Error : "Rest element must be last element."

// Same applies for Objects:
const {weekdays , ...restDays} = restaurant.workingHours;
