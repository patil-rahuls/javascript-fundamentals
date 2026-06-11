## Higher Order Functions

Fundamental concept of JavaScript.

> **_A function that receives another function as an argument, or/and returns a function._**

The functions that are passed/returned are called **_First Class Functions/Citizens_**.

_For example, `addEventListener()` is a higher order function._

```javascript
function count() {
  let counter = 0;

  return function () {
    counter++;
  };
}
```

### More examples:

> Example 1: _Functions accepting callback functions:_
>
> ```javascript
> // Callback function 1
> const oneWord = function (str) {
>   return str.replace(/ /g, "").toLowerCase();
> };
>
> // Callback function 2
> const UpperFirstWord = function (str) {
>   const [first, ...restWords] = str.split(" ");
>   return [first.toUpperCase(), ...restWords].toString();
> };
>
> // Higher order function:
> const transform = function (str, fn) {
>   console.log(`Original string : ${str} `);
>   console.log(`Modified string : ${fn(str)} `);
>   console.log(`Modified by function : ${fn.name}`);
>   // A function is also an object and it
>   // has a ‘name’ as one of its internal
>   // properties.
> };
>
> // Calling `transform` using different
> // methods as parameters.
> transform("Rahul is greater", UpperFirstWord);
> transform("Rahul is greater", oneWord);
> ```
>
> _In the above example, Abstraction is achieved i.e._
>
> _hiding the details of implementation. This allows us to think more on an abstract level._

&nbsp;

> Example 2: _Functions returning functions_

```javascript
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet("Heyy");
// greeterHey will now be a function which
// is returned by greet();

// Let's observe the function call now
greeterHey("Rahul");
// "Heyy Rahul"

// How is the greeting 'heyy' coming in
// the function which is already returned.
// It's because of 'Closures'.

// The above function call can be also
// written in one line.
greet("Good Morning")("Mr. Rahul");

// And the function definition can also
// be written using the arrow function:
const greet = (greeting) => {
  return function (name) {
    console.log(` ${greeting} ${name}`);
  };
};

// OR simply

const greetArrow = (greeting) => (name) => console.log(`${greeting} ${name}`);

// See the cleanliness in our code.
// One arrow function returning
// another arrow function
```

&nbsp;

> Example 3: _Creating related functions by returning functions._

```javascript
const addTax = (rate) => {
  return function (val) {
    return val + val * rate;
  };
};

const gst = addTax(18);

const educationCess = addTax(0.05);

let cost = 3499;

gst(cost);
// 66481

educationCess(cost);
// 3673.95
```

---

---

<!-- PAGINATION_START -->

**Parent:** [3. Functions](..)  
**Previous:** [Closures](05-closures.md)  
**Next:** [`call()`, `apply()` and `bind()`](07-call-apply-bind.md)

<!-- PAGINATION_END -->
