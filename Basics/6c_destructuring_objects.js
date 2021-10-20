//////////////////////////////////////////////////////////////
// DESTRUCTURING OBJECTS /////////////////////////////////////
//////////////////////////////////////////////////////////////

// Useful in destructuring the APIs data. 
// We need to specify the correct property name in the destructuring assignment
// Use { } for objects. [ ] for arrays.

// Consider the following object as an example.
const restaurant = {
    name:'Rahul’s Cafe',
    location:'Madh-Island Mumbai India',
    starters:['Crispy Corn Chaat', 'Hara Bhara Kebab', 'All Paneer Starters', 'Corn Kabab'],
    categories:['North Indian', 'Chinese', 'South Indian', 'Italian'],
    
    workingHours : {
        weekdays:{
            open:10, close:22,
        },
        weekends:{
            open:8, close:23,
        }  
    },

    order:function(starter_index, cat_index){
        return [this.starters[starter_index] , this.categories[cat_index]];                  
        // Returns 2 values
    }
};


// Destructuring the "restaurant" object and retrieving only required data.
const {name , workingHours , categories} = restaurant;
// IMP: you need to provide the correct properties of the object in LHS.

// For variable names to be different from property names. 
// (Useful with 3rd party data like API response.)
const { name:name, workingHours:timings, categories:offers } = restaurant;
console.log( name , timings , offers );
// 'Rahul’s Cafe',
// Object(2)  workingHours : {
//     weekdays:{
//         open:10, close:22,
//     },
//     weekends:{
//         open:8, close:23,
//     }  
// },
// Array(4) ['North Indian', 'Chinese', 'South Indian', 'Italian']


// Default data with destructuring objects. We might not know whether data will be present or not in an object just in case(like API responses)
const { menu : [] , starters : myNameForStarters = []  } = restaurant;
console.log(menu, myNameForStarters);
// Array(0) [],
// Array(4) ['Crispy Corn Chaat', 'Hara Bhara Kebab', 'All Paneer Starters', 'Corn Kabab']


// Mutating variables:
const myObj = {a:91 , b:2 , c:3 , d:4 , e:5};
let a = 111;
let b = 999;

{ a , b } = myObj;                  // Syntax Error

// Solution: Just enclose this in parentheses. (parens syntax)
({ a , b } = myObj); // values of a and b now mutated. 
console.log(a,b);                   // 91 , 2

