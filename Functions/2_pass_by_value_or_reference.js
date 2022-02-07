//////////////////////////////////////////////////////////////
// PASS BY VALUES AND PASS BY REFERENCE //////////////////////
//////////////////////////////////////////////////////////////

// Objects are passed by reference***, primitives are passed by value.
// Please see the topic "PRIMITIVES VS OBJECT REFERENCES" in "How Javascript Works" section.

// Pass by values and pass by reference:
let flight = 'STD__223';            // a primitive
let meee = {                        // an Object
   name: 'Rahul',
   passport: '3435435435435',
};

const checkIn = function ( flightNum , passenger ) { 
   flightNum = 'GOAIR223';
   passenger.name = 'Mr.' + passenger.name;
   if(passenger.passport === '3435435435435')
       alert("Checked In");
   else
       alert("Invalid Passport");
};

checkIn( flight , meee );
console.log(flight);                // 'STD__223'
console.log(meee);                  // Mutated

// The primitive 'flight' remains same as 'STD__223'.
// Because, primitives are passed by value. i.e. a new copy of that value gets created inside function.
// However, 'meee' object gets changed, 
// Because objects are passed by reference***

// Object reference
const newObj = meee;
// We are just copying the object reference, and not the actual object.
// i.e. they both point to the same memory location in the heap.


//  Summary:
// 1. passing a primitive to a function is the same as creating a copy of it inside that function.
// 2. In the case of Object, we pass the reference.
//    Whatever changes we do with the copy, it reflects in the original object. 
//    WE NEED TO BE CAREFUL WITH THIS BEHAVIOUR.

// Example.
const newPassport = (person) => {
   person.passport = Math.trunc(Math.rando()*1000000000);
   // Changing person's property
}

newPassport(meee);                  // object 'meee' gets changed.
checkIn(flight, meee);              // "Invalid Passport"

// ***Actually, In javascript, there is no pass by reference.
// Only passing by values. But in the case of objects, it looks like pass by reference. 
// When we pass an object to a function, we are actually passing its reference, 
// However, that reference is still a value in memory.

// We do pass references, but not pass 'by' references in javascript. That's the distinction.


