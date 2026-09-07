## DOM Manipulation

> 🎯
> **`[HTML] ↔️ [DOM Tree] ↔️ [DOM API] ↔️ {JS Code}`**
>
> DOM Manipulation allows JavaScript to dynamically create, modify, structure, and style elements on a webpage.

---
&nbsp;

### 1. What is the DOM?
The **Document Object Model (DOM)** is an interface between JavaScript code and the browser.
*   The DOM tree is generated from an HTML document.
*   We use JavaScript to interact with it: creating, modifying, and deleting HTML elements, setting styles, classes, attributes, and responding to events.

### 2. What is the DOM API?
It is the set of tools that allows you to modify a DOM tree. We edit the DOM using JavaScript by accessing the **`document`** property of the global object.

### 3. NodeList vs. HTMLCollection
Both contain HTML elements queried from JavaScript, but they behave differently:
*   **HTMLCollection:** **Live** collection (changes in real-time when updates are made in the DOM).
*   **NodeList:** **Non-live** collection (static; does not update automatically when the DOM changes).


### 4. Querying the Elements

*   **`document.querySelector()`**
    *Returns a SINGLE (first matching) element. Accepts standard CSS selectors. Use this for flexibility (nested elements, complex CSS paths).*
    ```javascript
    document.querySelector(".messageDiv"); // By class
    document.querySelector("#message");    // By id
    document.querySelector(".messageDiv, #message, div.main p"); // Multiple selectors
    ```

*   **`document.querySelectorAll()`**
    *Returns a **NodeList** (non-live) of all matching elements.*
    ```javascript
    const tblRows = document.querySelectorAll("table tr");
    ```

*   **`document.getElementById()`**
    *Returns a SINGLE element. Use this for the **fastest performance** when you only need to find an element by its exact ID string.*
    ```javascript
    document.getElementById("show");
    ```

*   **`document.getElementsByTagName()`**
    *Returns an **HTMLCollection** (live) of matching elements.*
    ```javascript
    document.getElementsByTagName("button");
    ```

*   **`document.getElementsByClassName()`**
    *Returns an **HTMLCollection** (live) of matching elements.*
    ```javascript
    document.getElementsByClassName("account");
    ```

### 5. DOM Manipulation Methods

#### Reading and Writing Values
*No parentheses **`()`**—these are properties (getters/setters).*
```javascript
// Text content (Labels/Divs)
document.querySelector(".messageDiv").textContent; // Get
document.querySelector(".messageDiv").textContent = "Hi!"; // Set

// Input values
document.querySelector(".guess").value; // Get
document.querySelector(".guess").value = 44; // Set
```

#### Changing CSS Properties
```javascript
document.querySelector("body").style.backgroundColor = "#efefef";
document.querySelector("body").style.width = "200px";
```

#### Inserting Elements (**`.prepend()`**, **`.append()`**)
*Inserts an element as a **child** inside another element (at the beginning or end).*
```javascript
const header = document.querySelector(".header");
const msg = document.createElement("div");

msg.classList.add("cookie-msg");
msg.innerHTML = "Accept Cookies <button>OK</button>";

header.prepend(msg); // Adds as the FIRST child
header.append(msg);  // Moves it to be the LAST child (doesn't copy, just moves)
```

#### Cloning Elements (**`.cloneNode()`**)
*Creates a duplicate of an element.*
```javascript
header.append(msg.cloneNode(true)); // The 'true' flag copies child elements as well
```

#### Sibling Insertion (**`.before()`**, **`.after()`**)
*Inserts an element directly before or after a target element.*
```javascript
header.before(msg); // Inserts before header
header.after(msg);  // Inserts after header
```

#### Deleting Elements (**`.remove()`**, **`.removeChild()`**)
```javascript
msg.remove(); // Modern way

msg.parentElement.removeChild(msg); // Old way (DOM Traversing)
```

#### Computed Styles (**`getComputedStyle()`**)
*Returns the actual rendered style attributes of an element.*
```javascript
const msgStyle = getComputedStyle(msg);

if (msgStyle.color === "#000") {
  msgStyle.color = "red";
}
msgStyle.height = Number.parseFloat(msgStyle.height, 10) + 30 + "px";
```

#### Standard Attributes
*Directly accessible as properties.*
```javascript
const loginBTN = document.querySelector("#section-2");

console.log(loginBTN.src);
console.log(loginBTN.alt);
console.log(loginBTN.className);
```

#### Non-Standard & Custom Attributes
```javascript
// Getters
console.log(loginBTN.getAttribute("data-rel"));
console.log(loginBTN.getAttribute("custom-title"));

// Setters
loginBTN.setAttribute("data-hidden", "3445645645"); // Custom attribute
loginBTN.setAttribute("alt", "Login key");          // Standard attribute fallback
```

> **💡 Note on URLs (Absolute vs. Relative):**
> ```javascript
> loginBTN.src;                 // Returns complete absolute URL ('http://...')
> loginBTN.getAttribute("src"); // Returns the exact relative URL written in HTML
> ```

#### Data Attributes & Classes
```javascript
// Accessing data-* attributes
console.log(loginBTN.dataset);

// Managing Classes
loginBTN.classList.add('btn-dark');
loginBTN.classList.remove('btn-light');
loginBTN.classList.toggle('btn-x');
loginBTN.classList.contains('check-class-exists'); // Returns boolean
```

### 6. Events & Event Listeners

When an event occurs, JavaScript generates an **Event Object** containing all the info about that event. We pass that object as an argument to our callback function.

#### Keyboard Events (`keydown`, `keyup`, `keypress`)
```javascript
document.addEventListener("keydown", function (eventObj) {
  console.log(eventObj.key); // Access property 'key'

  if (eventObj.key === "Escape") {
    alert("Escape was pressed.");
  }
});
```

#### Mouse Events (`click`, `scroll`, etc.)
```javascript
// Inline callback function
document.querySelector(".myButton").addEventListener("click", function () {
  alert("Hi");
});

// ✅ Cleaner way (Separate callback definition)
const myFunc = function () {
  console.log("Hi there!");
};

// Do NOT use parentheses () when attaching the function reference
document.querySelector(".myButton").addEventListener("click", myFunc); 
```
---
&nbsp;
<!-- PAGINATION_START -->

📁 [1. Basics](../1.%20Basics/)  

◀️ [Console Methods](16-console.md)  

▶️ [Data Structures](../2.%20Data%20Structures/)

<!-- PAGINATION_END -->
&nbsp;
