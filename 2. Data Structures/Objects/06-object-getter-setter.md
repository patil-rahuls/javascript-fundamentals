## Data Structures > Object > Getter & Setter

> 🎯 Every object in JavaScript can have accessor properties: 
>
> **getters** (defined with the `get` keyword) and
> 
> **setters** (defined with the `set` keyword). 
>
> They execute background logic but are accessed exactly like standard properties, not methods.

---
&nbsp;

### Defining Getters and Setters

> ⚠️ **Important:** A setter function must have **exactly one** parameter.

```javascript
const myObj = {
  firstName: "Rahul",
  lastName: "Patil",

  // Getter: Retrieves and computes data on the fly
  get info() {
    return `Full Name : ${this.lastName}${this.firstName}`;
  },

  // Setter: Updates data (COMPULSORY exactly one parameter)
  set info(lName) {
    this.lastName = lName;
  },
};
```

### Accessing Getters and Setters

Even though they look like functions inside the object definition, you interact with them as standard properties. **Do not use parentheses `()`**.

```javascript
// Accessing the getter
console.log(myObj.info);
// "Full Name : Patil  Rahul"

// Accessing the setter
myObj.info = "P"; 

console.log(myObj.info);
// "Full Name : P  Rahul"
```

> 💡 **Is this Polymorphism?** 
> You might notice that `info` acts like a simple property, yet yields the "functionality" of a method under the hood. While technically an *accessor property* (not true polymorphism), it achieves a similar architectural goal: it provides a simple, unified interface to the outside world while hiding the complex background logic inside the object.

---
&nbsp;

<!-- PAGINATION_START -->

📁 [Data Structures](../../2.%20Data%20Structures/) → [Objects](../Objects/)
  
◀️ [Data Structures > Objects > Object Delete Properties](05-object-delete-properties.md)  

▶️ [Data Structures > Objects > Object This Keyword](07-object-this-keyword.md)

<!-- PAGINATION_END -->
&nbsp;
