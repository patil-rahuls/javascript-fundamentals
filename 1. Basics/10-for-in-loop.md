## `for...in` Loop

`for...in` iterates over enumerable property i.e. `keys/index` of an object.

> Example 1: Array

```javascript
let list = [4, 5, 6];
for (let i in list) {
  console.log(i);
  // "0", "1", "2"
}
```

&nbsp;
> Example 2: Object

```javascript
var employee = {
  id: "123",
  name: "Rahul",
  address: "India",
  salary: "LOL"
}
for(const i in employee){
  console.log(i);
}
// id
// name
// address
// salary
```

---
