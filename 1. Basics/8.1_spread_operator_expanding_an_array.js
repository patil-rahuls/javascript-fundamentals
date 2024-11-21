//////////////////////////////////////////////////////////////
// SPREAD OPERATOR [ES6] - EXPANDING AN ARRAY ////////////////
//////////////////////////////////////////////////////////////

// RHS
// "..." is seen on the RHS of the assignment expression "="
// The Spread Operator unpacks elements of iterable objects such as Arrays, Sets, Maps and Objects into a list.

// Spread Operator can "ONLY" be used in following 2 cases:
        //    1. Expanding an Iterable.
        //    2. As a function argument.

// There can be more than one spread element in an expression.

//  Example #1 (Expanding an Iterable)
const restaurant = {
    name: 'Rahul’s Cafe',
    location: 'Madh-Island, Mumbai, India',
    starters: ['Crispy Corn Chaat', 'Hara Bhara Kebab', 'All Paneer Starters', 'Corn Kabab'],
    categories: ['North Indian', 'Chinese', 'South Indian', 'Italian'],
 
    order: function(starter_index, cat_index){
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

    // orderDelivery - takes an object(Destructured) as a parameter.
    orderDelivery: function ({ starterIndex=1 , mainIndex , time , address }){
        return `Your order ${this.starters[starterIndex]}
           and ${this.categories[mainIndex]} will be delivered to
           ${address} by ${time} Hours`;
    },
};

// Use the spread operator to expand restaurant.categories and save to a new variable.
const newCategories = [ ...restaurant.categories , 'Jain'];
console.log(newCategories);
// ['North Indian', 'Chinese', 'South Indian', 'Italian' , 'Jain']


// TIP#1:
// Copy array
const copyCategories =  [...restaurant.categories];       // creates a shallow copy.
// A shallow copy in JavaScript creates a new object that points to the same memory
// location as the original object.
// This means that if you make a change to the original object, it will also affect the copied object.

// TIP#2:
// Join 2 Arrays or more:
const allItems = [...restaurant.categories, ...restaurant.starters];
