## Falsy Values in JS

>Following literals are treated as Falsy in javascript
>
> - `0`
> - `''`
> - `undefined`
> - `null`
> - `NaN`

> `undefined` and `null` are two distinct types.

> `undefined` is a type itself while `null` is an object.
```javascript
console.log(Boolean(0));         // false

console.log(Boolean(''));        // false

console.log(Boolean(undefined)); // false

console.log(Boolean(null));      // false

console.log(Boolean(NaN));       // false


// Empty objects are not Falsy
console.log(Boolean({}));        // true

console.log(Boolean([]));        // true
```
---

&nbsp;
### Difference between `null` and `undefined`

`undefined` means a variable has been declared but has not yet been assigned a value.
```javascript
var testVar;

console.log(testVar);         // undefined

console.log(typeof testVar);  // undefined
```

`null` is an assignment value(object). It can be assigned to a variable as a representation of no value.
```javascript
var testVar = null;

console.log(testVar);         // null

console.log(typeof testVar);  // object
```

> `undefined` is a type itself while `null` is an object.

&nbsp;

> `undefined` and `null` are two distinct types.

```javascript
console.log(null === undefined)
// false-not the same type

console.log(null == undefined)
// true-but the "same value"

console.log(null === null)
// true-both type and value are the same
```

> Quote from the book **Professional JS For Web Developers (Wrox)**:
>
> _"You may wonder why the typeof operator returns 'object' for a value that is `null`. This was actually an error in the original JavaScript implementation that was then copied in ECMAScript. Today, it is rationalized that `null` is considered a 'placeholder for an object', even though, technically, it is a primitive value."_

> `undefined` represents a variable has not been assigned a value.

> `null` represents the null, empty, or non-existent reference for a variable.

---
