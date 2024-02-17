//////////////////////////////////////////////////////////////
// DESTRUCTURING OBJECTS /////////////////////////////////////
//////////////////////////////////////////////////////////////

// Unpacks(and assigns) values from arrays, or properties from objects, into distinct variables.
// TIP: [ ] and { } is at the LHS of =

// Useful in destructuring the APIs data.
// We need to specify the correct property name in the destructuring assignment.
// Use { } for objects and [ ] for arrays.

//  Example #1
const restaurant = {
    name: 'Rahul’s Cafe',
    location: 'Madh-Island, Mumbai, India',
    starters: ['Crispy Corn Chaat', 'Hara Bhara Kebab', 'All Paneer Starters', 'Corn Kabab'],
    categories: ['North Indian', 'Chinese', 'South Indian', 'Italian'],
 
    order: function(starter_index, cat_index){
        // this method returns an array.
        return [ this.starters[starter_index] , this.categories[cat_index] ];
    },

    workingHours : {
        weekdays: {
            open: 10, close: 22,
        },
        weekends: {
            open: 8, close: 23,
        }
    },
};

// Destructuring the "restaurant" object and retrieving only required data.
const { name , workingHours , categories } = restaurant;
// IMP: we need to provide the correct properties of the object in LHS.

// For variable names to be different from property names. (Alias')
// (Useful with 3rd party data like API response.)
const { name: Name, workingHours: Timings, categories: Courses } = restaurant;
console.log(Name, Timings, Courses);
// 'Rahul’s Cafe',
// Object(2)  workingHours : {
//     weekdays:{
//         open: 10, close: 22,
//     },
//     weekends:{
//         open: 8, close: 23,
//     }
// },
// Array(4) ['North Indian', 'Chinese', 'South Indian', 'Italian']

// *Default Data with destructuring objects.
// We might not know whether data will be present or not in an object just in case(API responses)
const { menu: [] , starters: aliasForStarters = []  } = restaurant;
console.log(menu, aliasForStarters);
// Array(0) [],
// Array(4) ['Crispy Corn Chaat', 'Hara Bhara Kebab', 'All Paneer Starters', 'Corn Kabab']


//  Example #2
// Mutate variables values by Destructuring an Object.
const myObj = { a: 91 , b: 2 , c: 3 , d: 4 , e: 5 };
let a = 111;
let b = 999;

{ a , b } = myObj;                  // Syntax Error
// Solution: Just enclose this in parentheses.
({ a , b } = myObj); // values of a and b now mutated.
console.log(a,b);                   // 91 , 2
// It is called "parens syntax".
