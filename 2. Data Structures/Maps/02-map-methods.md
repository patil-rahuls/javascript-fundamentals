## Data Structures > Maps

Maps are high performance key - value paired data structure.

In Objects keys can only be strings (without quotes), but in Maps, keys can be any type.

&nbsp;

### Map Methods

> ### `Map.prototype.set()`
>
> _Adds a pair to the Map and returns updated map._
> 
> ```javascript
> const myMap = new Map();
> 
> myMap.set("name", "Rahul");
> 
> // We can chain the set() method too
> myMap
>   .set(1, "Mumbai")
>   .set(2, "India")
>   .set(true, "I am free now.")
>   .set(false, "I am busy.");
> 
> console.log(myMap);
> // Map(3) {
> //    "name" => "Rahul",
> //    1 => "Mumbai",
> //    2 => "India",
> //    true => 'I am free now.',
> //    false => 'I am busy.',
> // }
> 
> // Observe that the key types are preserved in Map.
> ```

&nbsp;

> ### `Map.prototype.get()`
>
> _Retrieve data from a Map by value._
> 
> ```javascript
> myMap.get(true);
> // I am free now.
> 
> myMap.get("age");
> // undefined
> // Because age key is not present in 'myMap'.
> ```

&nbsp;

> ### `Map.prototype.has()`
>
> _Checks if a key exists in a Map._
> 
> ```javascript
> myMap.has("hobbies");
> // false
> 
> myMap.has(2);
> // true
> ```

&nbsp;

> ### `Map.prototype.delete()`
>
> _Deletes an item from a Map._
> 
> ```javascript
> myMap.delete(2);
> myMap.delete(1);
> ```

&nbsp;

> ### `Map.prototype.size`
>
> _Returns size of Map._
>
> _IMP: This is not a method. no parens `()`._
> 
> ```javascript
> myMap.size; // no parentheses after size.
> ```

&nbsp;

> ### `Map.prototype.clear()`
>
> _Truncates Map._
> 
> ```javascript
> myMap.clear();
> ```

&nbsp;

> ### `Map.prototype.keys()`
>
> _Retrieve keys from the Map._
> 
> ```javascript
> myMap.keys();
> ```

&nbsp;

> ### `Map.prototype.values()`
>
> _Retrieve values from the Map._
> 
> ```javascript
> myMap.values();
> ```

&nbsp;

> ### `Map.prototype.entries()`
>
> _Retrieve entries [key, value] from the Map._
> 
> ```javascript
> myMap.entries();
> ```

&nbsp;

---

---

<!-- PAGINATION_START -->

**Parent:** [Data Structures](../../2.%20Data%20Structures/) → [Maps](../Maps/)
  
**Previous:** ← [Data Structures > Maps > Map](01-map.md)  

**Next:** → [Data Structures > Maps > Map Iteration](03-map-iteration.md)

<!-- PAGINATION_END -->
