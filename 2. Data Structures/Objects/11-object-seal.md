## Data Structures > Object

### `Object.seal()`

> ***Sealed objects are still mutable, meaning you can change the values of the existing properties.***
>
> ***However, you cant add new properties or remove existing ones.***

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


// ✅ Modifying an existing property allowed
person.age = 31;

console.log(person);
/*
{
  firstName : 'Rahul',
  lastName : 'Patil',
  age : 31
}
*/


// ❌ Adding new properties not allowed
person.city = "Mumbai";

console.log(person);
/*
{
  firstName : 'Rahul',
  lastName : 'Patil',
  age : 31
}
*/


// ❌ Removing existing properties not allowed
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
