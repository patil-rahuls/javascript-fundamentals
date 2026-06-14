## Data Structures > Object

### Object Clones

Consider this object as an example.

```javascript
const myObj = {
  firstName: "Rahul",
  lastName: "Patil",
  age: 27,
};
```

> ### 1. Shallow Copy - `Object.assign()`
>
> **Object.assign(target, ...sources)**
> 
> ```javascript
> const shallowCopy = Object.assign({}, myObj);
> ```
> 
> _The `Object.assign()` invokes the getters on the source objects and setters on the target (if provided)._
>
> _It assigns properties only, not copying or defining new properties._

**IMP - But beware of the shallow copy because 'nested objects' (if any) are still copied as reference.**

> Example:

```javascript
const x = {
  name: "Rahul",
  dob: {
    year: 1990,
  },
};

const copy = Object.assign({}, x);
// copy - { name: 'Rahul', dob : { year : 1990 }}

// Now, in the 'copy' object, all
// outer most properties i.e. 'name'
// in this case, are an independent copy.
// And all the properties with nested
// objects as their values are references.

// Copied outermost properties are deep copy.
x.name = "patil";
// x - { name: 'patil', dob : { year : 1990 }}
// copy - { name: 'Rahul', dob : { year : 1990 }}
// i.e. name property remains independent (deep copy).

// Nested objects are reference (shallow copy)
x.dob.year = 1991;
// x - { name: 'patil', dob : { year : 1991 }}
// copy - { name: 'Rahul', dob : { year : 1991 }}
// i.e. the nested object property gets changed.
```

---

&nbsp;

> ### 2. Deep Copy

> #### using `JSON`

```javascript
const deepCopy = JSON.parse(JSON.stringify(myObj));
```

> #### using `structuredClone()`

```javascript
const clone = structuredClone(myObj);
// IMP - does not clones methods and
// DOM nodes inside the source object.
```

---

&nbsp;

> ### 3. Merge one or more Objects

> #### Using destructuring assignment

```javascript
let merged = { ...obj1, ...obj2 };
```

> #### Using `Object.assign()`
> 
> ```javascript
> const allMerged = Object.assign({}, obj1, obj2,  obj3, etc);
> ```
> 
> _In the above example, properties of `obj1` will be overwritten by properties of `obj2` and same happens with `obj2` and `obj3`, and so on._

&nbsp;
---

---

<!-- PAGINATION_START -->

**Parent:** [Data Structures](../../2.%20Data%20Structures/) → [Objects](../Objects/)
  
**Previous:** ← [Data Structures > Objects > Object Seal](11-object-seal.md)  

**Next:** → [Data Structures > Objects > Object Comparision](13-object-comparision.md)

<!-- PAGINATION_END -->
