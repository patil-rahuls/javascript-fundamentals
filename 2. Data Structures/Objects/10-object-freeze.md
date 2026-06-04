## Data Structures > Object

### `Object.freeze()`

Frozen objects are read-only, and no modifications, additions, or deletions of properties are allowed.

Consider this object as an example.

```javascript
const person = {
  firstName : 'Rahul',
  lastName : 'Patil',
  age : 2049-2024,
};

// Freeze the Object
Object.freeze(person);

// Check if the Object is Frozen
console.log(Object.isFrozen(person));
// true


// ❌ Modifying properties is not allowed
person.age = 31;
console.log(person);
/*
{
  firstName : 'Rahul',
  lastName : 'Patil',
  age : 25
}
*/


// ❌ Adding new properties is not allowed
person.city = "New York";

console.log(person);
/*
{
  firstName : 'Rahul',
  lastName : 'Patil',
  age : 25
}
*/


// ❌ Removing properties is not allowed
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
