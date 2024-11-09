//////////////////////////////////////////////////////////////
// FOR OF LOOP [ES6] /////////////////////////////////////////
//////////////////////////////////////////////////////////////

// To iterate over an Iterable.
// "for..of" iterates over a list of "values" of the numeric properties("keys/index") of the object being iterated.

//  Example #1:
for (const item of menu){
   console.log(item);
}

//  Example #2:
// When we want indexes/Properties too.
for( const item of Object.entries(menu) ){
   console.log(item);               // [ index  , array item]
   console.log(`Item number ${item[0]+1} is ${item[1]}`);
}

// And we can always destructure it.
for (const  [index , item ] of Object.entries(menu)){
   console.log(`${index+1} : ${item}`);
}
