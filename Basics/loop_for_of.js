//////////////////////////////////////////////////////////////
// FOR OF LOOP //////////////////////////////////////////////
//////////////////////////////////////////////////////////////

for (const item of menu){
   console.log(item);
}

// When we want indexes too.
for( const item of menu.entries() ){
   console.log(item);               // [ index  , array item]
   console.log(`Item number ${item[0]+1} is ${item[1]}`);
}

// And we can destructure it.
for (const  [index , item ] of menu.entries()]{
   console.log(`${index+1} : ${item}`);
}

