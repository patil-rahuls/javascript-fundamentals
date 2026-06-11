## Default function parameters [ES6]

> Example: **_Default value parameters always at the end_**
>
> ```javascript
> function sum(x, y = 10) {
>   return x + y;
> }
>
> console.log(sum(5));
> // 15
> ```

&nbsp;

> Example: **_efault parameter is ignored when `null` is passed._**
>
> ```javascript
> function sum(x = 10, y) {
>   return x + y;
> }
>
> console.log(sum(undefined, 5));
> // 15
>
> console.log(sum(null, 5));
> // 5
> ```
>
> _Default parameters are only triggered if an argument is `undefined` (or missing)._
>
> _`null` is treated as a valid deliberate value, so the default parameter is ignored._

&nbsp;

> Example: **_Expression as a parameter's default value_**
>
> We can have an expression to compute default value.
>
> ```javascript
> function userName(fullName, nickName = fullName.split(" ")[0]) {
>   console.log(`Nickname of ${fullName} is $ {nickName}`);
> }
> // Here, the default value to nickName
> // would be computed from fullName if
> // not provided explicitly.
>
> userName("Rahul Patil");
> // 'Nickname of Rahul Ratil is Rahul'
>
> userName("Hitesh Tiwari", "Lav");
> // 'Nickname of Hitesh Tiwari is Lav'
>
> myFunc("Aajesh", undefined);
> // 'Nickname of Aajesh is Aajesh'
> ```
>
> Setting default param value as `undefined` is the same as not setting the value.
>
> _This means that parameters (without a default value) in a function are set to `undefined` initialy._

&nbsp;

> Example: **_By default, the value of a function parameter is `undefined` if default values are not provided._**
>
> ```javascript
> function show(a, b) {
>   if (a) {
>     console.log("this");
>   }
>   if (b) {
>     console.log("that");
>   }
> }
>
> show();
> // undefined
>
> show(1);
> // this
>
> show(undefined, 1);
> // that
>
> show(1, 1);
> // this that
> ```

---

---

<!-- PAGINATION_START -->

**Parent:** [3. Functions](..)  
**Previous:** [2. Data Structures > Which DS to use](../2.%20Data%20Structures/00-which-ds-to-use.md)  
**Next:** [Pass by Value and Pass by Reference](02-pass-by-value-and-reference.md)

<!-- PAGINATION_END -->
