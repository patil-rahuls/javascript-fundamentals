## Data Structures > Object

### Retrieve Object Properties

Consider this object as an example.
```javascript
const myObj = {
  firstName : 'Rahul',
  lastName : 'Patil',
  age : 2049-2024,
};
```
### 1. Retrieve Object Properties using "DOT" notation:

```javascript
console.log(myObj.age);
// 25

console.log(myObj.habbits);
// undefined (when property is not found)
```


### 2. Retrieve Object Properties using "BRACKET" notation:
```javascript
console.log(myObj['age']);
// 25
```

In bracket notation `[]`, we can put an expression instead of just the property.

`obj.[<expresssion>]`

That's the advantage of this type of retrieval.

```javascript
const proprty = 'Name';

console.log(myObj['first'+proprty]);
// 'Rahul'

console.log(myObj['last'+proprty]);
// 'Patil'


myObj.'last'+proprty; // ❌ Incorrect
// This won't work in DOT notation.
```

### When to use which notation?

If we need to compute the property name then use the "BRACKET" notation.

Else use the easier and straight-forward "DOT" notation.

---
