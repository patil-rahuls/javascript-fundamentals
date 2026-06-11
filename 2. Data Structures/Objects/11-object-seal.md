## Data Structures > Object

### `Object.seal()`

> **_Sealed objects are still mutable, meaning you can change the values of the existing properties._**
>
> **_However, you cant add new properties or remove existing ones._**

```javascript
const person = {
  firstName: "Rahul",
  lastName: "Patil",
  age: 2049 - 2024,
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

---

<!-- PAGINATION_START -->

**Parent:** [Objects](..)  
**Previous:** [Data Structures > Objects > Object Freeze](10-object-freeze.md)  
**Next:** [Data Structures > Objects > Object Clones](12-object-clones.md)

<!-- PAGINATION_END -->
