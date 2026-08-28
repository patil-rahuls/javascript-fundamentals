## Data Structures > Array > Check Expression > _every()_

Checks if all elements satisfy a condition.

### Array.prototype.**every()** - _checks for an expression_

Returns **true** ONLY if ***every*** the elements of the array satisfy the condition. _Hence the name 'every'_.

_Method signature is similar to the **forEach()** method._

```javascript
const txn = [1900, -99000, 10000, -178000, 78000];

const check = txn.every( amt => amt > 0);

if (check) {
  alert(`All txns are positive.`);
} else {
  alert(`Not all txns are positive.`);
}

```

A better approach would be to write a callback function separately wherever necessary, so that, it can be reused.

```javascript
const deposit = mov => mov > 0;

```

Now we can reuse the function as a callback to different array functions.

```javascript
// Check if all transactions are positive
txn.some(deposits);

// Filter positive transactions.
txn.filter(deposits);

```
---
&nbsp;
<!-- PAGINATION_START -->

📁 [Data Structures](../../2.%20Data%20Structures/) → [Arrays](../Arrays/)
  
◀️ [Data Structures > Arrays > Array Elements Some](10-array-elements-some.md)  

▶️ [Data Structures > Arrays > Array Element Includes](12-array-element-includes.md)

<!-- PAGINATION_END -->
&nbsp;
