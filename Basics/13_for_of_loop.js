//////////////////////////////////////////////////////////////
// FOR OF LOOP [ES6] /////////////////////////////////////////
//////////////////////////////////////////////////////////////

// To iterate over an Iterable.
// for..of returns a list of "values" of the numeric properties of the object being iterated
// This is a more standardised way of iterating over an iterable in javascript.

for (const item of menu){
   console.log(item);
}

// When we want indexes/Properties too.
for( const item of Object.entries(menu) ){
   console.log(item);               // [ index  , array item]
   console.log(`Item number ${item[0]+1} is ${item[1]}`);
}

// And we can destructure it.
for (const  [index , item ] of Object.entries(menu)){
   console.log(`${index+1} : ${item}`);
}
