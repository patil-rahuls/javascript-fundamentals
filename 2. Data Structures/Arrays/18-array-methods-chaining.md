## Data Structures > ARRAY

### Array method chaining

Method Chaining forms something called as "pipeline"

```javascript
const arr = [122, 24, 355, -55, 780, -999];

const multiplier = 1.1;

const transformedData = arr
  .filter(val => val > 0)
  .map(val => val*multiplier)
  .reduce((acc, val) => acc+val, 0);

console.log(transformedData);
// 1409.1000000000004
```

But if any error occurs, it's hard to guess from where that error came in this pipeline.

To monitor errors we can check arrays returned at each step
in this pipeline.

Remember we have the third parameter in the callback function of each of these methods which gives the entire array.

```javascript
const transformedData2 = arr
  .filter(mov => mov > 0)
  .map((mov, i, arr) => {
    console.log(arr);
    // Now we can monitor how the array.
    return mov*multiplier;
  })
  .reduce((acc, val) => acc+val, 0);

console.log(transformedData2);
// (4) [122, 24, 355, 780]
// (4) [122, 24, 355, 780]
// (4) [122, 24, 355, 780]
// (4) [122, 24, 355, 780]
// 1409.1000000000004
```

> Remarks about chaining:

- Never overuse chaining. It can cause real performance issues if we have really huge arrays.

- Be careful when chaining methods that mutate the underlying arrays (like `splice()` or `reverse()`) in large applications.

---
