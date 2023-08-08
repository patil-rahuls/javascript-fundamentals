//////////////////////////////////////////////////////////////
// DATA STRUCTURES - MAPS ////////////////////////////////////
//////////////////////////////////////////////////////////////

// Maps are high performance key - value paired data structure.
// In Objects keys can only be strings (without quotes), but in Maps, keys can be any type.
// More here : https://dmitripavlutin.com/maps-vs-plain-objects-javascript/

// Syntax :  [ [k,v], [k,v], [k,v] , ...]
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
