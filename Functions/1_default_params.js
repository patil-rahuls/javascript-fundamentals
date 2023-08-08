//////////////////////////////////////////////////////////////
// FUNCTION DEFAULT PARAMETERS ///////////////////////////////
//////////////////////////////////////////////////////////////

const bookings  = [];
const createBooking = function(
   flightNum,
   numPassngrs = 1,              // parameter's default value
   fareTotal = 1999*numPassngrs  // We can have an expression as a default param value
   ){
      const booking = {
         flightNum,
         numPassngrs,
         fareTotal
      }
      bookings.push(booking);
};

createBooking('AB123', 4, 4000);
createBooking('AB123');
createBooking('AB123', undefined, 4000);

// setting default param value as 'undefined' is the same as not setting the value.
// This means that parameters(without a default value) in a function are set to 'undefined' initialy.
