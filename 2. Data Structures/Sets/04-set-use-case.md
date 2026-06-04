## Data Structures > Sets

### Set use-cases

Sets are high performance unordered unique collection data structure.

### 1. Remove duplicates from an array.

```javascript
const users = ['rahul' , 'hitesh' , 'rahul', 'rahul',  'aajesh' , 'rahul'];
const unq = new Set(users);
// We pass an iterable(e.g. an array) in this constructor.
```

&nbsp;

### 2. Count of no. of unique items in an Array/String.

```javascript
const dupArr = [1,2,3,5,7,8,1,1,2,4,5,2];
const countUnique = new Set(dupArr).size;
console.log(countUnique);
// 7


// String is also an iterable, so we can make a set out of it.
let myName = 'Rahul is awesome';
const chars = new Set(myName).size;

console.log(chars);
// 12
```

&nbsp;

### 3. Convert Set to an Array.
Useful when we want to remove duplicates from an array and want to use it later.

Spread operator works for any iterables and the set is also an iterable.

```javascript
const usersUniq = [...new Set(users)];
```

---
