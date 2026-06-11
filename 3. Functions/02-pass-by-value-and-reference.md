## Pass by Value and Pass by Reference

> **_`objects` are passed by `reference`_**

> **_`primitives` are passed by `value`._**

_Please see the topic "Primitives vs Object References" under "How Javascript Works" section._

> Example: Pass by values and pass by reference
>
> ```javascript
> let flight = "STD__223";
>
> let me = {
>   name: "Rahul",
>   passport: "3435435435435",
> };
>
> const checkIn = function (flightNum, passenger) {
>   flightNum = "GOAIR223";
>   passenger.name = "Mr." + passenger.name;
>   if (passenger.passport === "3435435435435") alert("Checked In");
>   else alert("Invalid Passport");
> };
>
> checkIn(flight, me);
>
> console.log(flight);
> // 'STD__223'
>
> console.log(me);
> // Mr. Rahul (Mutated)
> ```
>
> _In the above example, the primitive `flight` remains same as `STD__223`. Because, primitives are passed by value. i.e. a new copy of that value gets created inside function._
>
> _However, `me` object gets changed, because objects are passed by reference._
>
> _Object reference:_
>
> ```javascript
> const newObj = me;
> ```
>
> _We just copied the object reference, and not the actual object. i.e. they both point to the same memory location in the heap._

**_Summary:_**

1. **_Passing a primitive to a function is the same as creating a copy of it inside that function._**

2. **_In the case of Object, we pass the reference.
   Whatever changes we do with the object in the function, it reflects in the original object._**

&nbsp;

> Example

```javascript
const newPassport = (person) => {
  person.passport = Math.trunc(Math.rando() * 1000000000);
  // Changing person object's property
};

newPassport(me);
// object 'me' gets changed.

checkIn(flight, me);
// "Invalid Passport"
```

_Actually, in javascript, there is no pass by reference. Only passing by values._

_But in the case of objects, it looks like pass by reference. When we pass an object to a function, we are actually passing its reference, however, that reference is still a value in memory in Call Stack._

> **_We do pass references, but not pass 'by' references. That's the distinction._**

---

---

<!-- PAGINATION_START -->

**Parent:** [3. Functions](../3.%20Functions/)  

**Previous:** ← [Default function parameters [ES6]](01-default-params.md)  

**Next:** → [Timer Functions - setTimeout()](03.1-timer-functions-setTimeout.md)

<!-- PAGINATION_END -->
