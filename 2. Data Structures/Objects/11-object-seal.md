## Data Structures > Object

### `Object.seal()`

Sealed objects are still mutable, meaning you can change the values of the existing properties.

However, you cant add new properties or remove existing ones.

Consider this object as an example.

```javascript
const person = {
  firstName : 'Rahul',
  lastName : 'Patil',
  age : 2049-2024,
};

// Seal the object.
Object.seal(person);

// Check if the Object is sealed
console.log(Object.isSealed(person));
// true


// ✅ Modifying an existing property is allowed
person.age = 31;

console.log(person);
/*
{
  firstName : 'Rahul',
  lastName : 'Patil',
  age : 31
}
*/


// ❌ Adding new properties is not allowed
person.city = "Mumbai";

console.log(person);
/*
{
  firstName : 'Rahul',
  lastName : 'Patil',
  age : 31
}
*/


// ❌ Removing existing properties is not allowed
delete person.firstName;

console.log(person);
/*
{
  firstName : 'Rahul',
  lastName : 'Patil',
  age : 31
}
*/
```

---
