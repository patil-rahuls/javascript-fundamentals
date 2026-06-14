## Data Structures > ARRAY

> Check if all elements satisfy a condition.

### `Array.prototype.every()`

> **_Checks for an expression at each iteration._**
>
> **_Returns `true` ONLY if ALL the elements of the array satisfy the condition. Hence the name 'every'._**

_Method signature is similar to the `forEach()` method._

```javascript
const txn = [1900, -99000, 10000, -178000, 78000];

const check = txn.every((amt) => amt > 0);

if (check) {
  alert(`All txns are positive.`);
} else {
  alert(`Not all txns are positive.`);
}

// A better approach:
// Write a callback function separately wherever necessary, so that, it can be reused.
const deposit = (mov) => mov > 0;

// Now we can reuse the function as a callback to different array functions.

// Check if all transactions are positive
txn.some(deposits);

// Filter positive transactions.
txn.filter(deposits);
```
&nbsp;
---

---

<!-- PAGINATION_START -->

**Parent:** [Data Structures](../../2.%20Data%20Structures/) → [Arrays](../Arrays/)
  
**Previous:** ← [Data Structures > Arrays > Array Elements Some](10-array-elements-some.md)  

**Next:** → [Data Structures > Arrays > Array Element Includes](12-array-element-includes.md)

<!-- PAGINATION_END -->
