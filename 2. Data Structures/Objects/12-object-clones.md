## Data Structures > Object > Clone / Copy

> 🎯 Duplicating objects in JavaScript requires understanding the difference between references and actual data. Simple variable assignment only copies the memory reference. To copy the actual data, you must use specific methods to create either a **Shallow Copy** or a **Deep Copy**.

---
&nbsp;

Consider this object as our starting example:

```javascript
const myObj = {
  firstName: "Rahul",
  lastName: "Patil",
  age: 27,
};
```

### 1. Shallow Copy

A shallow copy duplicates only the top-level properties of an object. If the object contains nested objects (or arrays), those nested structures are **not** duplicated; they are copied as references.

#### `Object.assign()`

Syntax: `Object.assign(target, ...sources)`

```javascript
// Target is an empty object {}, source is myObj
const shallowCopy = Object.assign({}, myObj);
```
*(Note: `Object.assign()` assigns properties only; it invokes getters on the source and setters on the target, but does not copy property definitions/descriptors.)*

**The Reference Trap in Shallow Copies:**

```javascript
const x = {
  name: "Rahul",
  dob: {
    year: 1990,
  },
};

const copy = Object.assign({}, x);
```
In the `copy` object, all outermost properties (like `name`) are strictly independent. However, properties with nested objects (like `dob`) share the exact same memory reference as the original object.

```javascript
// 1. Changing a top-level property
x.name = "Patil";
// x    -> { name: 'Patil', dob: { year: 1990 } }
// copy -> { name: 'Rahul', dob: { year: 1990 } } 
// ✅ The 'name' property remains independent.

// 2. Changing a nested object property
x.dob.year = 1991;
// x    -> { name: 'Patil', dob: { year: 1991 } }
// copy -> { name: 'Rahul', dob: { year: 1991 } } 
// ❌ The nested object property changes in the 'copy' too!
```

---
&nbsp;

### 2. Deep Copy

A deep copy duplicates the object and all nested objects completely, severing all reference ties.

#### The JSON Method
A quick, older technique. It works well for pure data but strips out functions, `undefined`, and Symbols.

```javascript
const deepCopy = JSON.parse(JSON.stringify(myObj));
```

#### `structuredClone()`
The modern, native way to deep copy in JavaScript. 

> ⚠️ **Important:** It does **not** clone methods (functions) or DOM nodes inside the source object. It will throw an error if it encounters them.

```javascript
const clone = structuredClone(myObj);
```

---
&nbsp;

### 3. Merging Objects

#### Using Destructuring (Spread Operator)
The cleanest syntax for merging multiple objects into a new one.

```javascript
let merged = { ...obj1, ...obj2 };
```

#### `Object.assign()`
```javascript
const allMerged = Object.assign({}, obj1, obj2, obj3);
```

*Note: In both merge methods, properties are evaluated from left to right. If multiple objects share the same property key, the property from the **last** object (furthest right) will permanently overwrite the earlier ones.*

---
&nbsp;

<!-- PAGINATION_START -->

📁 [Data Structures](../../2.%20Data%20Structures/) → [Objects](../Objects/)
  
◀️ [Data Structures Objects Object Seal](11-object-seal.md)  

▶️ [Data Structures Objects Object Comparision](13-object-comparision.md)

<!-- PAGINATION_END -->
&nbsp;
