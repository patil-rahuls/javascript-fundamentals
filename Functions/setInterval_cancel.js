//////////////////////////////////////////////////////////////
// TIMER FUNCTIONS - cancel setInterval() execution //////////
//////////////////////////////////////////////////////////////

// Example (Countdown Timer):
let max = 5;
const donex = setInterval( () => {
   
   if(max>0) { 
      max--; 
      console.log(max);
   }
   
} , 1000);

if (max === 0 )
   clearInterval(donex);
// We still need to clear the timer because even after max > 0, it will still keep running forever.
