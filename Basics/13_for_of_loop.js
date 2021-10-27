//////////////////////////////////////////////////////////////
// FOR OF LOOP //////////////////////////////////////////////
//////////////////////////////////////////////////////////////

// To iterate over an Iterable.
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
