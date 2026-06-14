## Data Structures > ARRAY > Slice

> Array to new Array

### `Array.prototype.slice()`

> **array.slice ( start_index , end_index )**
> 
> _element at `start_index` is included in result._
> 
> _element at `end_index` is not included in result._
> 
> _parameter `end_index` is optional._
> 
> ```javascript
> const arr = [11, 22, 33, 44, 55, 66];
> 
> arr.slice(2);
> // [33, 44, 55, 66] (element at index 2 is included)
> 
> arr.slice(2, 4);
> // [33, 44] (element at index 4 is not included)
> 
> // Start from end of an array
> arr.slice(-2);
> // [ 55, 66 ] (Start from 2nd last element.)
> 
> arr.slice(1, -2);
> // [ 22, 33, 44 ]
> 
> arr.slice(-2, -1);
> // [ 55 ]
> ```

> Example 1: Deep Clone
>
> _`slice()` can be used to copy arrays by not passing any arguments._
> 
> ```javascript
> const arr1 = arr.slice(); // DEEP COPY
> 
> // But why copy arrays this way?
> // Observe this :
> const arr2 = [1, 2, 3];
> const brr = arr2;
> arr2[0] = 99; // Changed arr2
> console.log(brr);
> // brr also gets changed, because 
> // both have same references.
> 
> // Hence use slice method to get 
> // an 'independent' copy of the array.
> const crr = arr2.slice();
> // "Deep copy"
> 
> // Deep clone a flat array 
> // using spread operator.
> const arr3 = [...arr];
> // This will also create a deep 
> // clone if the array is flat.
> ```


&nbsp;
---

---

<!-- PAGINATION_START -->

**Parent:** [Data Structures](../../2.%20Data%20Structures/) → [Arrays](../Arrays/)
  
**Previous:** ← [Data Structures > Arrays > Mutate Arrays](02-mutate-arrays.md)  

**Next:** → [Data Structures > Arrays > Array Concat](04-array-array-concat.md)

<!-- PAGINATION_END -->
