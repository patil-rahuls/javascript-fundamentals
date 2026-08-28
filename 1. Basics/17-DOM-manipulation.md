## DOM-manipulation

```
[HTML]<->[DOM Tree]<->[DOM-API]<->{JS Code}
```

_DOM Manipulation allows JavaScript to dynamically create, modify, structure, and style elements on a webpage._

&nbsp;

### 1. What is DOM ?

Document Object Model. It's an interface between the
javascript code and the browser.

DOM tree is generated from an HTML document, which we can then interact with, using javascript.

We write javascript code to create, modify and delete HTML elements, set styles, set classes and attributes, and listen and respond to the events that we attach to them.

&nbsp;

### 2. DOM API?

Allows you to modify a DOM tree in any way you want.

We can edit the DOM of a document using JavaScript to access the **document** property of the global object.

&nbsp;

### 3. What are NodeList and HTMLCollection?

Both the NodeList and HTMLCollection contain HTML elements that we query from javascript. The

HTMLCollection changes in real time when we make changes in the DOM.

But the same does not happen with NodeList.

&nbsp;

### 4. Querying the elements

**document.querySelector()**

_Returns a SINGLE (first matching) element. Accepts CSS selectors as parameters._

```javascript
// Selecting by class
document.querySelector(".messageDiv");

// Selecting by id
document.querySelector("#message");

// multiple selectors
document.querySelector(".messageDiv, #message, div.main p");

```

Use querySelector when you need flexibility, such as selecting nested elements, matching complex CSS paths, or writing unified selection code.

&nbsp;

**document.querySelectorAll()**

_Returns a NodeList(non-live) of matching elements._

```javascript
const tblRows = document.querySelectorAll("table tr");

```

&nbsp;

**document.getElementById()**

Use getElementById when you want the fastest performance and only need to find an element by its exact ID string.

It is highly optimized and noticeably faster because the browser engine uses a direct internal lookup map of ID keys.

```javascript
document.getElementById("show");

```

&nbsp;

**document.getElementsByTagName()**

_Returns an HTMLCollection of matching elements._

```javascript
document.getElementsByTagName("button");

```

&nbsp;

**document.getElementsByClassName()**

_Returns an HTMLCollection of matching elements._

```javascript
document.getElementsByClassName("account");

```

&nbsp;
### 5. DOM Manipulation

**.textContent** & **.value**

_Gets and sets labels (non-inputs):_

_No Paranthesis **()** around them, i.e. they are **getters** and **setters**._


```javascript
document.querySelector(".messageDiv").textContent;

document.querySelector(".messageDiv").textContent = "Hi!";

document.querySelector(".guess").value;

document.querySelector(".guess").value = 44;

```

&nbsp;

**Changing CSS properties:**

```javascript
document.querySelector("body").style.backgroundColor = "#efefef";

document.querySelector("body").style.width = "200px";

```

&nbsp;

**.prepend()** & **.append()**

_Inserts element as **Child** under another element at the beginning / end._

```javascript
const header = document.querySelector(".header");

const msg = document.createElement("div");

msg.classList.add("cookie-msg");

msg.innerHTML = "Accept Cookies <buttonOK </button>";

header.prepend(msg);
// Adds as a first child to the header element.

header.append(msg);
// Adds as a last child to the header element.
// That means it just moved the element, not copied.

```

&nbsp;

**.cloneNode()**

_Creates multiple copies of same element:_

```javascript
header.append(msg.cloneNode(true));
// It now creates its own clone.

```

&nbsp;

**.before()** & **.after()**

_Inserts an element before / after an element:_

```javascript
// Before header element
header.before(msg);

// After header element
header.after(msg);

```

&nbsp;

**.remove()** & **.removeChild()** 

_Delete an element:_

```javascript
// New Way
msg.remove();

msg.parentElement.removeChild(msg);
// DOM Traversing. Old Way

```

&nbsp;

**.getComputedStyle()**

_Returns style attributes of an element:_

```javascript
const msgStyle = getComputedStyle(msg);

if (msgStyle.color == "#000") {
  msgStyle.color = "red";
}

msgStyle.height = Number.parseFloat(msgStyle.height, 10) + 30 + "px";

```

&nbsp;

Return standard attributes of an element:

```javascript
const loginBTN = document.querySelector("#section-2");
// Standard Attributes.

console.log(loginBTN.src);

console.log(loginBTN.alt);

console.log(loginBTN.classList);

console.log(loginBTN.className);

```

&nbsp;

**.getAttribute()**

_Returns non-standard attributes like the ones defined by user._

```javascript
console.log(loginBTN.getAttribute("data-rel"));

console.log(loginBTN.getAttribute("custom-title"));

```

&nbsp;

**.setAttribute()**

_Sets non-standard attributes_

```javascript
// Non standard
loginBTN.setAttribute("data-hidden", "3445645645");

// standard
loginBTN.alt = "Login key";

```

&nbsp;

**Complete and Relative url**

```javascript
loginBTN.src;
// returns complete url 'http://...'

loginBTN.getAttribute("src");
// returns relative url

```

&nbsp;

**Data Attributes:**

```javascript
loginBTN.dataset;

```

&nbsp;

**classList.add() & classList.remove()**

_Adds / removes classes in the HTML element._

```javascript
loginBTN.classList.add('btn-dark');

loginBTN.classList.remove('btn-light');

loginBTN.classList.toggle('btn-x'); *

loginBTN.classList.contains('check-class-exists');

```

&nbsp;
### 6. Events & Event Listeners

Example 
```javascript
document.addEventListener("keydown", function () {
  console.log("A Key was pressed.");
});

```
When an event occurs, JavaScript generates an event-object that contains all info about that event.

We pass that event-object as an argument to the callback function.

&nbsp;

**Keypress events:**
**keydown**, **keyup** and **keypress**.


Example 
```javascript
document.addEventListener("keydown", function (eventObj) {
  console.log(eventObj.key);
  // Access property 'key' of Event Object

  if (eventObj.key === "Escape") {
    alert("Escape was pressed.");
  }
});

```

&nbsp;

**Mouse events:**

**click** and **scroll**.


```javascript
document.querySelector(".myButton").addEventListener("click", function () {
  // This is a callback function
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
&nbsp;
<!-- PAGINATION_START -->

📁 [1. Basics](../1.%20Basics/)  

◀️ [Console Methods](16-console.md)  

▶️ [Data Structures](../2.%20Data%20Structures/)

<!-- PAGINATION_END -->
&nbsp;
