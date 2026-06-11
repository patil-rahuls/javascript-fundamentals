## Optional Chaining <sup>_ES 2020_</sup>

> **_It checks if a property or a method exists on an Object OR if any value exists on a index of an Array._**

When checking nested objects, we might come to a point where we have to check if a property/method exists, and if it exists, call/return its value.

But then our code gets really messy and cluttered.

Directly accessing a property which we don't know whether exists or not is a bad idea.

> ```javascript
> const user = {
>   name: "Rahul",
>   age: 25,
>   city: "Pune",
>
>   workingHours: {
>     weekdays: {
>       start: 10,
>       end: 19,
>     },
>     weekends: {
>       start: 12,
>       end: 16,
>     },
>   },
> };
>
> console.log(user.workingHours.monday.start);
> ```
>
> _In the above example, if `monday` doesn't exist, we get error:_
>
> _`cannot read property of type 'undefined'`_
>
> _So we add a check, it works, but it looks little cluttered._
>
> ```javascript
> if (user.workingHours && user.workingHours.monday) {
>   console.log(user.workingHours.monday.start);
> }
> ```

> Solution:
>
> _With optional chaining we can reduce the above code to this:_
>
> ```javascript
> console.log(user.workingHours.monday?.start);
> // undefined
> ```
>
> _This returns `undefined` instead of throwing an error._

We can also chain the checking of object properties like this.

```javascript
console.log(user.workingHours?.monday?.start);
```

&nbsp;

> Example 1

```javascript
const days = ["monday", "friday", "weekdays", "weekends"];

for (const day of days) {
  const startsAt = user.workingHours[day]?.start ?? false;
  // nullish coalescing operator and
  // optional chaining together.

  if (startsAt) {
    console.log(`On ${day} user starts at ${startsAt}!`);
  } else {
    console.log(`On ${day} user doesn't work.`);
  }
}
```

&nbsp;

> Example: Checking if a method exists:

```javascript
const result = user.showInfo?.(0, 1) ?? "No such method";

console.log(result);
// 'No such method'
```

&nbsp;

> Example: _Also works on array elements; it checks if an array element exists, just like checking a method._

```javascript
const users = [
  {
    name: "rahul",
    email: "rahul@info.in",
  },
];

console.log(users[0]?.name ?? "users array is empty!");
// rahul

console.log(users[1]?.name ?? "user 1 not found!");
// user 1 not found
```

&nbsp;

> Example: _Also works on arrays; Return an Array's item with an optional check on the array._

```javascript
const arr = [1, 2, 3];

// If array 'arr' exists, get its 0th item
const itm = arr?.[0];

console.log(itm);
//  1
```

---

---

<!-- PAGINATION_START -->

**Parent:** [3. Functions](../3.%20Functions/)  

**Previous:** ← [Timer Functions - clearInterval()](03.4-timer-functions-clearInterval.md)  

**Next:** → [Closures](05-closures.md)

<!-- PAGINATION_END -->
