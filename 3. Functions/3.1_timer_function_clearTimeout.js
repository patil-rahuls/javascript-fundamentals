//////////////////////////////////////////////////////////////
// TIMER FUNCTIONS - Stop setTimeout() Execution /////////////
//////////////////////////////////////////////////////////////

// Stop Timeout - clearTimeout()
// Cancels the execution of Timer.
const myTimerFn = setTimeout(
   () => { console.log("Handler fn.") },
   3000
);
if(somecondition){
   clearTimeout(myTimerFn);
}
