## Data Structures > Array > Return new Array > _map()_

### Array.prototype.**map()**

_A big advantage of using these array data transformation methods over traditional loops is that we can chain these functions together._

**map()** method transforms data in each iteration without changing/mutating the orignal array.

_Method signature is similar to the **forEach()** method._

```javascript
const numbers = [2, 4, 3, 0, 10, 20, 30, 40];
const power = 3;

const newValues = numbers.map(val => val ** power);

// numbers = [2, 4, 3, 0, 10, 20, 30, 40]

// newValues = [8, 64, 27, 0, 1000, 8000, 27000, 64000]

```

Just like forEach(), map() also has 3 three parameters.
```javascript
const newArr = numbers.map((curr, key, arr) => {
  return **${key} : ${curr}**;
});

console.log(newArr);
/* [
  "0 : 2",
  "1 : 4",
  "2 : 3",
  "3 : 0",
  "4 : 10",
  "5 : 20",
  "6 : 30",
  "7 : 40"
]
*/

```
---
&nbsp;
<!-- PAGINATION_START -->

📁 [Data Structures](../../2.%20Data%20Structures/) → [Arrays](../Arrays/)
  
◀️ [Data Structures > Arrays > Array Filter](08-array-array-filter.md)  

▶️ [Data Structures > Arrays > Array Elements Some](10-array-elements-some.md)

<!-- PAGINATION_END -->
&nbsp;
