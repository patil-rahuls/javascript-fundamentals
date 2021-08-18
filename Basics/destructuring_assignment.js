//////////////////////////////////////////////////////////////
// DESTRUCTURING ASSIGNMENT  /////////////////////////////////
//////////////////////////////////////////////////////////////

// [ ] is at the LHS of = 

// Example 1
const arr = [2,3,4];
const a = arr[0];
const c = arr[2];

// Using Destructuring
const [x,y,z] = arr;
console.log(x,y,z);                        // 2 , 3 , 4

// Example 2
const restaurant = {
   name:'Rahul’s Cafe',
   location:'Madh-Island Mumbai India',
   starters:['Crispy Corn Chaat', 'Hara Bhara Kebab', 'All Paneer Starters', 'Corn Kabab'],
   categories:['North Indian', 'Chinese', 'South Indian', 'Italian'],
   
   order:function(starter_index, cat_index){
       return [this.starters[starter_index] , this.categories[cat_index]];                  
       // Returns 2 values
   }
};

const [starter , mainCourse ] = restaurant.order(2 , 0);
console.log(starter , mainCourse);
// 'All Paneer Starters' , 'North Indian'

// More examples using the same "restaurant" object
const [first_cat, second_cat] = restaurant.categories;

const [ , , third_cat] = restaurant.categories;

// IMP: Swap two values WITHOUT using a temporary variable
[first, second] = [second, first];

// Mutate variable values
const arr = [7 , 8];
let a = 111, b = 999;

[a  , b ] = arr;
console.log(a,b);                     // 7 , 8
