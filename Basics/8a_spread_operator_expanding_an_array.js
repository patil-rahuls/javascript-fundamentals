//////////////////////////////////////////////////////////////
// SPREAD OPERATOR [ES6] - EXPANDING AN ARRAY ////////////////
//////////////////////////////////////////////////////////////

// (three dots "..." on RHS OF assignment operator "=")
// The Spread Operator unpacks elements of iterable objects such as Arrays, Sets, Maps and Objects into a list.
// Spread Operator can "ONLY" be used in following 2 cases:
        //    1. Expanding an Iterable.
        //    2. As a function call argument.

// There can be more than one spread element in an expression.

// 1. Expanding an Iterable.
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

// Use the spread operator to expand newCategories.
const newCategories = [ ...restaurant.categories , 'Non-Veg'];
console.log(newCategories);
// ['North Indian', 'Chinese', 'South Indian', 'Italian' , 'Non-Veg']


// TIP#1:
// Copy array
const copyCategories =  [...restaurant.categories];       // creates a shallow copy.

// TIP#2:
// Join 2 Arrays or more:
const allItems = [...restaurant.categories, ...restaurant.starters];


