//////////////////////////////////////////////////////////////
// DATA STRUCTURES - MAPS - METHODS //////////////////////////
//////////////////////////////////////////////////////////////

// Maps are high performance key - value paired data structure.
// In Objects keys can only be strings (without quotes), but in Maps, keys can be any type.
// More here : https://dmitripavlutin.com/maps-vs-plain-objects-javascript/

const myMap = new Map();

// 1. set()
//  Adds a pair to the Map and returns updated map.
myMap.set('name' , 'Rahul');
myMap.set(1 , 'Mumbai');
myMap.set(2 , 'India');
myMap.set(true , 'I am free now.');
myMap.set(false , 'I am busy.');

console.log(myMap);     
// Map(3) {
//    "name" => "Rahul", 
//    1 => "Mumbai", 
//    2 => "India", 
//    true => 'I am free now.', 
//    false => 'I am busy.',
// }

myMap = myMap.set('freeTime' , '1100');    // Uncaught TypeError: Assignment to constant variable.

const newMap = myMap.set('freeTime' , 1100);
console.log(myMap);
// Map(3) {
//    "name" => "Rahul", 
//    1 => "Mumbai", 
//    2 => "India", 
//    true => 'I am free now.', 
//    false => 'I am busy.', 
//    'freeTime' => 1100,
// }

// Methods allow us to chain them
myMap.set('myUsernames',['rahulp','rahul.p','p.rahul_']).set('age' , 28).set('likes',['tech', 'piano', 'films']);


// 2. get()
// Gets data from a Map
myMap.get(true);        // undefined. key true not in "myMap"
myMap.get('age');       // 28
   
// Some fun here.
const currTime = 1100;
console.log(myMap.get(currTime === myMap.get('freeTime')));
// "I am free now"


// 3. has()
// Checks if a key exists in a Map
myMap.has('hobbies');   // false
   

// 4. delete()
// Deletes an item from a Map
myMap.delete(2);
myMap.delete(1);


// 5. size() - This is not a method. no parens ( ) 
// returns size of Map
myMap.size; // no parentheses () after size.


// 6. clear()
// Truncates Map
myMap.clear();


// 7. keys()
myMap.keys();


// 8. values()
myMap.values();


// 9. entries()
myMap.entries();


