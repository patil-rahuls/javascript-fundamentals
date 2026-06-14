## Data Structures > Maps

Maps are high performance key - value paired data structure.

In Objects keys can only be strings (without quotes), but in Maps, keys can be any type.

&nbsp;

### Objects as Keys in Maps

> _Retrieving data from map when key is an array/object._
> 
> ```javascript
> myMap.set([1, 2], "Test");
> 
> myMap.get([1, 2]);
> // undefined.
> ```
>
> _In the above example, due to incorrect referencing the array `[1,2]` passed to `myMap.get()` and the array used in `myMap.set()` are at different locations in Heap._
>
> Correct way:
>
> ```javascript
> const arr = [1, 2];
> 
> myMap.set(arr, "Test");
> 
> myMap.get(arr);
> ```
> _Now the 'arr' passed in both myMap.set() and myMap.get() refer to the same location in Heap._

&nbsp;

---

---

<!-- PAGINATION_START -->

**Parent:** [Data Structures](../../2.%20Data%20Structures/) → [Maps](../Maps/)
  
**Previous:** ← [Data Structures > Maps > Maps Conversion](04-maps-conversion.md)  

**Next:** → [Data Structures > Objects](../Objects/)

<!-- PAGINATION_END -->
