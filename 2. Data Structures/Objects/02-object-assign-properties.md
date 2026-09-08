## Data Structures > Object > Assign Properties

> 🎯 You can dynamically add or update properties in an existing JavaScript Object using either **Dot Notation** (`.`) or **Bracket Notation** (`[]`).

---
&nbsp;

### 1. Dot Notation

This is the most common and readable way to assign a property.

```javascript
const myObj = {
  firstName: "Rahul",
  lastName: "Patil",
  age: 2049 - 2024,
};

// Adding a new property
myObj.habit = "eating";

console.log(myObj);
/*
{
  firstName: 'Rahul',
  lastName: 'Patil',
  age: 25,
  habit: 'eating'
}
*/
```

### 2. Bracket Notation

Bracket notation allows you to assign properties by passing the key as a string.

```javascript
myObj["isVeg"] = true;

console.log(myObj);
/*
{
  firstName: 'Rahul',
  lastName: 'Patil',
  age: 25,
  habit: 'eating',
  isVeg: true
}
*/
```

---

### 3. When to use Bracket Notation instead of Dot Notation?

While dot notation is cleaner, **Bracket Notation is strictly required** in the following edge cases:

#### (a). When the property name is a number or contains special characters (like spaces)

```javascript
// ❌ Incorrect: Dot notation cannot handle numbers or invalid identifiers
// myObj.9820694183 = 'mobile'; // Throws a SyntaxError

// ✅ Correct: Bracket notation handles it perfectly
myObj[9820694183] = 'mobile';
myObj["favorite color"] = "blue";
```

#### (b). When using Dynamic / Computed Property Names

If the property key is stored inside a variable, you *must* use bracket notation. Using dot notation will literally assign the property name as the variable's identifier, not the variable's actual value.

```javascript
const prop = "name";
const obj = {};

// ❌ Dot Notation assigns the literal string "prop"
obj.prop = "Rahul";
console.log(obj); 
// { prop: 'Rahul' }

// ✅ Bracket Notation evaluates the variable 'prop'
obj[prop] = "Rahul";
console.log(obj); 
// { name: 'Rahul' }
```
---
&nbsp;
<!-- PAGINATION_START -->

📁 [Data Structures](../../2.%20Data%20Structures/) → [Objects](../Objects/)
  
◀️ [Data Structures Objects Objects](01-objects.md)  

▶️ [Data Structures Objects Object Retrieve Properties](03-object-retrieve-properties.md)

<!-- PAGINATION_END -->
&nbsp;
