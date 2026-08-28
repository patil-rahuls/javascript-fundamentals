## Data Structures > Object > `this`

Consider this object as an example.

```javascript
const myObj = {
  firstName: "Rahul",
  lastName: "Patil",
  age: 0,

  myAge() {
    this.age = 2049 - 2024;
    // this object's "age" property is mutated here.
    return this.age;
  },
};

```

**this** refers to the current/calling Object.

We use **this** keyword to access the current object’s properties.

```javascript
myObj.info = function () {
  let str = `${this.firstName} is ${this.myAge()} yrs old`;
};

myObj.info();
// "Rahul is 25 yrs old"

```
In the example above, **this** points to the calling object i.e. _myObj_

---
&nbsp;
<!-- PAGINATION_START -->

📁 [Data Structures](../../2.%20Data%20Structures/) → [Objects](../Objects/)
  
◀️ [Data Structures > Objects > Object Getter Setter](06-object-getter-setter.md)  

▶️ [Data Structures > Objects > Object Loop](08-object-loop.md)

<!-- PAGINATION_END -->
&nbsp;
