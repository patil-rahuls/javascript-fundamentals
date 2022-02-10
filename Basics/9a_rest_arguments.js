//////////////////////////////////////////////////////////////
// REST ARGUMENTS [ES6] //////////////////////////////////////
//////////////////////////////////////////////////////////////

// "..." on LHS OF "="

// The Rest Operator packs elements of a LIST into an iterable objects such as Arrays, Sets, Maps and Objects.

// Rest Operator can "ONLY" be used in following 2 cases:
        //    1. Packing an Iterable.
        //    2. As function parameter.

// There can only be ONE Rest element in an expression.
// The Rest Operator has to be at the end of any destructuring assignment.

//  Example #1 (As function parameter)
const add = function(...varArgs){
   // varArgs will be an packed into an array (provided we pass an array to this fn)
   let sum = 0;
   for (const i=0; i< varArgs.length ; i++)
       sum += varArgs[i];
   console.log(sum);
   return sum;
}
const arr = [1,2,3,4,5];
const result = add(...arr);
// The function defined above takes comma separated n number of arguments and packs them into an array (varArgs).

// Advantage of Rest Operator: 
// The function above can now accept both a single value as well as a spread-array as its input.
add (2,3,4);
add (...arr);   //  This is spread operator. Remember Spread Operator is used as fn call argument.

//  Example #2
const someObj = {
   expand : function(val1 , ...restValues){
       console.log(val1 , restValues);
   }
};
someObj.expand("Hi" , "Hello" , "There" , "Hey");
// "Hi" , ["Hello" , "There" , "Hey"]


