## Data Structures > Object

### Object Getter & Setter

Every Object in Javascript has two important properies :

- getter "get"
- setter "set"

> IMP: Remember! they are "properties", not "methods"

```javascript
const myObj = {
  firstName : 'Rahul',
  lastName : 'Patil',

  // getter
  get info(){
    return `Full Name : ${this.lastName}  ${this.firstName}`;
  },

  // setter must have exactly ONE parameter COMPULSORY.
  set info(lName){
    this.lastName = lName;
  }
};

myObj.info;
// We didn't use parens here like 'myObj.info()'. We access the getter just like a property.

myObj.info = "P";
// No parens here too.
```

_**Is Poymorphism achieved here?**_

_I know 'info' here is a property and not function, but at the end, what we get is a 'functionality' out of it !!_

---
