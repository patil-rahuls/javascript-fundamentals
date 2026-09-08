## Data Structures > Object > Methods

> 🎯 Any function attached to an object as a property is called a **method**. The key distinction between a standard function and a method is that a method is invoked upon an object, which acts as its **receiver**.

---
&nbsp;

### 1. Defining a Method

You can assign a function to an object property just like any other value.

```javascript
const myObj = {
  firstName: "Rahul",
  lastName: "Patil",
  age: 2049 - 2024,
};

// Adding a method to the object
myObj.greet = function (user) {
  console.log(`Hello '${user}' !! What up !`);
};

console.log(myObj);
/* 
{
  firstName: 'Rahul',
  lastName: 'Patil',
  age: 25,
  greet: [Function (anonymous)]
}
*/
```

### 2. Method vs. Function (The "Receiver")

A method is strongly associated with the object it belongs to. When you call it, the object before the dot acts as the **receiver**.

```javascript
// Method Invocation: 'myObj' is the receiver, 'greet' is the method
myObj.greet("Reader");
// "Hello 'Reader' !! What up !"
```

Compare this with a standard function invocation:

```javascript
const sayHi = () => console.log(`Hi there !!`);

// Function Invocation: There is no receiver (no object before a dot)
sayHi(); 
// "Hi there !!"
```

---

### 3. Invoking Methods

Just like retrieving standard properties, you can invoke methods using either Dot Notation or Bracket Notation. Dot notation is the standard and preferred approach because it is significantly easier to read.

```javascript
// ✅ Preferred: Dot notation (Clean and readable)
myObj.greet("Reader");

// ⚠️ Valid, but difficult to read: Bracket notation
myObj["greet"]("Reader");
```
---
&nbsp;
<!-- PAGINATION_START -->

📁 [Data Structures](../../2.%20Data%20Structures/) → [Objects](../Objects/)
  
◀️ [Data Structures > Objects > Object Retrieve Properties](03-object-retrieve-properties.md)  

▶️ [Data Structures > Objects > Object Delete Properties](05-object-delete-properties.md)

<!-- PAGINATION_END -->
&nbsp;
