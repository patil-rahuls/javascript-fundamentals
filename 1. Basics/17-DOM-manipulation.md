## DOM-manipulation

```
[HTML]<->[DOM Tree]<->[DOM-API]<->{JS Code}
```

_**DOM Manipulation**: allows JavaScript to dynamically create, modify, structure, and style elements on a webpage._

&nbsp;

> ### 1. What is DOM ?

Document Object Model. It's an interface between the
javascript code and the browser.

DOM tree is generated from an HTML document, which we can then interact with, using javascript.

We write javascript code to create, modify and delete HTML elements, set styles, set classes and attributes, and listen and respond to the events that we attach to them.

&nbsp;

> ### 2. DOM API?

Allows you to modify a DOM tree in any way you want.

We can edit the DOM of a document using JavaScript to access the `document` property of the global object.

&nbsp;

> ### 3. What are NodeList and HTMLCollection?

Both the NodeList and HTMLCollection contain HTML elements that we query from javascript. The

HTMLCollection changes in real time when we make changes in the DOM.

But the same does not happen with NodeList.

&nbsp;

> ### 4. Querying the elements

> **_`document.querySelector()`_**
>
> _Returns a SINGLE (first matching) element. We provide CSS selectors to these methods._

```javascript
// Selecting by class
document.querySelector(".messageDiv");

// Selecting by id
document.querySelector("#message");

// multiple selectors
document.querySelector(".messageDiv, #message, div.main p");
```

_Use querySelector when you need flexibility, such as selecting nested elements, matching complex CSS paths, or writing unified selection code._

&nbsp;

> **_`document.querySelectorAll()`_**
>
> _Returns a NodeList(non-live) of matching elements._

```javascript
const tblRows = document.querySelectorAll("table tr");
```

&nbsp;

> **_`document.getElementById()`_**
>
> _Use getElementById when you want the fastest performance and only need to find an element by its exact ID string._
>
> _It is highly optimized and noticeably faster because the browser engine uses a direct internal lookup map of ID keys._

```javascript
document.getElementById("show");
```

&nbsp;

> **_`document.getElementsByTagName()`_**
>
> _Returns an HTMLCollection of matching elements._

```javascript
document.getElementsByTagName("button");
```

&nbsp;

> **_`document.getElementsByClassName()`_**

_Returns an HTMLCollection of matching elements._

```javascript
document.getElementsByClassName("account");
```

&nbsp;
> ### 5. DOM Manipulation

> **_`.textContent`_** & **_`.value`_**
>
> _Getting and setting labels (non -inputs):_
>
> _No Paranthesis `()` around them, i.e. they are `getters` and `setters`._


```javascript
document.querySelector(".messageDiv").textContent;

document.querySelector(".messageDiv").textContent = "Hi!";

document.querySelector(".guess").value;

document.querySelector(".guess").value = 44;
```

&nbsp;

> **Changing CSS properties:**

```javascript
document.querySelector("body").style.backgroundColor = "#efefef";

document.querySelector("body").style.width = "200px";
```

&nbsp;

> **_`.prepend()`_** & **_`.append()`_**
>
> _Inserts element as `Child` at the beginning / end of an element.:_

```javascript
const header = document.querySelector(".header");

const msg = document.createElement("div");

msg.classList.add("cookie-msg");

msg.innerHTML = "Accept Cookies <button> OK </button>";

header.prepend(msg);
// Adds as a first child
// to the header element.

header.append(msg);
// Adds as a last child
// to the header element.
// That means it just moved
// the element, not copied.
```

&nbsp;

> **_`.cloneNode()`_**
>
> _Creates multiple copies of same element:_

```javascript
header.append(msg.cloneNode(true));
// It now creates its own clone.
```

&nbsp;

> **_`.before()`_** & **_`.after()`_**
>
> _Inserts an element before / after an element:_

```javascript
// Before header element
header.before(msg);

// After header element
header.after(msg);
```

&nbsp;

> **_`.remove()`_** & **_`.removeChild()`_** 
>
> _Delete an element:_

```javascript
// New Way
msg.remove();

msg.parentElement.removeChild(msg);
// DOM Traversing. Old Way
```

&nbsp;

> **_`.getComputedStyle()`_**
>
> _Returns style attributes of an element:_

```javascript
const msgStyle = getComputedStyle(msg);

if (msgStyle.color == "#000") {
  msgStyle.color = "red";
}

msgStyle.height = Number.parseFloat(msgStyle.height, 10) + 30 + "px";
```

&nbsp;

> **_Return standard attributes of an element:_**

```javascript
const loginBTN = document.querySelector("#section-2");
// Standard Attributes.

console.log(loginBTN.src);

console.log(loginBTN.alt);

console.log(loginBTN.classList);

console.log(loginBTN.className);
```

&nbsp;

> **_`.getAttribute()`_**
>
> _Returns non-standard attributes like the ones defined by user._

```javascript
console.log(loginBTN.getAttribute("data-rel"));

console.log(loginBTN.getAttribute("custom-title"));
```

&nbsp;

> **_`.setAttribute()`_**
>
> _Sets non-standard attributes_

```javascript
// Non standard
loginBTN.setAttribute("data-hidden", "3445645645");

// standard
loginBTN.alt = "Login key";
```

&nbsp;

> **_`.src`_**
>
> _Gets Complete and Relative url._

```javascript
loginBTN.src;
// returns complete url 'http://...'

loginBTN.getAttribute("src");
// returns relative url
```

&nbsp;

> **Data Attributes:**

```javascript
loginBTN.dataset;
```

&nbsp;

> **_`classList.add()`_ & _`classList.remove()`_**
> 
> _Adds / removes classes in the HTML element._

```javascript
loginBTN.classList.add('btn-dark');

loginBTN.classList.remove('btn-light');

loginBTN.classList.toggle('btn-x'); *

loginBTN.classList.contains('check-class-exists');

```

&nbsp;
> ### 6. Events & Event Listeners

> **Keypress events:**
>
> _keyboard events are global events._
>
> _Some of them are: `keydown` , `keyup` and `keypress`._
> 
> ```javascript
> document.addEventListener("keydown", function () {
>   console.log("A Key was pressed.");
> });
> ```
> 
> _When an event occurs, Javascript generates an object that contains all info about that event._
>
> _We use that object to handle the event in the handler function. We pass that event object as an argument to the callback function._
> 
> ```javascript
> document.addEventListener("keydown", function (eventObj) {
>   console.log(eventObj.key);
>   // Access property 'key' of Event Object
> 
>   if (eventObj.key === "Escape") {
>     alert("Escape was pressed.");
>   }
> });
> ```


&nbsp;

> _`clicks`, `scrolls` are some more events that happen
> on a webpage. We can write functions that react to
> such events._

```javascript
document.querySelector(".myButton").addEventListener("click", function () {
  // This is called a callback function
  alert("Hi");
});
```

_A more cleaner way would be by separately defining a callback function and re-using it-_

```javascript
const myFunc = function () {
  console.log("Hi there!");
};

document.querySelector(".myButton").addEventListener("click", myFunc());
```

---

---

<!-- PAGINATION_START -->

**Parent:** [1. Basics](..)  
**Previous:** [Console Methods](16-console.md)  
**Next:** [2. Data Structures > Array > Initialization](../2.%20Data%20Structures/Arrays/01-initialization.md)

<!-- PAGINATION_END -->
