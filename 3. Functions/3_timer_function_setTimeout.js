//////////////////////////////////////////////////////////////
// TIMER FUNCTIONS - setTimeout() ////////////////////////////
//////////////////////////////////////////////////////////////

// SYNTAX : setTimeout( cb, timeout, args to cb);
// cb - callback function

setTimeout(() => console.log(`started after 3 secs`) , 3000);
console.log(`Waiting...`);
// 'Waiting...'
// 'started after 3 secs'

// setTimeout() registers the function passed as an argument
// to be executed after given milliseconds.
// Then the 'Waiting...' is printed and whatever code follows,
// is executed. Meanwhile in the background, the registered
// function waits for 3000 milliseconds and then it also executes
// irrespective of where our control is.

// This mechanism is called asynchronous javascript.

// setTimeout() with parameters and arguments
// SYNTAX : setTimeout( cb, timeout, args to cb);
setTimeout(
   (val1, val2) => console.log(
       `Values passed here are
        ${val1} and ${val2}`
   )
, 3000 , 'orange' , 'mango');
// The arguments 'orange' and 'mango' are passed to the
// function defined inside seTimeout.
console.log(`Waiting...`);
// 'Waiting...'
// 'Values passed here are
//  orange and mango'
