//////////////////////////////////////////////////////////////
// SPREAD OPERATOR [ES6] - FUNCTION ARGUMENTS ////////////////
//////////////////////////////////////////////////////////////

// RHS
// "..." is seen on the RHS of the assignment expression "="
// The Spread Operator unpacks elements of iterable objects such as Arrays, Sets, Maps and Objects into a list.

// Spread Operator can "ONLY" be used in following 2 cases:
        //    1. Expanding an Iterable.
        //    2. As a function argument.

// There can be more than one spread element in an expression.

//  Example #2 (As function call argument)
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

    orderPasta:function(ing1, ing2, ing3){
        return `Here is your Pasta with ${ing1} , ${ing2} and ${ing3}`;
    }
};

// We will call restaurant.orderPasta() using spread operator.
const ingredients = ["Jalepeno",  "Corn", "Paneer"];
restaurant.orderPasta(...ingredients);
