## Data Structures > Array > Return new Array > _filter()_

### Array.prototype.**filter()**

_A big advantage of using these array data transformation methods over traditional loops is that we can chain these functions together._

It filters out elements from an array that do not satisfy a given condition.

_Method signature is similar to the **forEach()** method._

```javascript
const txn = [122, 24, 355, -55, 780, -999];

const positives = txn.filter(
  (amount, index, arr) => {
    amount > 0;
  }
);

console.log(positives);
// [122, 24, 355, 780]

```

_Observe that filter’s Callback function need to return a boolean and NOT a value._

_If that condition returns **true** for the current item then that item is returned to the new array._

---
&nbsp;
<!-- PAGINATION_START -->

📁 [Data Structures](../../2.%20Data%20Structures/) → [Arrays](../Arrays/)
  
◀️ [Data Structures > Arrays > Array Loop for Each](07-array-loop-forEach.md)  

▶️ [Data Structures > Arrays > Array Map](09-array-array-map.md)

<!-- PAGINATION_END -->
&nbsp;
