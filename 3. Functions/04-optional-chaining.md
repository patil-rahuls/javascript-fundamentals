## Functions > Optional Chaining (ES 2020)

> 🎯 Optional chaining (`?.`) allows you to safely access deeply nested properties, methods, or array elements without throwing an error. If the reference is `null` or `undefined`, the expression short-circuits and returns `undefined`.

---
&nbsp;

### 1. The Problem: Accessing Nested Properties

When checking nested objects, we often need to verify if a property or method exists before retrieving its value. Directly accessing a deeply nested property that doesn't exist throws an error _(e.g., `Cannot read property of undefined`)_. 

*Without optional chaining, adding checks for every nested level makes the code messy and cluttered.*

```javascript
const user = {
  name: "Rahul",
  age: 25,
  city: "Pune",
  workingHours: {
    weekdays: {
      start: 10,
      end: 19,
    },
    weekends: {
      start: 12,
      end: 16,
    },
  },
};

// If 'monday' doesn't exist, this throws an error.
// console.log(user.workingHours.monday.start); 

// The old workaround: functional, but cluttered
if (user.workingHours && user.workingHours.monday) {
  console.log(user.workingHours.monday.start);
}
```

### 2. The Solution: `?.` Operator

With optional chaining, you can safely access nested properties in a single line. It returns `undefined` instead of throwing an error. You can also chain multiple optional checks together.

```javascript
// Safely accessing a nested property
console.log(user.workingHours.monday?.start);
// undefined

// Chaining multiple optional checks
console.log(user.workingHours?.monday?.start);
// undefined
```

### 3. Combining with Nullish Coalescing (`??`)

Optional chaining works perfectly alongside the nullish coalescing operator (`??`) to provide a default fallback value when a property doesn't exist.

```javascript
const days = ["monday", "friday", "weekdays", "weekends"];

for (const day of days) {
  // Using both operators together
  const startsAt = user.workingHours[day]?.start ?? false;

  if (startsAt) {
    console.log(`On ${day} user starts at${startsAt}!`);
  } else {
    console.log(`On ${day} user doesn't work.`);
  }
}
```

### 4. Checking if a Method Exists

You can use optional chaining to safely invoke a method only if it actually exists on the object.

```javascript
const result = user.showInfo?.(0, 1) ?? "No such method";

console.log(result);
// "No such method"
```

### 5. Checking Array Elements

Optional chaining applies to array elements as well. It safely checks if an array element exists at a specific index, or if the array itself exists before trying to retrieve an item.

```javascript
const users = [
  {
    name: "rahul",
    email: "rahul@info.in",
  },
];

// Checking if a property exists on a specific array index
console.log(users[0]?.name ?? "users array is empty!");
// "rahul"

console.log(users[1]?.name ?? "user 1 not found!");
// "user 1 not found!"


const arr = [1, 2, 3];

// Checking if the array 'arr' itself exists before accessing its 0th item
const itm = arr?.[0];

console.log(itm);
// 1
```

---
&nbsp;
<!-- PAGINATION_START -->

📁 [3. Functions](../3.%20Functions/)  

◀️ [Timer Functions - clearInterval()](03.4-timer-functions-clearInterval.md)  

▶️ [Closures](05-closures.md)

<!-- PAGINATION_END -->
&nbsp;
