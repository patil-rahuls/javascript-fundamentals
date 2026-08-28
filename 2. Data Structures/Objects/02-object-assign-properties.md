## Data Structures > Object > Assign Properties

Consider this object as an example.

```javascript
const myObj = {
  firstName: "Rahul",
  lastName: "Patil",
  age: 2049 - 2024,
};

```

### Assigning values using dot notation.

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

### Assigning values using bracket notation.

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

&nbsp;

***IMP***: _When property is a number._

```javascript
// ❌ Incorrect
myObj.9820694183  = 'mobile';


// ✅ Correct
myObj[9820694183] = 'mobile';

```

***IMP***: _Dynamic/computed property name should always be provided inside **[]** i.e. using bracket notation._

```javascript
const prop = "name";
const obj = {};

obj.prop = "Rahul";
// obj - { prop: 'Rahul' }

obj[prop] = "Rahul";
// obj - { name: 'Rahul' }

```

---
&nbsp;
<!-- PAGINATION_START -->

📁 [Data Structures](../../2.%20Data%20Structures/) → [Objects](../Objects/)
  
◀️ [Data Structures Objects Objects](01-objects.md)  

▶️ [Data Structures Objects Object Retrieve Properties](03-object-retrieve-properties.md)

<!-- PAGINATION_END -->
&nbsp;
