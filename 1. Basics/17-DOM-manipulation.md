## DOM-manipulation

> **HTML Page <---> DOM Tree <---> DOM API <---> Javascript**

DOM Manipulation allows JavaScript to dynamically create, modify, structure, and style elements on a webpage.

### 1. What is DOM ?

Document Object Model. It's an interface between the
javascript code and the browser.

DOM tree is generated from an HTML document, which we can then interact with, using javascript.

We write javascript code to create, modify and delete HTML elements, set styles, set classes and attributes, and listen and respond to the events that we attach to them.

&nbsp;

### 2. DOM API?
Allows you to modify a DOM tree in any way you want.

We can edit the DOM of a document using JavaScript to access the `document` property of the global object.

&nbsp;

### 3. What are NodeList and HTMLCollection?
Both the NodeList and HTMLCollection contain HTML elements that we query from javascript. The

HTMLCollection changes in real time when we make changes in the DOM.

But the same does not happen with NodeList.

&nbsp;

### 4. Querying the elements

> `document.querySelector()`

- Returns a SINGLE (first matching) element. We provide CSS selectors to these methods.
```javascript
// Selecting by class
document.querySelector('.messageDiv');

// Selecting by id
document.querySelector('#message');

// multiple selectors
document.querySelector('.messageDiv, #message, div.main p');
```
- Use querySelector when you need flexibility, such as selecting nested elements, matching complex CSS paths, or writing unified selection code.

&nbsp;

> `document.querySelectorAll()`
- Returns a NodeList(non-live) of matching elements.
```javascript
const tblRows = document.querySelectorAll("table tr");
```

&nbsp;

> `document.getElementById()`
- Use getElementById when you want the fastest performance and only need to find an element by its exact ID string.
- It is highly optimized and noticeably faster because the browser engine uses a direct internal lookup map of ID keys.
```javascript
document.getElementById('show');
```

&nbsp;

> `document.getElementsByTagName()`
- This returns an HTMLCollection of matching elements.
```javascript
document.getElementsByTagName('button');
```

&nbsp;

> `getElementsByClassName()`
- This returns an HTMLCollection of matching elements.
```javascript
document.getElementsByClassName('account');
```

&nbsp;

> `labels and non -inputs:`
```javascript
document.querySelector('.messageDiv').textContent;
document.querySelector('.messageDiv').textContent = "Hi!";

document.querySelector('.guess').value;
document.querySelector('.guess').value = 44;
```

&nbsp;

> `Event Listeners:`
- Clicks, scrolls are some of the events that happen
on a webpage. We can write functions that react to
such events that happen on our page.

```javascript
document
  .querySelector('.myButton')
  .addEventListener('click' ,
    function() {
      // This is called a callback function
      alert("Hi");
    }
);
```

- A more cleaner way would be by separately defining a
callback function and re-using it-

```javascript
const myFunc = function() {
  console.log("Hi there!");
}
document
  .querySelector('.myButton')
  .addEventListener('click' , myFunc());
```

&nbsp;

> `Changing CSS and classes:`

```javascript
document
  .querySelector('body')
  .style
  .backgroundColor = '#efefef';
document
  .querySelector('body')
  .style
  .width = '200px';
```

&nbsp;

> `Adding removing class`

```javascript
document
  .querySelector('body')
  .classList
  .add('newClass');
document
  .querySelector('body')
  .classList
  .remove('newClass');
```

&nbsp;

> `Keypress events:`
- keyboard events are global events.
- Some of them are: 'keydown' , 'keyup' and 'keypress'.
```javascript
document.addEventListener('keydown',
   function() {
       console.log("A Key was pressed.");
   }
);
```
- When an event occurs, Javascript generates an object that contains all info about that event.

- We use that object to handle the event in the handler function. We pass that event object as an argument to the callback function.
```javascript
document.addEventListener('keydown',
  function(eventObj) {
    console.log(eventObj.key);
    // Access property 'key' of Event Object
    if(eventObj.key === "Escape"){
      alert("Escape was pressed.");
    }
  }
);
```

&nbsp;

> `Creating and Inserting HTML Elements:`
```javascript
const header = document.querySelector('.header');
const msg = document.createElement('div');

msg.classList.add('cookie-msg');
msg.innerHTML = 'Accept Cookies <button> OK </button>';

header.prepend(msg);
// Adds as a first child to the header element.
header.append(msg);
// Adds as a last child to the header element.
// That means it just moved the element, not copied.
```

&nbsp;

> `cloneNode()`
- Create multiple copies of same element:
```javascript
header.append(msg.cloneNode(true));
// It now creates its own clone.
```

&nbsp;

> `Creating an element before or after an element:`
```javascript
header.before(msg); // Before header element
header.after(msg);  // After header element
```

&nbsp;

> `Deleting an element:`
```javascript
msg.remove();
// New Way
msg.parentElement.removeChild(msg);
// DOM Traversing. Old Way
```

&nbsp;

> `getComputedStyle -`
- Getting style attributes of an element:
```javascript
const msgStyle = getComputedStyle(msg);
if(msgStyle.color == '#000'){
  msgStyle.color = 'red';
}
msgStyle.height = Number.parseFloat(
  msgStyle.height, 10
) + 30 + "px";
```

&nbsp;

> `Getting standard attributes of an element:`
```javascript
const loginBTN = document.querySelector('#section-2');
Standard Attributes.
console.log(loginBTN.src);
console.log(loginBTN.alt);
console.log(loginBTN.classList);
console.log(loginBTN.className);
```

&nbsp;

> `getAttribute`
- Getting Non Standard Attributes like the ones defined by user.
```javascript
console.log(loginBTN.getAttribute('data-rel'));
console.log(loginBTN.getAttribute('custom-title'));
```

&nbsp;

> `Setting attributes (Non standard and standard)`
```javascript
// Non standard
loginBTN.setAttribute('data-hidden','3445645645');
// standard
loginBTN.alt = 'Login key';
```

&nbsp;

> `Getting src - Complete and Relative url`
```javascript
loginBTN.src;
// returns complete url 'http://...'
loginBTN.getAttribute('src');
// returns relative url
```

&nbsp;

> `Data Attributes:`
```javascript
loginBTN.dataset;
```

&nbsp;

> `Classes - add / remove classes.`
```javascript
loginBTN.classList.add('btn-dark');
loginBTN.classList.remove('btn-light');
loginBTN.classList.toggle('btn-x'); *
loginBTN.classList.contains('check-class-exists');
```

---
