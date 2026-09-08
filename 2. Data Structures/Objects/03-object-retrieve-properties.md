## Data Structures > Object > Retrieve Properties

> 🎯 You can retrieve values from an object using either **Dot Notation** or **Bracket Notation**. While dot notation is cleaner for static keys, bracket notation is essential when you need to dynamically compute the property name.

---
&nbsp;

Consider this object as our example:

```javascript
const myObj = {
  firstName: "Rahul",
  lastName: "Patil",
  age: 2049 - 2024,
};
```

### 1. Using Dot Notation

This is the standard, most readable way to access known properties.

```javascript
console.log(myObj.age);
// 25

// Accessing a property that does not exist returns 'undefined' (not an error)
console.log(myObj.habits);
// undefined 
```

### 2. Using Bracket Notation

Bracket notation requires the property name to be passed as a string (or a variable/expression that evaluates to a string).

```javascript
console.log(myObj["age"]);
// 25
```

#### 💡 The Advantage: Evaluating Expressions
Inside bracket notation `[]`, you can put a dynamic expression instead of a hardcoded string: `obj[<expression>]`. This is impossible with dot notation.

```javascript
const nameSuffix = 'Name';

// Evaluates to myObj["firstName"]
console.log(myObj['first' + nameSuffix]);
// 'Rahul'

// Evaluates to myObj["lastName"]
console.log(myObj['last' + nameSuffix]);
// 'Patil'


// ❌ Incorrect: This syntax will throw a SyntaxError.
// Dot notation expects a literal identifier, not an expression.
// console.log(myObj.'last' + nameSuffix); 
```

---

### When to use which notation?

*   **Use Bracket Notation `[]`** if you need to compute the property name dynamically (using variables or expressions), or if the key contains special characters/numbers.
*   **Use Dot Notation `.`** as your default. It is easier to read, faster to type, and more straightforward for static properties.

---
&nbsp;
<!-- PAGINATION_START -->

📁 [Data Structures](../../2.%20Data%20Structures/) → [Objects](../Objects/)
  
◀️ [Data Structures Objects Object Assign Properties](02-object-assign-properties.md)  

▶️ [Data Structures Objects Object Methods](04-object-methods.md)

<!-- PAGINATION_END -->
&nbsp;
