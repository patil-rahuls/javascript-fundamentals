## Data Structures > Maps

> ***Maps are high performance key - value paired data structure.***
>
> ***In Objects keys can only be strings (without quotes), but in Maps, keys can be any type.***

&nbsp;
### Converting Maps to Objects & Arrays

> ### _Convert Map to Array_
> Spread Operator `...` is used to convert a Map to an Array.
```javascript
const question = new Map(...);

const questionArray = [...question];
```

&nbsp;
> ### Convert Array to Map
> _Array has to be of 'entries' items_
```javascript
const entriesArr = [
  [ 'name' , 'Rahul'],
  [ 'age' , 25],
];

const myMap = new Map(entriesArr);
```

&nbsp;
> ### Convert Map to Object
> `Object.fromEntries()` is used to convert a Map to an Object.

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
> ### Convert Object to Map
> `Object.entries()` is used to convert an Object to a Map.
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
