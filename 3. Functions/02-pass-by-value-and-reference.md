## Pass by Value and Pass by Reference

> ### objects are passed by reference

> ### primitives are passed by value.

> _Please see the topic "Primitives vs Object References" under "How Javascript Works" section._

> Example: Pass by values and pass by reference
```javascript
let flight = 'STD__223';

let me = {
  name: 'Rahul',
  passport: '3435435435435',
};

const checkIn = function(flightNum, passenger) {
  flightNum = 'GOAIR223';
  passenger.name = 'Mr.' + passenger.name;
  if(passenger.passport === '3435435435435')
    alert("Checked In");
  else
    alert("Invalid Passport");
};

checkIn(flight , me);

console.log(flight);
// 'STD__223'

console.log(me);
// Mr. Rahul (Mutated)
```

> In the above example, the primitive `flight` remains same as `STD__223`. Because, primitives are passed by value. i.e. a new
 copy of that value gets created inside function.
>
> However, `me` object gets changed, because objects are passed by reference.


> Object reference
>
> ```javascript
> const newObj = me;
> ```
> We are just copying the object reference, and not the actual object. i.e. they both point to the same memory location in the heap.


***Summary:***

1. ***Passing a primitive to a function is the same as creating a copy of it inside that function.***

2. ***In the case of Object, we pass the reference.
Whatever changes we do with the object in the function, it reflects in the original object.***


> Example
```javascript
const newPassport = (person) => {
  person.passport = Math.trunc(Math.rando()*1000000000);
  // Changing person object's property
}

newPassport(me);
// object 'me' gets changed.

checkIn(flight, me);
// "Invalid Passport"
```

> ***Actually, in javascript, there is no pass by reference. Only passing by values.***

> ***But in the case of objects, it looks like pass by reference. When we pass an object to a function, we are actually passing its reference, however, that reference is still a value in memory in Call Stack.***

> ***We do pass references, but not pass 'by' references. That's the distinction.***

---
