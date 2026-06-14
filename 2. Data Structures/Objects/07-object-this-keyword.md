## Data Structures > Object

### `this` Keyword

Consider this object as an example.

```javascript
const myObj = {
  firstName: "Rahul",
  lastName: "Patil",
  age: 0,

  myAge() {
    this.age = 2049 - 2024;
    // this object's "age" property 
    // is mutated here.
    return this.age;
  },
};

// "this" refers to the 
// current Object i.e. it 
// points to the current object.

// We use "this" keyword to access 
// the current object’s properties.

myObj.info = function () {
  let str = `${this.firstName} is ${this.myAge()} yrs old`;
};
// "this" points to the 
// calling object i.e. "myObj"

myObj.info();
// "Rahul is 25 yrs old"
```

&nbsp;
---

---

<!-- PAGINATION_START -->

**Parent:** [Data Structures](../../2.%20Data%20Structures/) → [Objects](../Objects/)
  
**Previous:** ← [Data Structures > Objects > Object Getter Setter](06-object-getter-setter.md)  

**Next:** → [Data Structures > Objects > Object Loop](08-object-loop.md)

<!-- PAGINATION_END -->
