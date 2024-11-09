//////////////////////////////////////////////////////////////
// DATA STRUCTURES - MAPS ////////////////////////////////////
//////////////////////////////////////////////////////////////

// Maps are high performance key - value paired data structure.
// In Objects keys can only be strings (without quotes), but in Maps, keys can be any type.
// More here : https://dmitripavlutin.com/maps-vs-plain-objects-javascript/

// Syntax :  new Map([ [k,v], [k,v], [k,v] , ...]);
const options = [['yes', 1] , ['no', 2] , ['may be', 3]];
const myMap = new Map( options );

// Example #1
const question = new Map ([
   ['question' , 'What is the best programming lang in the world?'] ,
   [1, 'C'] ,
   [2, 'C++'] ,
   [3, 'Java'] ,
   [4, 'Javascript'] ,
   ['correct' , 2] ,
   [true , 'Correct answer'] ,
   [false , 'Try Again'],
]);

console.log(question);
// Map(8) {
//    'question' , 'What is the best programming lang in the world?',
//    1, 'C',
//    2, 'C++',
//    3, 'Java',
//    4, 'Javascript',
//    'correct' , 2,
//    true , 'Correct answer',
//    false , 'Try Again',
// }

// When to use Maps instead of Objects?
   // 1. Map preserves the key type. That's the map's main benefit.
   // Observe this object with properties as number type.
   const myObj = {
      1: 'one',
      2: 'two'
   };
   // Now we log and check the datatype of the properties of this Object.
   for(const property in myObj){
      console.log(typeof property);
   }
   // Outputs - 'string'. The properties(i.e. 1, 2) were converted to strings.
   // Implicit conversion of keys is tricky because you lose the consistency of the types.

   // But if you use a number as a key inside a map, it will remain a number:
   const numbersMap = new Map();
   numbersMap.set(1, 'one');
   numbersMap.set(2, 'two');

   [...numbersMap.keys()];             // => [1, 2]
   typeof [...numbersMap.keys()][0];   // => number

   // 2. Using Objects as Keys.
   // When you need to store some object-related data, without attaching this data on the object itself.
   const foo = { name: 'foo' };
   const bar = { name: 'bar' };

   const kindOfMap = [
     [foo, 'Foo related data'],
     [bar, 'Bar related data'],
   ];