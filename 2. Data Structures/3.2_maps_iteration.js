//////////////////////////////////////////////////////////////
// DATA STRUCTURES - MAPS - ITERATIONS ///////////////////////
//////////////////////////////////////////////////////////////

// Maps are high performance key - value paired data structure.
// In Objects keys can only be strings (without quotes), but in Maps, keys can be any type.
// More here : https://dmitripavlutin.com/maps-vs-plain-objects-javascript/

// Let's take this map as an example. See the format of Map in initialization below. [ [ ... ] ]
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

// Maps are Iterable
for (const [key, value] of question) {    //  Object.entries() not required for Map
   if (typeof key === 'number'){
      console.log(`Option : ${key} : ${value}`);
   }
}

// Convert Map to Array - spread operator
const questionArray = [...question];


// To Iterate, use the following methods.
console.log([...question.entries()]);
console.log([...question.keys()]);
console.log([...question.values()]);


// Convert an Object to Map - Object.entries()
const weekendMeetings = {
   sat:{ start : 1200 , end : 1300} ,
   sun:{ start : 1100 , end : 1300} ,
};

console.log(new Map(Object.entries(weekendMeetings)));
// [
//    ["sat", {start : 1200 , end : 1300}],
//    ["sun" ,{start : 1100 , end : 1300}]
// ]
