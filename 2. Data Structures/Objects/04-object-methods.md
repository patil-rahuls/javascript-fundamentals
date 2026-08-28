## Data Structures > Object > Methods

Consider this object as an example.

```javascript
const myObj = {
  firstName: "Rahul",
  lastName: "Patil",
  age: 2049 - 2024,
};

```

Functions inside an object are called methods.

Methods have a **_receiver_** while functions do not.

```javascript
myObj.greet = function (user) {
  console.log(`Hello '${user}' !! What up !`);
};

console.log(myObj);
/* Object {
   firstName : 'Rahul',
   lastName : 'Patil',
   age : 25,
   greet: function(user){
     console.log(`Hello '${user}' !! What up !`);
   },
 };
*/

// Object method call
myObj.greet("Reader");

```
_'myObj' is the receiver and 'greet()' is the method_

A method is associated with an object. Compare that with a function invocation:
```javascript
const sayHi = () => console.log(`Hi there !!`);

sayHi();

```
_Notice, there is no receiver here. The receiver is what separates a function from a method._

Method call using dot notation is preferred - _easy to read_
```javascript
myObj.greet("Reader");

```

Method call using bracket notation - _difficult to read_
```javascript
myObj["greet"]("Reader");

```

---
&nbsp;
<!-- PAGINATION_START -->

📁 [Data Structures](../../2.%20Data%20Structures/) → [Objects](../Objects/)
  
◀️ [Data Structures > Objects > Object Retrieve Properties](03-object-retrieve-properties.md)  

▶️ [Data Structures > Objects > Object Delete Properties](05-object-delete-properties.md)

<!-- PAGINATION_END -->
&nbsp;
