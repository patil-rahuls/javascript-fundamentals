## Data Structures > Object

### Assign Object Properties

Consider this object as an example.

```javascript
const myObj = {
  firstName: "Rahul",
  lastName: "Patil",
  age: 2049 - 2024,
};
```

> ### Assigning values using DOT notation.

```javascript
myObj.habbit = "eating";

console.log(myObj);
/*
{
  firstName : 'Rahul',
  lastName : 'Patil',
  age : 25,
  habbit:'eating'
}
*/
```

> ### Assigning values using bracket notation.

```javascript
myObj["veg"] = true;

console.log(myObj);
/*
{
  firstName : 'Rahul',
  lastName : 'Patil',
  age : 25,
  habbit:'eating',
  veg:true,
}
*/
```

---

&nbsp;

> **IMP: When Object property is a number**

```javascript
// ❌ Incorrect
myObj.9820694183  = 'mobile';


// ✅ Correct
myObj[9820694183] = 'mobile';

```

&nbsp;

> **IMP: Dynamic/Computed property name should always be provided inside `[]` _i.e. using Bracket notation_.**

```javascript
const prop = "name";
const obj = {};

obj.prop = "Rahul";
// obj ->  { prop: 'Rahul' }

obj[prop] = "Rahul";
// obj -> { name: 'Rahul' }
```

---

---

<!-- PAGINATION_START -->

**Parent:** [Objects](..)  
**Previous:** [Data Structures > Objects > Objects](01-objects.md)  
**Next:** [Data Structures > Objects > Object Retrieve Properties](03-object-retrieve-properties.md)

<!-- PAGINATION_END -->
