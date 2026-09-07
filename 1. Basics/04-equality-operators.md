## Equality Operators (**`==`** and **`===`**)

> 🎯
> *   **`==`** (Loose Equality): Applies **Type Coercion** before comparing.
> *   **`===`** (Strict Equality): Compares value *and* type. **No Type Coercion** occurs.
---

## **`==`** Abstract / Loose Equality
```javascript
console.log("18" == 18);
// true (string "18" is implicitly coerced to number 18)
```

## **`===`** Strict Equality
```javascript
console.log("18" === 18);
// false (different types: string vs number)
```
---


### Object References (Heap Memory)

> **Rule:** *Objects and Arrays are references in the HEAP. Comparing them compares their **memory references**, not their actual contents.*

#### Arrays and Objects
Even if the content is identical, the references are different.

```javascript
var a = [1, 2, 3];
var b = [1, 2, 3];

a == b;  // false
a === b; // false (types are the same, but memory references differ)

var c = { x: 1, y: 2 };
var d = { x: 1, y: 2 };

c == d;  // false
c === d; // false
```

#### Strings (Primitives vs. Objects)
```javascript
// ✅ Primitive strings with the same resulting values are equal
var e = "text";
var f = "te" + "xt";

e == f;  // true
e === f; // true

// ❌ String Object vs Primitive String
"abc" == new String("abc");  // true  (values are the same after coercion)
"abc" === new String("abc"); // false ('new String()' returns an Object type)

// ❌ String Object vs String Object
new String("rahul") == new String("rahul");  // false (different references)
new String("rahul") === new String("rahul"); // false
```

#### Comparing Object Contents (Workaround)
A handy way to strictly compare the contents of two objects *(assuming the same order of properties)*:
```javascript
JSON.stringify(a) === JSON.stringify(b); 
// true
```

---

> ⚠️ **Important Note:** A `switch` statement performs a strict **`===`** based comparison when matching the expression against a `case`.

*Read More: [StackOverflow - Which equals operator (== vs ===) should be used?](https://stackoverflow.com/questions/359494/which-equals-operator-vs-should-be-used-in-javascript-comparisons)*

---
&nbsp;
<!-- PAGINATION_START -->

📁 [1. Basics](../1.%20Basics/)  

◀️ [Function Declaration & Expression - Differences](03.2-function-declaration-&-expression-diff.md)  

▶️ [Falsy Values in JS](05-falsy-values.md)

<!-- PAGINATION_END -->
&nbsp;
