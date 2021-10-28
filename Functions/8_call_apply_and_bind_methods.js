//////////////////////////////////////////////////////////////
// CALL, APPLY AND BIND METHODS //////////////////////////////
//////////////////////////////////////////////////////////////

// Call, Apply and Bind Methods:
// Remember the this keyword ? We use it to access object properties inside the object? 
// Consider this airline example:
const lufthansa = {
   airline : 'Lufthansa',
   iata : 'LH',
   bookings : [],
  
   book ( flightNum , name ) {
      console.log(`${name}
         ${this.iata}${flightNum}   // ‘this’ points to the "lufthansa" object
      `);
      this.bookings.push( { flight: `${this.iata}${flightNum}` , name} );
   }
};

lufthansa.book( 342 , 'Rahul' );    // flight details pushed to bookings[]
lufthansa.book( 635 , 'Anish' );    // flight details pushed to bookings[]
   
// Suppose a new airline comes.
const eurowings = {
   airline : 'Eurowings',
   iata : 'EW',
   bookings : []  
   //  I AM NOT COPYING THE SAME book() method here because I want to reuse code.
};
   
// How do we achieve code reusability here for book() for eurowings object? 

// What if we copy the book() from lufthansa outside in a variable ?
const bookFn = lufthansa.book;
// Stored lufthansa's book() in a new global variable/function.

// Remember lufthansa.book() is a method. But now bookFn() is a regular function and not related to any object.
// Since lufthansa.book() uses 'this' keyword wich refers to an object, 
// We can't simply use the regular bookFn() outside an object's context.

// To make the book() a common function available to both airlines/objects.
// Solution: call(), apply() and bind() methods. 
// Functions (be it regular like bookFn) are still JS objects.
// These JS objects (the functions) have some 'methods' like call(), apply() and bind().
//////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////////
// 1. call():
const bookFn = lufthansa.book;
// calls the book() method BUT with eurowings object.
bookFn.call( eurowings , 23 , 'Rahul Patil' );
// In the code above, the 'this' keyword in book() will now point to the eurowings object.

// We didn't call the book() ourselves, instead we called the call() which will call the book() with the passed object.

// Also note that the first argument of call() is the "eurowings" object, 
// so that the this keyword in book() method can refer to that object. 
// After the first argument which is the "eurowings" object, 
// the rest of the arguments are exactly the same as the parameters of the book().

// Now, we can create any number of flights-carriers/objects. like AirIndia, Swiss Airlines etc. 
// Make sure the property names are exactly the same as those of lufthansa.
//////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////////
// 2. apply():
// Exactly the same as the call(), except that we pass the arguments in an array after the first parameter.
bookFn.apply ( lufthansa , [56 , 'Anish Sasi'] );
// arguments - 56 and 'anish sasi' are in an array.

// Better approach is to put params into an array and then we can re-use it.
const args = [ 56 , 'Rahul Patil' ];
// Now we can use this arguments array with both apply() as well as bind()
bookFn.apply(eurowings , args) ;
bookFn.call(eurowings , ...args) ;  // using the same array using call()
// Always prefer the above format, so that in future if we need to change any of the two apply() or call(),
// we to do a very little change in our code.

// We can also create an "anonymous" object while using apply() or call()
bookFn.call({ someProprty:itsVal }, 45);
//////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////////
// 3. bind():
// Just like the apply() and call(), the bind method also allows us to manipulate the this keyword.

// Using call()
const args = [ 56 , 'Rahul Patil' ];
bookFn.call(eurowings , ...args) ;

// Using bind()
const bookEW = book.bind(eurowings);
bookEW ( 56 , 'Rahul Patil' ) ;

// This is how we simply copy a method from an object and 'bind' it to another object (eurowings in our case).
// We can do this for all the airlines/objects in our example.
const bookEW = book.bind(lufthansa);
const bookSW = book.bind(swiss);

// Let’s modify the book method for one object. (lets say-  to accept only name)
const bookNewEW = book.bind(eurowings, 45);

// Now if I call bookNewEW, I just need to pass the name. 
// Because I have preset 45 as the first argument USING BIND()
bookNewEW('Rahul');
// this is same as book.call(eurowings, 45, 'Rahul');

// Useful if we want to use default parameter values in the same method for different objects.
//////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////////
// Using bind() with Event Listeners:
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
   this.planes++;
   console.log(this.planes);
}

// Now attach buyPlane() to a button click action
document.querSelector('.buy').addEventListener('click', lufthansa.buyPlane());
// This prints NAN. Because the 'this' keyword in buyPlane() is now the button element which is pressed. 

// In an eventhandler function, the 'this' keyword always points to the html element on which the handler is attached to.

// So in the above case, 'this' refers to the button element, and not the lufthansa object.

// Solution: bind(), as it returns a function. (not call() because call simply calls the function. 
// We just need function value as event handler function()
document.querSelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa));
// now the 'this keyword in buyPlane() will point to the 'lufthansa' object.

document.querSelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(swiss));
// now the 'this keyword in buyPlane() will point to 'swiss' object.
//////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////////
// Another example. 
// A big use case for the bind()
const addTax = (rate , val) => rate + rate*val;
console.log(addTax(0.1 , 200));

const VAT = addTax.bind( null , 0.23 ) ;
// we set the rate as 0.23(second parameter above) and the object passed is null. 
// In addTax() there is no ‘this’ keyword, hence we simply passed null.

VAT(3299); // 3299 + 3299*0.23

// Using bind() gives us a new function.
// There might be cases where you need a specific function instead of default params. 
// Like the above case, one function for calculating VAT, one for GST, etc.


// The above scenario is similar to using fn returning fn and can be re-written as:
const addTax = (rate) => {
   return function (val) {
       return val+ val*rate;
   }
};
const GST = addTax (18);               // A fn for GST
const EducationCess = addTax (0.05);   // A fn for edu cess.

GST(3499);                             // 66481
EducationCess(3499);                   // 3673.95

