## Data Structures > Object

### Assign Object Properties

Consider this object as an example.
```javascript
const myObj = {
  firstName : 'Rahul',
  lastName : 'Patil',
  age : 2049-2024,
};
```

### Assigning values using DOT notation.
```javascript
myObj.habbit = 'eating';

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

### Assigning values using bracket notation.
```javascript
myObj['veg'] = true;

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

> IMP: When Object property is a number

```javascript
myObj.9820694183  = 'mobile';
// ❌ Incorrect

myObj[9820694183] = 'mobile';
// ✅ Correct
```

&nbsp;

> IMP: Dynamic/Computed property name should always be provided inside [] i.e. using Bracket notation.

```javascript
const prop = 'name';
const obj = {};

obj.prop = 'Rahul';
// obj ->  { prop: 'Rahul' }

obj[prop] = 'Rahul';
// obj -> { name: 'Rahul' }
```
---