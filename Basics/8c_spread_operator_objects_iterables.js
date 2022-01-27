//////////////////////////////////////////////////////////////
// SPREAD OPERATOR [ES6] - OBJECTS ///////////////////////////
//////////////////////////////////////////////////////////////

// (three dots "..." on RHS OF assignment operator "=")
// The Spread Operator unpacks elements of iterable objects such as Arrays, Sets, Maps and Objects into a list.
// Spread Operator can "ONLY" be used in following 2 cases:
        //    1. Expanding an Iterable.
        //    2. As a function call argument.

// There can be more than one spread element in an expression.

// Spread Operator on Objects.
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

// TIP:
// Spread Operators work on all sorts of ITERABLES like ARRAYS, MAPS, SETS, STRINGS, OBJECTS.
const str = "rahul";
const letters = [...str , ' ' , 'P.'];
console.log(letters);                           // rahul P.


