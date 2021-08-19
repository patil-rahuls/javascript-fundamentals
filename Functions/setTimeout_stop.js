//////////////////////////////////////////////////////////////
// TIMER FUNCTIONS - Stop setTimeout() Execution /////////////
//////////////////////////////////////////////////////////////

// Cancel the execution of Timer. (I know this is a very bad example.)
var stop = false;
const myTimerFn = setTimeout(
   () => { console.log("Handler fn.") },
   3000 
);

stop = true;

if(stop)
   clearTimeout(myTimerFn);

