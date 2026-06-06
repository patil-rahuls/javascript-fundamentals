## Data Structures > ARRAY

> Array to new Array

### `Array.prototype.filter()` - Array data transformation method

A big advantage of using these functions over traditional loops is that we can chain these functions together.

> ***`filter()` method filters out elements from an array that do not satisfy a given condition.***

Method signature is similar to the `forEach()` method.


```javascript
const txn = [122, 24, 355, -55, 780, -999];

const positives = txn.filter(function(amount, index, arr){
  amount > 0;
});

console.log(positives);
// [122, 24, 355, 780]
```

Observe that filter’s Callback function need to return a Boolean and NOT a value.

If that condition is true for the current item then that item is returned to the new array.

---
