## Data Structures > ARRAY > Filter

> Array to new Array

### `Array.prototype.filter()` - Array data transformation method

_A big advantage of using these functions over traditional loops is that we can chain these functions together._

> **_`filter()` method filters out elements from an array that do not satisfy a given condition._**

_Method signature is similar to the `forEach()` method._

```javascript
const txn = [122, 24, 355, -55, 780, -999];

const positives = txn.filter(function (amount, index, arr) {
  amount > 0;
});

console.log(positives);
// [122, 24, 355, 780]
```

_Observe that filter’s Callback function need to return a boolean and NOT a value._

_If that condition returns `true` for the current item then that item is returned to the new array._

&nbsp;
---

---

<!-- PAGINATION_START -->

**Parent:** [Data Structures](../../2.%20Data%20Structures/) → [Arrays](../Arrays/)
  
**Previous:** ← [Data Structures > Arrays > Array Loop for Each](07-array-loop-forEach.md)  

**Next:** → [Data Structures > Arrays > Array Map](09-array-array-map.md)

<!-- PAGINATION_END -->
