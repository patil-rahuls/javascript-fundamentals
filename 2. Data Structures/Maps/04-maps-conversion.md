## Data Structures > Maps

### Converting Maps to Objects & Arrays

Maps are high performance key - value paired data structure.

In Objects keys can only be strings (without quotes), but in Maps, keys can be any type.

### Convert Map to Array - spread operator

```javascript
const question = new Map(...);

const questionArray = [...question];
```

&nbsp;

### Convert Array to Map (Array has to be of 'entries' items)

```javascript
const entriesArr = [
  [ 'name' , 'Rahul'],
  [ 'age' , 25],
];

const myMap = new Map(entriesArr);
```

&nbsp;

### Convert Map to Object - `Object.fromEntries()`

```javascript
const userMap = new Map([
  [ 'name' , 'Rahul'],
  [ 'age' , 25],
]);

const myObj = Object.fromEntries(userMap);
/*
{
  name: 'Rahul',
  age: 25
}
*/
```

&nbsp;

### Convert Object to Map - `Object.entries()`

```javascript
const myObj = {
  name: 'Rahul',
  age: 25
};

const myMap = new Map(Object.entries(myObj)));

console.log(myMap);
/*
[
  [ 'name' , 'Rahul'],
  [ 'age' , 25],
]
*/
```

---
