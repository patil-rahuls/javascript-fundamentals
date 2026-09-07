## Falsy Values in JavaScript

> 🎯 The following literal values evaluate to **falsy** in JavaScript. Everything else (including empty arrays and objects) is inherently **truthy**.

| Value | Description |
| :--- | :--- |
| **`false`** | The boolean keyword itself |
| **`0`** and **`-0`** | The number zero |
| **`0n`** | The BigInt equivalent of zero |
| **`""`** or **`''`** | An empty string |
| **`null`** | The intentional absence of a value |
| **`undefined`** | An uninitialized variable |
| **`NaN`** | Not a Number |

### Boolean Evaluation

```javascript
// ❌ Falsy Values
console.log(Boolean(0));         // false
console.log(Boolean(""));        // false
console.log(Boolean(null));      // false
console.log(Boolean(NaN));       // false
console.log(Boolean(undefined)); // false

// ✅ Truthy Values (Empty structures are NOT falsy)
console.log(Boolean({}));        // true
console.log(Boolean([]));        // true
```

---

## Difference Between **`null`** and **`undefined`**

> 🎯
> *   **`undefined`** means a variable has been declared but has *not yet been assigned* a value (it is a distinct type).
> *   **`null`** is an assignment value representing the *intentional absence* of a value (it evaluates as an object).

### 1. Comparison
```javascript
console.log(null === undefined); // false (different types)
console.log(null == undefined);  // true  (same "empty value" conceptually via coercion)
console.log(null === null);      // true  (both type and value are exactly the same)
```

### 2. **`undefined`** _(Uninitialized)_
```javascript
var testVar;

console.log(testVar);        // undefined
console.log(typeof testVar); // "undefined"
```

### 3. **`null`** _(Intentional Absence)_
```javascript
var testVar = null;

console.log(testVar);        // null
console.log(typeof testVar); // "object"
```

#### 💡 Why is `null` an _object_?
*(Quote from Professional JS For Web Developers 📖)*

_"You may wonder why the `typeof` operator returns `'object'` for a value that is **`null`**. This was actually an error in the original JavaScript implementation that was then copied in ECMAScript. Today, it is rationalized that **`null`** is considered a 'placeholder for an object', even though, technically, it is a primitive value."_

---
&nbsp;
<!-- PAGINATION_START -->

📁 [1. Basics](../1.%20Basics/)  

◀️ [Equality Operators](04-equality-operators.md)  

▶️ [Short Circuiting **&&** and **||**](06.1-and-or-short-circuiting.md)

<!-- PAGINATION_END -->
&nbsp;
