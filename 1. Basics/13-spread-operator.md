## Spread Operator (**`...`**) (ES6)

> 🎯 The spread operator **`...`** (used on the **RHS** of an assignment `=`) unpacks elements of iterable objects (such as Arrays, Sets, Maps, and Objects) into a list of individual elements.
>
> **Valid Use Cases:**
> 1. Expanding or Merging iterables.
> 2. Copying iterables.
> 3. Passing as a function argument.
>
> *Note: There can be more than one spread element in a single expression.*

---
&nbsp;

### 1. Expanding an Iterable

**Expanding an Array:**
```javascript
const tech = [
  "JavaScript",
  "TypeScript",
  "Node.js",
  "Express",
  "React",
  "AWS Cloud",
];

const updatedTech = [...tech, "Docker", "Redux"];

console.log(updatedTech);
// ['JavaScript', 'TypeScript', 'Node.js', 'Express', 'React', 'AWS Cloud', 'Docker', 'Redux']

console.log(...updatedTech);
// 'JavaScript' 'TypeScript' 'Node.js' 'Express' 'React' 'AWS Cloud' 'Docker' 'Redux'
```

**Expanding an Object:**
```javascript
const user = {
  name: "Rahul",
  age: 25,
  city: "Pune",
};

const updatedUser = { country: "India", ...user };

console.log(updatedUser);
/*
{
  country: 'India',
  name: "Rahul",
  age: 25,
  city: "Pune"
}
*/
```

### 2. Merging Iterables

**Merging Arrays:**
```javascript
const first = [1, 2, 3, 4];
const second = ["Admin", "Root"];

const joinedArr = [...first, ...second];

console.log(joinedArr);
// [1, 2, 3, 4, 'Admin', 'Root']
```

**Merging Objects:**
```javascript
const user = {
  name: "Rahul",
  age: 25,
  city: "Pune",
};

const extraInfo = {
  country: "India",
};

const updatedUser = { ...user, ...extraInfo };

console.log(updatedUser);
/*
{
  name: "Rahul",
  age: 25,
  city: "Pune",
  country: 'India'
}
*/
```

### 3. Copying Iterables _(Deep Copy for Flat Structures)_

> ⚠️ **Rule:** In the case of **flat structures** (no nested arrays/objects), the spread operator creates a true **deep copy**.

```javascript
// Copy a flat array
const first = [1, 2, 3, 4];
const firstCopy = [...first];

console.log(firstCopy); // [1, 2, 3, 4]

// Copy a flat object
const user = {
  name: "Rahul",
  age: 25,
  city: "Pune",
};
const temp = { ...user };

console.log(temp);
/*
{
  name: "Rahul",
  age: 25,
  city: "Pune"
}
*/
```

### 4. Copying Iterables _(Shallow Copy for Nested Structures)_

> ⚠️ **Rule:** If the object or array contains **nested objects or arrays**, the spread operator only copies the *memory reference* to those inner elements rather than making fresh duplicates. This results in a **shallow copy**.

```javascript
// Copy a nested object
const user = {
  name: "Rahul",
  age: 25,
  address: {
    city: "Pune", // Nested object
  },
};

// Using the spread operator
const copy = { ...user };

copy.name = "Raj";
// ✅ Changes top-level primitive (safe)

copy.address.city = "Mumbai";
// ❌ Mutates the nested object reference (affects original!)

console.log(user.name);
// "Rahul" (Unchanged)

console.log(user.address.city);
// "Mumbai" (CHANGED! Both share the reference)
```

### 5. As a Function Argument

```javascript
function notify(name, msg) {
  console.log(`${name} sent:${msg}`);
}

// ✅ Using an array
const payload = ["Admin", "Hello Rahul!"];
notify(...payload); 
// 'Admin sent: Hello Rahul!'


// ❌ Using an Object (Objects are not iterable by default)
const objPayload = {
  name: "Admin",
  msg: "Hello Rahul!",
};

// notify(...objPayload); // TypeError

// ✅ Fix: Object.values() creates an array ['Admin', 'Hello Rahul!'], which can then be safely spread.
notify(...Object.values(objPayload));
// 'Admin sent: Hello Rahul!'
```
---
&nbsp;
<!-- PAGINATION_START -->

📁 [1. Basics](../1.%20Basics/)  

◀️ [Nested Destructuring Assignment [ES6]](12.2-nested-destructuring.md)  

▶️ [**"..."** Rest Operator [ES6]](14-rest-operator.md)

<!-- PAGINATION_END -->
&nbsp;
