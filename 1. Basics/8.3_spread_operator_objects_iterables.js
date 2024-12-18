//////////////////////////////////////////////////////////////
// SPREAD OPERATOR [ES6] - OBJECTS ///////////////////////////
//////////////////////////////////////////////////////////////

// RHS
// "..." is seen on the RHS of the assignment expression "="
// The Spread Operator unpacks elements of iterable objects such as Arrays, Sets, Maps and Objects into a list.

// Spread Operator can "ONLY" be used in following 2 cases:
        //    1. Expanding an Iterable.
        //    2. As a function argument.

// There can be more than one spread element in an expression.

// Example #1 (Spread Operator on Objects)
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

// Copy Object
const newRestaurant = { ...restaurant };

// Expanding an Iterable.
const newRestaurantWithMoreInfo = {
       ...restaurant ,
       foundedIn : 1992,
       founder : "Rahul",
};

// Updating data copied from restaurant object into new "copyRestaurant" object
const copyRestaurant = {...restaurant};
copyRestaurant.name = "Rocking Cafe";


// TIP:
// Spread Operators work on all sorts of ITERABLES like ARRAYS, MAPS, SETS, STRINGS, OBJECTS.
// string is also an iterable in Javascript.
const str = "rahul";
const letters = [...str , ' ' , 'P.'];          // Expanding string
console.log(letters);                           // ['r', 'a', 'h', 'u', 'l',  ' ', 'P.']
console.log(...letters);                        // r a h u l  P.
console.log(letters.join(''));                  // rahul P.
