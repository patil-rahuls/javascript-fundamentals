## Data Structures > Object

### `Object.freeze()`

> **_Frozen objects are read-only, and no modifications, additions, or deletions of properties are allowed._**

```javascript
const person = {
  firstName: "Rahul",
  lastName: "Patil",
  age: 2049 - 2024,
};

// Freeze the Object
Object.freeze(person);

// Check if the Object is Frozen
console.log(Object.isFrozen(person));
// true

// ❌ Modifying properties not allowed
person.age = 31;
console.log(person);
/*
{
  firstName : 'Rahul',
  lastName : 'Patil',
  age : 25
}
*/

// ❌ Adding new properties not allowed
person.city = "New York";

console.log(person);
/*
{
  firstName : 'Rahul',
  lastName : 'Patil',
  age : 25
}
*/

// ❌ Removing properties not allowed
delete person.firstName;

console.log(person);
/*
{
  firstName : 'Rahul',
  lastName : 'Patil',
  age : 25
}
*/
```

---

---

<!-- PAGINATION_START -->

**Parent:** [Objects](..)  
**Previous:** [Data Structures > Objects > Object Properties Count](09-object-properties-count.md)  
**Next:** [Data Structures > Objects > Object Seal](11-object-seal.md)

<!-- PAGINATION_END -->
