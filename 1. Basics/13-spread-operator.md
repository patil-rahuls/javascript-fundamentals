## Spread Operator `"..."` <sup>_ES6_</sup>

`"..."` is on the RHS of `=` assignment.

> **_unpacks elements of iterable objects such as Arrays, Sets, Maps and Objects into a list._**

> **Spread Operator can only be used in the following cases:**
>
> 1. **_Expanding/Merging an iterable._**
> 2. **_As a function argument._**
> 3. **_Copy iterables._**

> **_There can be more than one spread element in an expression._**

&nbsp;

> Example 1: Expanding an Iterable

```javascript
// Expanding an Array
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
// ['JavaScript', 'TypeScript', 'Node.js',
// 'Express', 'React', 'AWS Cloud', 'Docker',
// 'Redux']

console.log(...updatedTech);
// 'JavaScript', 'TypeScript', 'Node.js',
// 'Express', 'React', 'AWS Cloud', 'Docker',
// 'Redux'

// Expanding an Object
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

&nbsp;

> Example 2: Merging Iterables.

```javascript
// Merging Arrays
const first = [1, 2, 3, 4];
const second = ["Admin", "Root"];

const joinedArr = [...first, ...second];

console.log(joinedArr);
// [1, 2, 3, 4, 'Admin', 'Root']

// Merging Objects
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
  city: "Pune"
  country: 'India',
}
*/
```

&nbsp;

> Example 3: Copy Iterables (Deep Copy)
>
> ```javascript
> // Copy a flat array
> const first = [1, 2, 3, 4];
>
> const firstCopy = [...first];
>
> console.log(firstCopy);
> // [1, 2, 3, 4]
>
> // Copy a flat object
> const user = {
>   name: "Rahul",
>   age: 25,
>   city: "Pune",
> };
>
> const temp = { ...user };
>
> console.log(temp);
> /*
> {
>   name: "Rahul",
>   age: 25,
>   city: "Pune"
> }
> */
> ```
>
> _The examples above created deep copies._
>
> _In case of flat structures (no nested array/object), this creates a deep copy._

However, if the object or array contains nested objects or arrays, it only copies the memory reference to those inner elements rather than making fresh duplicates.

&nbsp;

> Example 4: Copy Iterables (Shallow Copy)

```javascript
// Copy a nested object
const user = {
  name: "Rahul",
  age: 25,

  address: {
    city: "Pune",
  },
};

// Shallow copy using the spread operator
const copy = { ...user };

copy.name = "Raj";
// Changes top-level primitive

copy.address.city = "Mumbai";
// Mutates the nested object reference

console.log(user.name);
// "Rahul" (Unchanged)

console.log(user.address.city);
// "Mumbai" (CHANGED! Both share the reference)
```

&nbsp;

> Example 5: As a Function argument

```javascript
function notify(name, msg) {
  console.log(`${name} sent: ${msg}`);
}

// Using an array
const payload = ["Admin", "Hello Rahul!"];

notify(...payload);
// 'Admin sent: Hello Rahul!'

// Using an Object
const objPayload = {
  name: "Admin",
  msg: "Hello Rahul!",
};

// ❌ incorrect
notify(...objPayload);

// ✅ Fix:
// Object.values(objPayload) creates
// ['Admin', 'Hello Rahul!'], which
// can then be safely spread.

notify(...Object.values(payload));
// 'Admin sent: Hello Rahul!'
```

---

---

<!-- PAGINATION_START -->

**Parent:** [1. Basics](..)  
**Previous:** [Nested Destructuring Assignment [ES6]](12.2-nested-destructuring.md)  
**Next:** [`"..."` Rest Operator [ES6]](14-rest-operator.md)

<!-- PAGINATION_END -->
