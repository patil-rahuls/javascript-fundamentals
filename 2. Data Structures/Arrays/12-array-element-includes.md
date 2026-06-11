## Data Structures > ARRAY

> Check if element exists

### `Array.prototype.includes()`

We pass the element to the function.

> **_Returns `true` *(Boolean)* if the element is present in the array, returns `false` otherwise._**
>
> **_Checks for Equality using Strict Equality `===`._**

```javascript
const myArr = [55, "rahul", "hitesh", "aajesh"];

myArr.includes("rahul");
// true

myArr.includes("anish");
// false

// No Type Coercion occurs
myArr.includes("55");
// false
// Because string ‘55’ is passed.
```

---

---

<!-- PAGINATION_START -->

**Parent:** [Arrays](..)  
**Previous:** [Data Structures > Arrays > Array Elements Every](11-array-elements-every.md)  
**Next:** [Data Structures > Arrays > Array Element Find](13-array-element-find.md)

<!-- PAGINATION_END -->
