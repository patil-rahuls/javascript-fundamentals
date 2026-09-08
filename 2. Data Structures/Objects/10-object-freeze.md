## Data Structures > Object > `freeze()`

> 🎯 The **`Object.freeze()`** method completely locks down an object. A frozen object is strictly read-only: you cannot modify existing properties, add new properties, or delete current ones.

---
&nbsp;

### 1. Freezing an Object

```javascript
const person = {
  firstName: "Rahul",
  lastName: "Patil",
  age: 2049 - 2024,
};

// Freeze the object
Object.freeze(person);
```

### 2. Checking if an Object is Frozen

You can verify the state of an object using `Object.isFrozen()`.

```javascript
console.log(Object.isFrozen(person));
// true
```

### 3. The Effects of Freezing

Once an object is frozen, any attempt to alter it will fail. 

> 💡 **Note:** These operations will fail *silently* in standard execution, but will throw a `TypeError` if your code is running in Strict Mode (`"use strict";`).

```javascript
// ❌ Modifying properties is not allowed
person.age = 31;

// ❌ Adding new properties is not allowed
person.city = "New York";

// ❌ Removing properties is not allowed
delete person.firstName;

console.log(person);  
// The object remains completely unchanged:
/*
{
  firstName: 'Rahul',
  lastName: 'Patil',
  age: 25
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
