## `call()`, `apply()` and `bind()`

> Used to reuse an object's method with different objects.

> `call()` and `apply()` call a function.

> `bind()` creates a new function.


```javascript
const mainAirline = {
  airlineCode: "AA",

  checkIn(passengerName, seatNumber) {
    console.log(`[${this.airlineCode}] - Boarding pass issued for ${passengerName}. Seat: ${seatNumber}.`);
    // Here, 'this' points to the calling object.
  }
};

mainAirline.checkIn('Rahul P', 'A01');
// In this method call, the 'this' in the method
// 'checkIn' will point to the 'mainAirline'
// object.
```

&nbsp;

Now, suppose a new partner-airline is formed and we need to bring in the functionality `checkIn` into it.

We borrow it from the existing `mainAirline` object using `call`, `apply` and `bind` methods.

```javascript
const partnerAirline = {
  airlineCode: "BB",

  // checkIn() ...
  // I AM NOT COPYING THE SAME checkIn()
  // method here because I want to reuse the code.
};

// What if we copy the checkIn() from
// mainAirline outside in a variable ?
const checkInFn = mainAirline.checkIn;

// Remember mainAirline.checkIn() is a method.
// But now, after copying, checkInFn() is a
// regular function and not related to any object.

// Since mainAirline.checkIn() uses 'this'
// keyword wich refers to an object, we can't simply use
// the checkInFn() without an object.

// To make the checkInFn() a common function
// available to all airlines/objects we can use -
// call(), apply() and bind() methods.
// Functions (be it regular like checkInFn) are
// still JS objects. These JS objects (the functions)
// have some 'methods' like call(), apply() and bind().
```

### `call()`

```javascript
const partnerAirline = {
  airlineCode: "BB",
};

const checkInFn = mainAirline.checkIn;

// calls the checkIn() method in 'mainAirline' BUT with
// 'partnerAirline' object.
checkInFn.call(partnerAirline, 'Hitesh T', 'B22' );

```

In the code above, the `this` keyword in `checkIn()` will now point to the new `partnerAirline` object.

We didn't call the `checkIn()` ourselves, instead we called the `call()` method which calls the `checkIn()` with the passed object.

Also note that the first argument of `call()` is the `partnerAirline` object, so that the `this` keyword in `checkIn()` method can refer to that object.

After the first argument which is the `partnerAirline` object, the rest of the arguments are exactly in the same order as the parameters of the `checkIn()` method.

Now, we can create any number of partner airlines/carriers/objects.

IMP - Make sure the property names are exactly the same as those of `mainAirline` object.

&nbsp;

### `apply()`

Exactly the same as the `call()`, except that we pass the arguments in an array after the first parameter.

```javascript
checkInFn.apply(partnerAirline, ['Aajesh V', 'H02']);
// arguments - 'Aajesh V', 'H02' passed in an array.
```

Better approach would be to put params into an array and then we can re-use it.

```javascript
const passenger = ['Raj S', 'D23'];

// Now we can use this arguments array with both
// apply() and call()

checkInFn.apply(partnerAirline, passenger);
checkInFn.call(partnerAirline, ...passenger);
```

Always prefer the above format, so that in future if we need to change any of the two `apply()` or `call()`, we need to do a very little change in our code.

We can also create an `anonymous object` while using `apply()` or `call()`:

```javascript
checkInFn.call({
  airlineCode: "FG",
}, 'Rucha S', 'F23');
```

&nbsp;

### `bind()`

```javascript
const partnerCheckIn = checkInFn.bind(partnerAirline);
// OR
const partnerCheckIn = mainAirline.checkIn.bind(partnerAirline);

// 'partnerCheckIn' can be called without a reciever object.
partnerCheckIn('Vijay N', 'B12');

// This is how we simply copy a method from an object and
// 'bind' it to another object (partnerAirline in our case).

// Let’s modify the partnerCheckIn method for one object.
// (lets say-  to accept only Seat Number)
const partnerCheckInPM = checkInFn.bind(partnerAirline, 'Mr. PM');

// Now if I call 'partnerCheckInPM', I just need to pass the
// Seat Number, because I have preset Name "Mr. PM" as the
// first  argument using bind().

partnerCheckInPM('A02');
// this is same as
// checkInFn.call(partnerAirline, 'Mr. PM', 'A02');

// Useful if we want to use default parameter values in
// the same method for different objects.
```


> Example:  Using `bind()` with Event Listeners:

```javascript
const mainAirline = {
  airlineCode: "AA",
  book() {
    console.log(`Booking made for ${airlineCode}`);
  }
}

// Now attach 'book()' to a button click action
document
  .querSelector('.book')
  .addEventListener('click', mainAirline.book());

// This prints NAN. Because the 'this' keyword in book()
// is now the button element which is pressed.

// In an eventhandler function, the 'this' keyword always
// points to the html element on which the handler is
// attached.

// So in the above case, 'this' refers to the button element,
// and not the 'mainAirline' object.


// Solution: bind(), as it returns a function.

// Here, we are not using `call()` & `apply()` because
// they both simply CALL the function.
// We just need to pass a function value as an event
// handler function()

document
  .querSelector('.book')
  .addEventListener('click', mainAirline.book.bind(mainAirline));
   // now the 'this keyword in book() will point to
   // the 'mainAirline' object.
```

&nbsp;

> Example: Creating new functions using `bind()`

This is a big use case for the `bind()`

```javascript
const addTax = (rate , val) => rate + rate*val;

const VAT = addTax.bind(null, 0.23);

// we set the rate(default param) as 0.23 (second parameter
// above) and the object passed is null.
// Since, in the addTax() there is no ‘this’ keyword,
// we can simply pass null and it will work.

VAT(3299);
// 3299 + 3299*0.23

// IMP: Using bind() gives us a new function.
// There might be cases where you need a specific function
// instead of default params.
// Like from the above case, we can create different
// functions for calculating VAT, GST etc.


// Optional Read:
// The above scenario is similar to using fn returning fn and
// can be re-written as:
const addTax = (rate) => {
  return function (val) {
    return val+ val*rate;
  }
};

// A function for calculating GST
const GST = addTax (18);

// A function for calculating EducationCess
const EducationCess = addTax (0.05);

// Usage:
let cost = 3349;

GST(cost);
// 66481

EducationCess(cost);
// 3673.95
```

---
