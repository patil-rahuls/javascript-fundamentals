## Data Structures > Object > Getter & Setter

Every Object in Javascript has two important properies:

> **getter** is invoked by ***get***.

> **setter** is invoked by ***set***.

***IMP***: _They are "properties", not "methods"_

```javascript
const myObj = {
  firstName: "Rahul",
  lastName: "Patil",

  // getter
  get info() {
    return `Full Name : ${this.lastName}  ${this.firstName}`;
  },

  // setter must have exactly ONE parameter COMPULSORY.
  set info(lName) {
    this.lastName = lName;
  },
};

myObj.info;
// No parens here.

myObj.info = "P";
// No parens here too.

```
_We didn't use parens with the getters and setters. We access them just like a property._

_Is Poymorphism achieved here?_

_I know 'info' here is a property and not function, but at the end, what we get is a similar 'functionality' out of it !!_

---
&nbsp;
<!-- PAGINATION_START -->

📁 [Data Structures](../../2.%20Data%20Structures/) → [Objects](../Objects/)
  
◀️ [Data Structures > Objects > Object Delete Properties](05-object-delete-properties.md)  

▶️ [Data Structures > Objects > Object This Keyword](07-object-this-keyword.md)

<!-- PAGINATION_END -->
&nbsp;
