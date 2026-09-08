## Data Structures > Object > `seal()`

> 🎯 The **`Object.seal()`** method "seals" an object. Unlike a frozen object, a sealed object is still **mutable**—you can update the values of its existing properties. However, you are completely restricted from adding new properties or deleting existing ones.

---
&nbsp;

### 1. Sealing an Object

```javascript
const person = {
  firstName: "Rahul",
  lastName: "Patil",
  age: 2049 - 2024,
};

// Seal the object
Object.seal(person);
```

### 2. Checking if an Object is Sealed

You can easily verify the state of an object using `Object.isSealed()`.

```javascript
console.log(Object.isSealed(person));
// true
```

### 3. The Effects of Sealing

> 💡 **Note:** Just like with `Object.freeze()`, attempting to add or remove properties on a sealed object will fail silently in standard execution, but will throw a `TypeError` if your code is running in Strict Mode (`"use strict";`).

```javascript
// ✅ Modifying an existing property IS allowed
person.age = 31;


// ❌ Adding new properties is NOT allowed
person.city = "Mumbai";


// ❌ Removing existing properties is NOT allowed
delete person.firstName;


console.log(person);  
// The object retains its original structure, but with the modified age:
/*
{
  firstName: 'Rahul',
  lastName: 'Patil',
  age: 31
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
