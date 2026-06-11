## `call()`, `apply()` and `bind()`

Used to reuse an object's method with different objects.

> **_`call()` and `apply()` call a function._**

> **_`bind()` creates a new function._**

> ```javascript
> const mainAirline = {
>   airlineCode: "AA",
>
>   checkIn(passengerName, seatNumber) {
>     console.log(
>       `[${this.airlineCode}] - Boarding pass issued for ${passengerName}. Seat: ${seatNumber}.`,
>     );
>     // Here, 'this' points to the calling object.
>   },
> };
>
> mainAirline.checkIn("Rahul P", "A01");
> ```
>
> _In the above code, the `this` in the method `checkIn` will point to the `mainAirline` object._

&nbsp;

_Now, suppose a new partner airline is formed and we need to bring in the functionality `checkIn` into it._

_We borrow it from the existing `mainAirline` object using `call`, `apply` and `bind` methods._

> ```javascript
> const partnerAirline = {
>   airlineCode: "BB",
>
>   // checkIn() ...
>   // I AM NOT COPYING THE
>   // SAME checkIn() method here
>   // because I want to reuse it.
> };
>
> // What if we copy the checkIn() from
> // mainAirline outside in a variable ?
> const checkInFn = mainAirline.checkIn;
> ```
>
> _In the example above, remember `mainAirline.checkIn()` is a method. But now, after copying, `checkInFn()` is a regular function and not related to any object._
>
> _Since `mainAirline.checkIn()` uses `this` keyword wich refers to an object, we can't simply use the `checkInFn()` without an object._
>
> _To make the `checkInFn()` a common function available to all airlines/objects we can use - `call()`, `apply()` and `bind()` methods._
>
> Functions are still JS objects. They have some internally _inherited methods_ like `call()`, `apply()` and `bind()`.

### `call()`

> ```javascript
> const partnerAirline = {
>   airlineCode: "BB",
> };
>
> const checkInFn = mainAirline.checkIn;
>
> // calls the checkIn() method in
> // 'mainAirline' BUT with
> // 'partnerAirline' object.
> checkInFn.call(partnerAirline, "Hitesh T", "B22");
> ```
>
> _In the code above, the `this` keyword in `checkIn()` will now point to the new `partnerAirline` object._
>
> _We didn't call the `checkIn()` ourselves, instead we called the `call()` method which calls the `checkIn()` with the passed object._
>
> _Also note that the first argument of `call()` is the `partnerAirline` object, so that the `this` keyword in `checkIn()` method can refer to that object._
>
> _After the first argument which is the `partnerAirline` object, the rest of the arguments are exactly in the same order as the parameters of the `checkIn()` method._

_Now, we can create any number of partner airlines/carriers/objects. Just make sure the property names are exactly the same as those of `mainAirline` object._

---
&nbsp;

### `apply()`

Exactly the same as the `call()`, except that we pass the arguments in an array after the first parameter.

```javascript
checkInFn.apply(partnerAirline, ["Aajesh V", "H02"]);
// arguments - 'Aajesh V', 'H02' passed in an array.
```

Better approach would be to put params into an array and then we can re-use it.

```javascript
const passenger = ["Raj S", "D23"];

// Now we can use this array with
// both apply() and call()

checkInFn.apply(partnerAirline, passenger);
checkInFn.call(partnerAirline, ...passenger);
```

Always prefer the above format, so that in future if we need to change any of the two `apply()` or `call()`, we need to do a very little change in our code.

> We can also create an `anonymous object` while using `apply()` or `call()`:
>
> ```javascript
> checkInFn.call(
>   {
>     airlineCode: "FG",
>   },
>   "Rucha S",
>   "F23",
> );
> ```
---
&nbsp;

### `bind()`

Creates a new function by binding an object to the method.

```javascript
const partnerCheckIn = checkInFn.bind(partnerAirline);
// OR
const partnerCheckIn = mainAirline.checkIn.bind(partnerAirline);
```

_`partnerCheckIn` can be called without a reciever object._

```javascript
partnerCheckIn("Vijay N", "B12");
```

_This is how we simply copy a method from an object and \_bind_ it to another object (`partnerAirline` in our case).\_

Let’s modify the `partnerCheckIn` method for one object. (lets say- to accept only Seat Number)

```javascript
const partnerCheckInPM = checkInFn.bind(partnerAirline, "Mr. PM");
```

_Now if I call `partnerCheckInPM`, I just need to pass the \_Seat Number_, because I have preset Name `"Mr. PM"` as the first argument using `bind()`.\_

```javascript
partnerCheckInPM("A02");
// this is same as -
// checkInFn.call(partnerAirline, 'Mr. PM', 'A02');
```

**_`bind()` can be useful if we want to use default parameter values in the same method for different objects._**

&nbsp;

> Example: Using `bind()` with Event Listeners:
>
> ```javascript
> const mainAirline = {
>   airlineCode: "AA",
>   book() {
>     console.log(`Booking made for ${airlineCode}`);
>   },
> };
>
> // Now attach 'book()' to a button click action
> document.querSelector(".book").addEventListener("click", mainAirline.book());
> ```
>
> _In the above example, when a click event occurs on the element it prints `NAN`. Because the `this` keyword in `book()` is now the button _(html)_ element which is pressed._
>
> _In an eventhandler function, the `this` keyword always points to the html element on which the handler is attached._
>
> _So in the above case, `this` refers to the button element, and not the `mainAirline` object._

> Solution: `bind()` - as it returns a function.
>
> _Here, we are not using `call()` & `apply()` because they both simply \_call_ the function.\_
>
> _We just need to pass a function value as an event handler function()_
>
> ```javascript
> document
>   .querSelector(".book")
>   .addEventListener("click", mainAirline.book.bind(mainAirline));
> ```
>
> _Now the `this` keyword in `book()` will point to the `mainAirline` object._

&nbsp;

> Example: Creating new functions using `bind()`

This is a big use case for the `bind()`

> ```javascript
> const addTax = (rate, val) => rate + rate * val;
>
> const VAT = addTax.bind(null, 0.23);
> ```
>
> _We set the `rate` (default param) as `0.23` and the object passed is `null`. Since, in the `addTax()` there is no `this` keyword, we can simply pass `null` and it will work._

> ```javascript
> VAT(3299);
> // 3299 + 3299*0.23
> ```
>
> **_IMP: Using `bind()` gives us a new function._**
>
> _There might be cases where you need a specific function instead of default params._
>
> _Like from the above case, we can create different functions for calculating \_VAT_, _GST_ etc.\_

&nbsp;

_(Optional Read)_

_The above scenario is similar to using fn returning fn and can be re-written as:_

```javascript
const addTax = (rate) => {
  return function (val) {
    return val + val * rate;
  };
};

// A function for GST
const GST = addTax(18);

// A function for EducationCess
const EducationCess = addTax(0.05);

// Usage:
let cost = 3349;

GST(cost);
// 66481

EducationCess(cost);
// 3673.95
```

---

---

<!-- PAGINATION_START -->

**Parent:** [3. Functions](..)  
**Previous:** [Higher Order Functions](06-higher-order-fn.md)  
**Next:** [Immediately Invoked Function Expressions - `IIFE`](08-IIFE.md)

<!-- PAGINATION_END -->
