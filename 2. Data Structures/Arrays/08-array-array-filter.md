## Data Structures > Array > Return new Array > **`filter()`**

> 🎯 The **`filter()`** method creates a **new array** containing only the elements that pass a specific condition (i.e., the callback function evaluates to a truthy value).
>
> *A major advantage of using array data transformation methods like `filter()` over traditional loops is that they return arrays, allowing us to **chain** multiple methods together.*

---
&nbsp;

## Using **`filter()`**

The method signature is similar to `forEach()`—the callback receives `(currentItem, index, entireArray)`.

> ⚠️ **Crucial Rule:** The callback function *must* return a **boolean** (or a truthy/falsy condition). 
> *   If `true` ➡️ the current item is kept in the new array.
> *   If `false` ➡️ the current item is filtered out.

### 1. Implicit Return _(Concise Arrow Function)_
When omitting the curly braces `{ }`, the arrow function returns the evaluation automatically.

```javascript
const txn = [122, 24, 355, -55, 780, -999];

const positives = txn.filter((amount) => amount > 0);

console.log(positives);
// [122, 24, 355, 780]
```

### 2. Explicit Return _(Block Body)_
If you use curly braces `{ }` for your callback function, you **must** explicitly use the `return` keyword. *(Note: Omitting `return` here will return `undefined`, which is falsy, resulting in an empty array!)*

```javascript
const txn = [122, 24, 355, -55, 780, -999];

const positivesBlock = txn.filter((amount, index, arr) => {
  // Explicit return is required when using { }
  return amount > 0; 
});

console.log(positivesBlock);
// [122, 24, 355, 780]
```
---
&nbsp;
<!-- PAGINATION_START -->

📁 [Data Structures](../../2.%20Data%20Structures/) → [Arrays](../Arrays/)
  
◀️ [Data Structures > Arrays > Array Loop for Each](07-array-loop-forEach.md)  

▶️ [Data Structures > Arrays > Array Map](09-array-array-map.md)

<!-- PAGINATION_END -->
&nbsp;
