//////////////////////////////////////////////////////////////
// SPREAD OPERATOR - OBJECTS AND ITERABLES ///////////////////
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
    
const newRestaurant = {...restaurant};
// Copies all properties of the "restaurant" object to "newRestaurant" object.

const newRestaurantWithMoreInfo = {
       ...restaurant ,
       foundedIn : 1992,
       Founder : "Rahul",
};
    
// Updating data copied from restaurant object into new "copyRestaurant" object
const copyRestaurant = {...restaurant};
copyRestaurant.name = "Rahul's Cafe";

// Spread operators work on all sorts of ITERABLES like ARRAYS, MAPS, SETS, STRINGS, OBJECTS. Spread operator on string.
// And it works the same way for all of 'em
const str = "rahul";
const letters = [...str , ' ' , 'P.'];
console.log(letters);                           // rahul P.

