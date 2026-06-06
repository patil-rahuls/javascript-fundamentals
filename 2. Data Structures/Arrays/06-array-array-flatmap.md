## Data Structures > ARRAY

> Array to new Array

### `Array.prototype.flatmap()` [ES 2019]

> `map()` first and then `flat()` the result.
>
> Better performance
```javascript
// Old way:
const totalUsersWalletBalance = accounts
   .map(acc => acc.walletBalance)
   .flat();

// Using flatmap():
const totalUsersWalletBalance2 = accounts
  .flatMap(acc => acc.walletBalance)
  .reduce((acc, mov) =>  acc+mov , 0);

// Since flatMap() does the map() too, it needs to receive exactly the same arguments as you would pass to the map method.
```
***IMP: `flatMap()` goes only one level deep.
Hence if you need to go deeper, then you still need to use the `flat()` method separately with depth argument.***

---
