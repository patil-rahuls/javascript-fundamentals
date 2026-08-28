## Data Structures > Object > _seal()_

### Object.**seal()**

Sealed objects are still mutable, meaning you can change the values of the existing properties.

However, you can't add new properties or remove existing ones.

```javascript
const person = {
  firstName: "Rahul",
  lastName: "Patil",
  age: 2049 - 2024,
};

```

Seal the object.
```javascript
Object.seal(person);

```

Check if the Object is sealed.
```javascript
console.log(Object.isSealed(person));
// true

```

✅ Modifying an existing property allowed.
```javascript
person.age = 31;

console.log(person);
/*
{
  firstName : 'Rahul',
  lastName : 'Patil',
  age : 31
}
*/

```

❌ Adding new properties not allowed.
```javascript
person.city = "Mumbai";

console.log(person);
/*
{
  firstName : 'Rahul',
  lastName : 'Patil',
  age : 31
}
*/

```

❌ Removing existing properties not allowed.
```javascript
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
&nbsp;
<!-- PAGINATION_START -->

📁 [Data Structures](../../2.%20Data%20Structures/) → [Objects](../Objects/)
  
◀️ [Data Structures > Objects > Object Freeze](10-object-freeze.md)  

▶️ [Data Structures > Objects > Object Clones](12-object-clones.md)

<!-- PAGINATION_END -->
&nbsp;
