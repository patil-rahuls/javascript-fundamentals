## Data Structures > Object

### Delete Object Properties

Consider this object as an example.

```javascript
const myObj = {
  firstName: "Rahul",
  lastName: "Patil",
  age: 2049 - 2024,
};
```

> ### 1. Using `delete` keyword.
>
> _Mutates the original Object._
> 
> ```javascript
> delete myObj.age;
> 
> myObj.hasOwnProperty("age");
> // false
> ```

> ### 2. Using Destructuring.
>
> _If you want a new object with all keys except some._
> 
> _This doesn't mutate the original Object._
> 
> ```javascript
> const { age: _, ...newObj } = myObj;
> // _ is a throwaway variable that we 
> // use for variables that we don't 
> // want to use OR ignore.
> 
> console.log(newObj);
> /*
> {
>   firstname: 'Rahul',
>   lastname: 'Patil'
> }
> */
> 
> newObj.hasOwnProperty("age");
> // false
> 
> console.log(myObj);
> // myObj remains unchanged
> ```

&nbsp;

---

---

<!-- PAGINATION_START -->

**Parent:** [Data Structures](../../2.%20Data%20Structures/) → [Objects](../Objects/)
  
**Previous:** ← [Data Structures > Objects > Object Methods](04-object-methods.md)  

**Next:** → [Data Structures > Objects > Object Getter Setter](06-object-getter-setter.md)

<!-- PAGINATION_END -->
