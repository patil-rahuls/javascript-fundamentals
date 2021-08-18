//////////////////////////////////////////////////////////////
// REST ARGUMENTS ////////////////////////////////////////////
//////////////////////////////////////////////////////////////

// (three dots "..." on LHS OF assignment operator "=")
// This is similar to the spread operator. 
// The subtle difference is that we use the three dots "..."  on the LHS of the assignment operator "=".

const add = function(...varArgs){
   // varArgs will be an packed into an array
   let sum = 0;
   for (const i=0; i< varArgs.length ; i++)
       sum += varArgs[i];
   console.log(sum);
   return sum;
}
const arr = [1,2,3,4,5];
const result = add(...arr);
// The function defined above takes comma separated n number of arguments and packs them into an array (varArgs).

// Advantage of REST ARGUMENTS: 
// The function can now accept both a single value as well as a spread-array as its input.
add (2,3,4);
add (...arr) ;

// Another example
const someObj = {
   expand : function(val1 , ...restValues){
       console.log(val1 , restValues);
   }
};

someObj.expand("Hi" , "Hello" , "There" , "Hey");
// "Hi" , ["Hello" , "There" , "Hey"]

