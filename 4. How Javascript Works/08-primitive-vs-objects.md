## Primitive vs Object References

> ### Primitives

```javascript
let age = 29;
let oldAge = age;

age = 30; // Update the copy

console.log(age); // 30
console.log(oldAge); // 29

// Original value remains unchanged.
```

> ### Objects

```javascript
const user = {
  name: "Rahul",
  age: 29,
};

const newUser = user;
user.age = 30; // Update the copy

console.log(user.age); // 30
console.log(newUser.age); // 30

// Original object gets mutated.
```

> **_Primtive types are stored in the CALL STACK_**

> **_The Reference Values are Objects and are stored in the HEAP._**

&nbsp;

## How Primitive vs Object References are stored in the memory

Let's capture it digramatically.

> ### `Primitives`
>
> ```javascript
> let age = 29;
> let oldAge = age;
> age = 30;
> /*
> |------------Call Stack-------------|
> | Identifier      Address     Value |
> |     age          0001         29  |
> |    oldAge      (points^)      29  |
> |     age          0002         30  |
> |___________________________________|
> */
> ```
>
> **Inside Call Stack**
>
> | Identifier |   Address   | Value |                                                    What Happens |
> | :--------: | :---------: | ----: | --------------------------------------------------------------: |
> |   `age`    | **`0001`**  |    29 |     _**29** stored @ **`0001`** and `age` points to **`0001`**_ |
> |  `oldAge`  | **points^** |    29 |             _`oldAge` points to **`0001`**, so `oldAge`=**29**_ |
> |   `age`    | **`0002`**  |    30 | _**30** stored @ **`0002`** and `age` now points to **`0002`**_ |
> |            |             |       |
>
> **_Primitive values don't get mutated. instead, new value gets stored in the Call stack, and the new variable points to that location._**

&nbsp;

> ### `Objects`
>
> ```javascript
> const user = {
>   name: "Rahul",
>   age: 29,
> };
> const newUser = user;
> user.age = 30;
>
> /*
> |----------Call Stack--------|   |-----------HEAP-------------|
> | Identifier  Address  Value |   | Address   Value            |
> |                            |   |  AA01     { ...            |
> |                            |   |            name: "Rahul"   |
> |   user       0003    AA01  |   |            age: 29         |
> |  newUser   (points^)       |   |           }                |
> |                            |   |           (^ age: 30)      |
> |____________________________|   |____________________________|
> */
> ```
>
> **Inside Call Stack**
>
> | Identifier |   Address   |  Value |
> | :--------: | :---------: | -----: |
> |   `user`   | **`0003`**  | `AA01` |
> | `newUser`  | **points^** |        |
> |            |             |
>
> **Heap**
>
> | Address |                      Value |
> | :-----: | -------------------------: |
> | `AA01`  | { name: "Rahul", age: 29 } |
> |         |        _^age: 30 (update)_ |
> |         |                            |
>
> _The `user` and `newUser` are `Reference Values`._
>
> _They hold reference to the Object stored in Heap. Hence, any changes to be made to the Object _`(user.age = 30;)`_ are done in the Heap, and not in the Call Stack._
>
> **Therefore, we are able to mutate the Object while defining it as `const` variable.**

Remember the `pass by reference` topic?
In Javascript, we pass references, NOT PASS BY REFERENCES.

---

---

<!-- PAGINATION_START -->

**Parent:** [4. How Javascript Works](..)  
**Previous:** [Hoisting and TDZ Temporal Dead Zone](07-hoisting-TDZ.md)  
**Next:** [Event Loop](09.1-event-loop.md)

<!-- PAGINATION_END -->
