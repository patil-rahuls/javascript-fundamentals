## Data Structures > Object > Comparison

> 🎯 Because objects are reference types, standard equality operators (`==` or `===`) will only return `true` if two variables point to the exact same memory location. Comparing the actual *contents* of two distinct objects requires a different approach.

---
&nbsp;

Consider these objects as an example:

```javascript
const myObj = {
  firstName: "Rahul",
  lastName: "Patil",
  age: 2049 - 2021,
};

const yourObj = {
  firstName: "test",
  lastName: "Test",
  age: 2049 - 2021,
};
```

### The Quick Way (with Caveats)

A handy, built-in way to compare two objects by their content is to stringify them:

```javascript
JSON.stringify(a) === JSON.stringify(b);
// true (if contents and order are identical)
```

> ⚠️ **Important Caveats:**
> * This only works for simple, JSON-safe objects (no methods, `undefined`, or DOM nodes inside).
> * **The ORDER of the properties is strictly evaluated.** The following object comparison will return `false` because the keys were inserted in a different order:

```javascript
const x = { a: 1, b: 2 };
const y = { b: 2, a: 1 };

console.log(JSON.stringify(x) === JSON.stringify(y));
// false
```

---
&nbsp;

### *(Optional Read)*

> **Interview Question:** *Create a function to compare any number of objects. The properties in the objects can be in any order.*

```javascript
const x = { name: "Rahul", age: 29 };
const y = { age: 29, name: "Rahul" };

function areEqual(...objArr) {
  // Create a shallow copy of objArr, so that we don't mutate the passed arguments.
  const ipArr = [...objArr];

  // Get the first object from the array to act as our baseline for comparison.
  const firstObj = ipArr.shift();
  // Now ipArr is left with the remaining objects to compare against the first.

  // 1. Check if all objects have the exact same number of properties
  const lengthComparisionResult = ipArr.reduce((acc, obj) => {
    const currObjLen = Object.keys(obj).length;
    if (currObjLen === Number(acc)) {
      return currObjLen; // Return actual length of keys if sizes match
    } else {
      return false;      // Return boolean false for size mismatch
    }
  }, Object.keys(firstObj).length);

  // Guard Clause: Check for errors early and exit if lengths don't match.
  if (!lengthComparisionResult) {
    return false;
  }

  // 2. Now that we know they have the same length, check if they have identical properties and values.
  return ipArr.every((obj) => {
    // Compare each object in ipArr with firstObj.
    let keysComparisionResult = true;
    
    for (const [prop, val] of Object.entries(obj)) {
      if (firstObj?.[prop] !== val) {
        keysComparisionResult = false;
        break; // Exit the loop early if a mismatch is found
      }
    }
    
    return keysComparisionResult;
  });
}

console.log(areEqual(x, y)); 
// true
```

---
&nbsp;

<!-- PAGINATION_START -->

📁 [Data Structures](../../2.%20Data%20Structures/) → [Objects](../Objects/)
  
◀️ [Data Structures > Objects > Object Clones](12-object-clones.md)  

▶️ [Data Structures > Sets](../Sets/)

<!-- PAGINATION_END -->
&nbsp;
