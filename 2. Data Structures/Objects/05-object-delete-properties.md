## Data Structures > Object > Delete Properties 

Consider this object as an example.

```javascript
const myObj = {
  firstName: "Rahul",
  lastName: "Patil",
  age: 2049 - 2024,
};

```

### 1. Using **delete** keyword.

Mutates the original object.

```javascript
delete myObj.age;

myObj.hasOwnProperty("age");
// false

```

### 2. Using Destructuring.

If you want a new object with all keys except some.

This doesn't mutate the original object.

```javascript
const { age: _, ...newObj } = myObj;

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
_In the example above, `_` is a throwaway variable that we use for variables that we don't want to use OR ignore._

---
&nbsp;
<!-- PAGINATION_START -->

📁 [Data Structures](../../2.%20Data%20Structures/) → [Objects](../Objects/)
  
◀️ [Data Structures Objects Object Methods](04-object-methods.md)  

▶️ [Data Structures Objects Object Getter Setter](06-object-getter-setter.md)

<!-- PAGINATION_END -->
&nbsp;
