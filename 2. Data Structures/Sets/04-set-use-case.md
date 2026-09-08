## Data Structures > Set > Uses

> 🎯 Sets are high-performance data structures that represent an **unordered collection of unique values**. Their inherent ability to automatically filter out duplicates makes them exceptionally useful for specific array and string operations.

---
&nbsp;

### 1. Remove duplicates from an array.

```javascript
const users = ["rahul", "hitesh", "rahul", "rahul", "aajesh", "rahul"];
const unq = new Set(users);
// We pass an iterable(e.g. an array) in this constructor.

```

### 2. Count of no. of unique items in an Array/String.

Because Sets have a `.size` property, you can easily find the count of unique elements in any iterable (like an Array or a String).

#### For Arrays:
```javascript
const dupArr = [1, 2, 3, 5, 7, 8, 1, 1, 2, 4, 5, 2];
const countUnique = new Set(dupArr).size;
console.log(countUnique);
// 7

```
#### For Strings:
String is also an iterable, so we can make a set out of it.
```javascript
let myName = "Rahul is awesome";
const chars = new Set(myName).size;

console.log(chars);
// 12

```

### Convert Set to an Array.

_Useful when we want to remove duplicates from an array and want to use it later._

_Spread operator works for any iterables and the set is also an iterable._

```javascript
const users = ["rahul", "hitesh", "rahul", "rahul", "aajesh", "rahul"];

// 1. Convert array to Set (removes duplicates)
// 2. Spread the Set back into a new Array
const usersUniq = [...new Set(users)];

console.log(usersUniq);
// [ 'rahul', 'hitesh', 'aajesh' ]

```
---
&nbsp;
<!-- PAGINATION_START -->

📁 [Data Structures](../../2.%20Data%20Structures/) → [Sets](../Sets/)  

◀️ [Data Structures Sets Set Iteration](03-set-iteration.md)  

▶️ [Data Structures WeakMap-WeakSets](../WeakMap-WeakSet/)

<!-- PAGINATION_END -->
&nbsp;
