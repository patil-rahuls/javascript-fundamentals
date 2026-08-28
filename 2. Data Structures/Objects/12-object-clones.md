## Data Structures > Object > Clone/Copy

Consider this object as an example.

```javascript
const myObj = {
  firstName: "Rahul",
  lastName: "Patil",
  age: 27,
};

```

### 1. Shallow Copy

Shallow copy duplicates only the top-level properties of an object. Nested objects (if any) are still copied as reference.

#### Object.**assign()**

Syntax - `Object.assign(target, ...sources)`

```javascript
const shallowCopy = Object.assign({}, myObj);

```

_The **Object.assign()** invokes the getters on the source objects and setters on the target (if provided)._

_It assigns properties only, not copying or defining new properties._

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

```

Now, in the 'copy' object, all outer most properties i.e. 'name' in this case, are an independent copy. And all the properties with nested objects as their values are references.

_If we change the outer properties in original object._
```javascript
x.name = "patil";
// x - { name: 'patil', dob : { year : 1990 }}
// copy - { name: 'Rahul', dob : { year : 1990 }}

```
_The 'name' property remains independent._

_And if we change the nested objects property in the original object._
```javascript
x.dob.year = 1991;
// x - { name: 'patil', dob : { year : 1991 }}
// copy - { name: 'Rahul', dob : { year : 1991 }}

```
_The nested object property gets changed in 'copy' object too._

---

&nbsp;

### 2. Deep Copy

#### **JSON**

```javascript
const deepCopy = JSON.parse(JSON.stringify(myObj));

```

#### **structuredClone()**

***IMP*** - _It does not clones methods and DOM nodes inside the source object._

```javascript
const clone = structuredClone(myObj);

```
---

&nbsp;

### 3. Merge objects

#### Using destructuring assignment

```javascript
let merged = { ...obj1, ...obj2 };

```

#### Object.**assign()**

```javascript
const allMerged = Object.assign({}, obj1, obj2,  obj3, etc);

```
_In the above example, properties of **obj1** will be overwritten by properties of **obj2** and same happens with **obj2** and **obj3**, and so on._

---
&nbsp;
<!-- PAGINATION_START -->

📁 [Data Structures](../../2.%20Data%20Structures/) → [Objects](../Objects/)
  
◀️ [Data Structures Objects Object Seal](11-object-seal.md)  

▶️ [Data Structures Objects Object Comparision](13-object-comparision.md)

<!-- PAGINATION_END -->
&nbsp;
