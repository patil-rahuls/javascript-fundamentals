//////////////////////////////////////////////////////////////
// TIMER FUNCTIONS - Stop setInterval() Execution ////////////
//////////////////////////////////////////////////////////////

// Stop Interval - clearInterval()

// Example (Countdown Timer):
let max = 5;
const donex = setInterval( () => {
   
   if(max>0) {
      max--; 
      console.log(max);
   } // We still need to clear the timer because even after max > 0, it will still keep running forever.
   
} , 1000);

if (max === 0 )
   clearInterval(donex);


