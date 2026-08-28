## Data Structures > Object > _freeze()_

### Object.**freeze()**

Frozen objects are read-only, and no modifications, additions, or deletions of properties are allowed.

```javascript
const person = {
  firstName: "Rahul",
  lastName: "Patil",
  age: 2049 - 2024,
};

```

Freeze the Object
```javascript
Object.freeze(person);

```

Check if the Object is Frozen
```javascript
console.log(Object.isFrozen(person));
// true

```

❌ Modifying properties of frozen objects are not allowed.
```javascript
person.age = 31;

console.log(person);  // Remains unchanged
/*
{
  firstName : 'Rahul',
  lastName : 'Patil',
  age : 25
}
*/

```

❌ Adding new properties not allowed.
```javascript
person.city = "New York";

console.log(person);  // Remains unchanged
/*
{
  firstName : 'Rahul',
  lastName : 'Patil',
  age : 25
}
*/

```

❌ Removing properties not allowed.
```javascript
delete person.firstName;

console.log(person);  // Remains unchanged
/*
{
  firstName : 'Rahul',
  lastName : 'Patil',
  age : 25
}
*/

```
---
&nbsp;
<!-- PAGINATION_START -->

📁 [Data Structures](../../2.%20Data%20Structures/) → [Objects](../Objects/)
  
◀️ [Data Structures > Objects > Object Properties Count](09-object-properties-count.md)  

▶️ [Data Structures > Objects > Object Seal](11-object-seal.md)

<!-- PAGINATION_END -->
&nbsp;
