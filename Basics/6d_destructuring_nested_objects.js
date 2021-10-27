//////////////////////////////////////////////////////////////
// DESTRUCTURING NESTED OBJECTS //////////////////////////////
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
    },

    orderDelivery : function ({starterIndex=1 , mainIndex , time , address}){          
       // starterIndex=1  is default param value
       return `Your order ${this.starters[starterIndex]}
          and ${this.categories[mainIndex]} will be delivered to
          ${address} by ${time}`;
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
console.log( a , b );               // 8 , 23
// We destructured weekends timings to variables a and b. 
// Use correct property names ('weekends' , 'open', 'close' in above example) to avoid errors.

// Calling an object method whcih takes a destructured object as parameter. "orderDelivery()"
restaurant.orderDelivery({
   starterIndex:2 ,
   mainIndex:1 ,
   time:"18:09" ,
   address: "3 MadhIsland",
});                                 // This is a method call - orderDelivery()

// The Object passed to "orderDelivery()" above is destructured in the method definition.
// orderDelivery : function ({starterIndex=1 , mainIndex , time , address}) {...}
