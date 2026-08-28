## Data Structures > Array > Chaining

### Array method chaining

The array data transformation methods like **map()**, **filter()**, **reduce()**, etc can be chained together.

_Method Chaining forms something called as a _pipeline_._

```javascript
const arr = [122, 24, 355, -55, 780, -999];

const multiplier = 1.1;

const transformedData = arr
  .filter((val) => val > 0)
  .map((val) => val * multiplier)
  .reduce((acc, val) => acc + val, 0);

console.log(transformedData);
// 1409.1000000000004

```

_But if any error occurs, it's hard to guess from where that error came in this pipeline._

_To monitor errors we can check arrays returned at each step in this pipeline._

_Remember, we have the third parameter in the callback function of each of these methods which holds the entire array._

```javascript
const transformedData2 = arr
  .filter((mov) => mov > 0)
  .map((mov, i, arr) => {
    
    // monitor the array.
    console.log(arr);

    return mov * multiplier;
  })
  .reduce((acc, val) => acc + val, 0);

console.log(transformedData2);
// (4) [122, 24, 355, 780]
// (4) [122, 24, 355, 780]
// (4) [122, 24, 355, 780]
// (4) [122, 24, 355, 780]
// 1409.1000000000004

```

_Remarks about chaining:_

- _Never overuse chaining. It can cause real performance issues if we have really huge arrays._

- _Be careful when chaining methods that mutate the underlying arrays (like **splice()** or **reverse()**) in large applications._

---
&nbsp;
<!-- PAGINATION_START -->

📁 [Data Structures](../../2.%20Data%20Structures/) → [Arrays](../Arrays/)
  
◀️ [Data Structures > Arrays > Array String Split Join](17-array-string-split-join.md)  

▶️ [Data Structures > Arrays > Which Array Method to Use](19-which-array-method-to-use.md)

<!-- PAGINATION_END -->
&nbsp;
