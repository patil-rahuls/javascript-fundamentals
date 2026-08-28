## Data Structures > Object > Comparision

Consider this object as an example.

```javascript
const myObj = {
  firstName: "Rahul",
  lastName: "Patil",
  age: 2049 - 2021,
};

const yourObj = {
  firstName: "test",
  lastName: "Test",
  age: 2049 - 2021,
};

```

A handy way to compare two objects in JS would be:
```javascript
JSON.stringify(a) === JSON.stringify(b);
// true

```
_Works when you have simple same-order JSON-style objects without methods and DOM nodes inside._

_Also, the ORDER of the properties is important. Following objects comparision will return false._

```javascript
x = { a: 1, b: 2 };
y = { b: 2, a: 1 };

JSON.stringify(x) === JSON.stringify(y);
// false

```
---
&nbsp;

_(Optional Read)_

> Interview Question - _Create a function to compare any number of objects. The properties in the objects can be in any order._

```javascript
x = { name: "Rahul", age: 29 };
y = { age: 29, name: "Rahul" };

function areEqual(...objArr) {
  // Create a deep/independent copy of objArr, so that we dont mutate the passed objArr.
  const ipArr = [...objArr];

  // Get first obj from the objArr
  const firstObj = ipArr.shift();
  // Now ipArr will be left with the remaining obj except first.

  const lengthComparisionResult = ipArr.reduce((acc, obj) => {
    const currObjLen = Object.keys(obj).length;
    if (currObjLen === Number(acc)) {
      return currObjLen;
      // Return actual length of keys if all obj sizes are same
    } else {
      return false;
      // Return boolean type for incorrect obj sizes
    }
  }, Object.keys(firstObj).length);

  // This is called a gaurd clause. i.e. checking for errors early and exiting.
  if (!lengthComparisionResult) {
    return false;
  }

  // Now that we have same length of keys in all obj, check if they all have the same properties.
  return ipArr.every((obj) => {
    // Compare each obj of ipArr with firstObj.
    let keysComparisionResult = false;
    for (const [prop, val] of Object.entries(obj)) {
      if (firstObj?.[prop] === val) {
        keysComparisionResult = true;
      } else {
        keysComparisionResult = false;
      }
    }
    return keysComparisionResult;
  });
}
```
---
&nbsp;
<!-- PAGINATION_START -->

📁 [Data Structures](../../2.%20Data%20Structures/) → [Objects](../Objects/)
  
◀️ [Data Structures > Objects > Object Clones](12-object-clones.md)  

▶️ [Data Structures > Sets](../Sets/)

<!-- PAGINATION_END -->
&nbsp;
