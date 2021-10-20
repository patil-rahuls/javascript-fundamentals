//////////////////////////////////////////////////////////////
// SPREAD OPERATOR - FUNCTION ARGUMENTS //////////////////////
//////////////////////////////////////////////////////////////

// (three dots "..." on RHS OF assignment operator "=")
// Returns comma separated values of an Iterable
// Spread operator can "only" be used in following 2 cases:
        //    1. expanding an Iterable
        //    2. as a function argument.

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

  orderPasta:function(ing1, ing2, ing3){
    return `Here is your Pasta with ${ing1} , ${ing2} and ${ing3}`;
  }
};

// We will call orderPasta() using spread operator.
// Let's get the data for this function from a prompt.
const ingredients = [
   prompt("Let's make pasta. Ingredient 1 ?") , 
   prompt("Ingredient 2? ") ,
   prompt("Ingredient 3?")
];                                          // yes we can do this.
// console.log(ingredients);

restaurant.orderPasta(...ingredients);

