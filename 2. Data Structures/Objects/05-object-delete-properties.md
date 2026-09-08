## Data Structures > Object > Delete Properties

> 🎯 There are two primary ways to remove a property from an object: destructively (which mutates the original object using the **`delete`** operator) or non-destructively (which creates a brand new object using destructuring).

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

### 1. Using the **`delete`** keyword

This method directly **mutates** the original object by removing the specified property permanently.

```javascript
// Remove the 'age' property
delete myObj.age;

console.log(myObj.hasOwnProperty("age"));
// false
```

### 2. Using Object Destructuring (Non-mutating)

If you need a new object with all the keys *except* specific ones, use the rest operator (`...`) during destructuring. This ensures the original object remains completely **unchanged**.

```javascript
// Destructure 'age' out, and collect the rest of the properties into 'newObj'
const { age: _, ...newObj } = myObj;

console.log(newObj);
/*
{
  firstName: 'Rahul',
  lastName: 'Patil'
}
*/

console.log(newObj.hasOwnProperty("age"));
// false

// The original object is completely unaffected
console.log(myObj.age); 
// 25
```

> 💡 **Pro-Tip:** In the destructuring example above, `_` (underscore) is a widely used convention for a **throwaway variable**. It signals to other developers that the extracted `age` value is being intentionally ignored and won't be used anywhere else in the code.

---
&nbsp;

<!-- PAGINATION_START -->

📁 [Data Structures](../../2.%20Data%20Structures/) → [Objects](../Objects/)
  
◀️ [Data Structures Objects Object Methods](04-object-methods.md)  

▶️ [Data Structures Objects Object Getter Setter](06-object-getter-setter.md)

<!-- PAGINATION_END -->
&nbsp;
