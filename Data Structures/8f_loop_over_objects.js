//////////////////////////////////////////////////////////////
// LOOPING OVER OBJECTS //////////////////////////////////////
//////////////////////////////////////////////////////////////

// Object.keys(), Object.values() and Object.entries()
const performance = {
   rahul: { startedAt : 72 , high : 99} ,
   hitesh:{ startedAt : 51 , high : 98} ,
   aajesh:{ startedAt : 83 , high : 100},
};

// 1. GET Object PROPERTIES / KEYS
const perfromers = Object.keys(performance) ; 
console.log(perfromers);           
// ['rahul' , 'hitesh' , 'aajesh']

// Obv we can loop over the properties 
for (const perfromer of Object.keys(performance))
   console.log(perfromer);
// 'rahul'
// 'hitesh'
// 'aajesh'

// 2. GET Object VALUES
const values = Object.values(performance);
// returns the value of "openingHours", be it array or object or just a value.
console.log(values);
// { startedAt : 72 , high : 99} ,
// { startedAt : 51 , high : 98} ,
// { startedAt : 83 , high : 100},


// 3. GET Object ENTRIES [property , value] (Returns Array)
const entries = Object.entries(performance);
// array(1) [ "rahul" ,  { startedAt : 72 , high : 99} ]
// array(2) [ "hitesh" , { startedAt : 51 , high : 98} ]
// array(3) [ "aajesh" , { startedAt : 83 , high : 100}]

// Loop over Object.entries (Destructuring used, remember the object properties should match with each entry's)
for (const [key, {startedAt,high}] of Object.entries(openingHours)){
   console.log(`${key}'s score opened at ${startedAt} and closed at ${high}`);
}

