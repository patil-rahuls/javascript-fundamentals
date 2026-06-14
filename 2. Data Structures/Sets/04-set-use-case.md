## Data Structures > Sets

> **_Sets are high performance `unordered unique collection` data structure._**

### Set use-cases

> ### 1. Remove duplicates from an array.
> 
> ```javascript
> const users = ["rahul", "hitesh", "rahul", "rahul", "aajesh", "rahul"];
> const unq = new Set(users);
> // We pass an iterable(e.g. an array) in this constructor.
> ```

&nbsp;

> ### 2. Count of no. of unique items in an Array/String.
> 
> ```javascript
> const dupArr = [1, 2, 3, 5, 7, 8, 1, 1, 2, 4, 5, 2];
> const countUnique = new Set(dupArr).size;
> console.log(countUnique);
> // 7
> 
> // String is also an iterable, so we can make a set out of it.
> let myName = "Rahul is awesome";
> const chars = new Set(myName).size;
> 
> console.log(chars);
> // 12
> ```

&nbsp;

> ### Convert Set to an Array.
>
> _Useful when we want to remove duplicates from an array and want to use it later._
> 
> _Spread operator works for any iterables and the set is also an iterable._
> 
> ```javascript
> const usersUniq = [...new Set(users)];
> ```

&nbsp;

---

---

<!-- PAGINATION_START -->

**Parent:** [Data Structures](../../2.%20Data%20Structures/) → [Sets](../Sets/)  

**Previous:** ← [Data Structures > Sets > Set Iteration](03-set-iteration.md)  

**Next:** → [Data Structures > WeakMap-WeakSets](./WeakMap-WeakSet/)

<!-- PAGINATION_END -->
