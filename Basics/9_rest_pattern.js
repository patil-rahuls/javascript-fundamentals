//////////////////////////////////////////////////////////////
// REST PATTERN //////////////////////////////////////////////
//////////////////////////////////////////////////////////////

// (three dots "..." on LHS OF assignment operator "=")
// This is similar to the spread operator. 
// The subtle difference is that we use the three dots "..."  on the LHS of the assignment operator "=".

// Packs comma separated values into an Iterable
// Rest operator can "only" be used in following 2 cases:
        //    1. packing an Iterable into one variable.
        //    2. as a function parameter.
        // There can only be ONE rest element in any destructuring assignment.
        
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
