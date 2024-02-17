//////////////////////////////////////////////////////////////
// DESTRUCTURING NESTED OBJECTS //////////////////////////////
//////////////////////////////////////////////////////////////

// Unpacks(and assigns) values from arrays, or properties from objects, into distinct variables.
// TIP: [ ] and { } is at the LHS of =

// Useful in destructuring the APIs data.
// We need to specify the correct property name in the destructuring assignment
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

    // orderDelivery - takes an object(Destructured) as a parameter.
    orderDelivery: function ({ starterIndex=1 , mainIndex , time , address }){
        return `Your order ${this.starters[starterIndex]}
           and ${this.categories[mainIndex]} will be delivered to
           ${address} by ${time} Hours`;
    },
};

// Destructuring weekend timings
const {
    workingHours:{
        weekends : {
            open: a,
            close: b,
        }
    }
} = restaurant;
console.log(a, b );               // 8 , 23
// We destructured weekends timings to variables a and b.
// IMP: Use correct property names ('weekends' , 'open', 'close' in above example) to avoid errors.

// Calling an object method which takes a destructured object as its parameter. "orderDelivery()"
const myOrderObj = {
    starterIndex:2 ,
    mainIndex:1 ,
    time:"18:09" ,
    address: "3 MadhIsland",
};
restaurant.orderDelivery(myOrderObj);

// The Object 'myOrderObj' passed to "orderDelivery()" above is destructured in the method definition.
// orderDelivery : function ({ starterIndex=1 , mainIndex , time , address }) {...}
