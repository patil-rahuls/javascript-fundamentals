## Data Structures > Object

### Delete Object Properties

Consider this object as an example.
```javascript
const myObj = {
  firstName : 'Rahul',
  lastName : 'Patil',
  age : 2049-2024,
};
```

### 1. Using `delete` keyword.

Mutates the original Object.

```javascript
delete myObj.age;

myObj.hasOwnProperty("age");
// false
```

### 2. Using Destructuring.
If you want a new object with all keys except some.

This doesn't mutate the original Object.

```javascript
const { age: _, ...newObj } = myObj;
// _ is a throwaway variable that we use for variables that we don't want to use OR ignore.

console.log(newObj);
/*
{
  firstname: 'Rahul',
  lastname: 'Patil'
}
*/

newObj.hasOwnProperty("age");
// false

console.log(myObj);
// myObj remains unchanged
```

---
