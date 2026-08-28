## Data Structures > Object > Retrieve Properties

Consider this object as an example.

```javascript
const myObj = {
  firstName: "Rahul",
  lastName: "Patil",
  age: 2049 - 2024,
};

```

### 1. Using dot notation:

```javascript
console.log(myObj.age);
// 25

console.log(myObj.habbits);
// undefined (when property is not found)

```

### 2. Using bracket notation:

```javascript
console.log(myObj["age"]);
// 25

```

In bracket notation **[]**, we can put an expression instead of just the property.

`obj.[<expresssion>]`

_That's the advantage of this type of retrieval._

```javascript
const proprty = 'Name';

console.log(myObj['first'+proprty]);
// 'Rahul'

console.log(myObj['last'+proprty]);
// 'Patil'


// ❌ Incorrect
myObj.'last'+proprty;
// This won't work in DOT notation.

```

### When to use which notation?

If we need to compute the property name then use the bracket notation.

Else use the easier and straight-forward dot notation.

---
&nbsp;
<!-- PAGINATION_START -->

📁 [Data Structures](../../2.%20Data%20Structures/) → [Objects](../Objects/)
  
◀️ [Data Structures Objects Object Assign Properties](02-object-assign-properties.md)  

▶️ [Data Structures Objects Object Methods](04-object-methods.md)

<!-- PAGINATION_END -->
&nbsp;
