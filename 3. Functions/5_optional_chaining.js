//////////////////////////////////////////////////////////////
// OPTIONAL CHAINING [ES 2020] ///////////////////////////////
//////////////////////////////////////////////////////////////

// It checks if a property or a method exists on an Object
// OR
// if any value exists on a index of an Array.

// Scenarios, when checking nested objects,
// We might come to a point where we have to check if a property/method exists, and if it exists,
// call/return its value. But then our code gets really messy and cluttered.
//
// Directly accessing a property which we don't know whether exists or not is a bad idea.
console.log(restaurant.workingHours.fri.open);
//  If obj "fri" doesn't exist, we get error: "cannot read property of type 'undefined'"

// So we add a check, it works, but it looks little cluttered.
if(restaurant.openingHours && restaurant.openingHours.fri)
   console.log(restaurant.openingHours.fri.open);

// With optional chaining we can reduce the code to this.
console.log(restaurant.openingHours.fri?.open);
// undefined (instead of the error) if evaluation before ? results falsy

// We can chain the checking of object properties like this.
console.log(restaurant.openingHours?.fri?.open);

// Example #1
const days = ['mon' , 'tue' , 'wed' , 'thu', 'fri' , 'sat' , 'sun'];
for (const [i , day] of days.entries()){
   const isOpen = restaurant.openingHours[day]?.open ?? 'closed';
   // nullish coalescing operator and optional chaining together.
   console.log(` on ${day} we are ${isOpen} `);
}

// Checking if a method exists:
console.log( restaurant.order?.(0,1) ?? "method does not exist." );
// Observe the function parameters. I just have inserted the "?." in between.

// Using optional chaining we not only add a check but also minimize our code.
console.log(restaurant.orderPaavBhaaji?.(0,1) ?? "method doesn’t exist");

// Also works on arrays:
// It checks if an array element exists, just like checking a method.
const users = [
   {name: 'rahul' , 'email' : 'rahul@patil.in'}
];

consle.log(  users[0]?.name ?? "users array empty..."  );
consle.log(  users[1]?.name ?? "user 1 not found..."  );

// rahul
// user 1 not found...
