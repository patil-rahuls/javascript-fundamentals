## Data Structures > Object

### Retrieve Object Properties

Consider this object as an example.

```javascript
const myObj = {
  firstName: "Rahul",
  lastName: "Patil",
  age: 2049 - 2024,
};
```

> ### 1. Retrieve Object Properties using "DOT" notation:
> 
> ```javascript
> console.log(myObj.age);
> // 25
> 
> console.log(myObj.habbits);
> // undefined (when property is not found)
> ```

&nbsp;

> ### 2. Retrieve Object Properties using "BRACKET" notation:
> 
> ```javascript
> console.log(myObj["age"]);
> // 25
> ```

_In bracket notation `[]`, we can put an expression instead of just the property._

_`obj.[<expresssion>]`_

_That's the advantage of this type of retrieval._

```javascript
const proprty = 'Name';

console.log(myObj['first'+proprty]);
// 'Rahul'

console.log(myObj['last'+proprty]);
// 'Patil'


myObj.'last'+proprty; // ❌ Incorrect
// This won't work in DOT notation.

```

&nbsp;

### When to use which notation?

If we need to compute the property name then use the "BRACKET" notation.

Else use the easier and straight-forward "DOT" notation.

&nbsp;

---

---

<!-- PAGINATION_START -->

**Parent:** [Data Structures](../../2.%20Data%20Structures/) → [Objects](../Objects/)
  
**Previous:** ← [Data Structures > Objects > Object Assign Properties](02-object-assign-properties.md)  

**Next:** → [Data Structures > Objects > Object Methods](04-object-methods.md)

<!-- PAGINATION_END -->
