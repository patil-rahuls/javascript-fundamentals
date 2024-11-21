//////////////////////////////////////////////////////////////
// DOM MANIPULATION //////////////////////////////////////////
//////////////////////////////////////////////////////////////

// HTML Page <---> DOM Tree <---> DOM API <---> Javascript

// 1.  What is DOM ?
// Document Object Model. It's an interface between the javascript code and the browser.
// DOM tree is generated from an HTML document, which we can then interact with, using javascript.
// We write javascript code to create, modify and delete HTML elements, set styles, set classes 
// and attributes, and listen and respond to the events that we attach to them.


// 2.  Document API OR DOM API ?
// Allows you to modify a DOM tree in any way you want.
// We can edit the DOM of a document using JavaScript to access the 'document' property of the global object.

// 3. What are NodeList and HTMLCollection ?
// Both the NodeList and HTMLCollection contain HTML elements that we query from javascript. 
// The HTMLCollection changes in real time when we make changes in the DOM. 
// But the same does not happen with NodeList.

//  1. querySelector()
// We provide CSS selctors to these methods.
//  Selecting by class
document.querySelector('.messageDiv');
//  Selecting by id
document.querySelector('#message');
// document.querySelector returns a SINGLE (first matching) element.

// We can provide multiple selectors to these methods separating them by commas.
document.querySelector('.messageDiv, #message, div.main .message');


//  2. querySelectorAll()
// Returns a non-live NodeList of matching elements.
const tblRows = document.querySelectorAll("table#salaries tr");


//  3. getElementById()
document.getElementById('show');


// 4. getElementsByTagName()
// This returns an HTMLCollection of matching elements.
document.getElementsByTagName('button');


// 5. getElementsByClassName()
// This returns an HTMLCollection of matching elements.
document.getElementsByClassName('account');


//  6. labels and non -inputs:
document.querySelector('.messageDiv').textContent;
document.querySelector('.messageDiv').textContent = "Hello World !!";

document.querySelector('.guess').value;
document.querySelector('.guess').value = 44;
	

//  7. Event Listeners:
// Clicks, scrolls are some of the events that happen on a webpage. 
// We can write functions that react to such events that happen on our page.
document.querySelector('.myButton').addEventListener('click' ,
   function() {      // This is called a callback function
       alert("Hi");
   }
);
// a more cleaner way iwould be by separately defining a fn and using it-
const myFunc = function() {
   console.log(document.querSelector('.guess').value);
}
document.querySelector('.myButton').addEventListener('click' , myFunc());


//  8. Changing CSS and classes:
document.querySelector('body').style.backgroundColor;
document.querySelector('body').style.backgroundColor = '#efefef';
document.querySelector('body').style.width = '200px';



//  9. Adding removing class
document.querySelector('body').classList.add('newClass');
document.querySelector('body').classList.remove('newClass');


//  10. Keypress events:
// keyboard events are global events. Some of them are: 'keydown' , 'keyup' and 'keypress'.
document.addEventListener('keydown',
   function() {
       console.log("A Key was pressed but I don't know which one.");
   }
);
// When an event occurs, Javascript generates an object that contains all info about that event. 
// We use that object to handle the event in the handler function. We pass that event object as an
// argument to the callback function.
document.addEventListener('keydown',
   function(eventObj) {
       console.log(eventObj.key); // Access property 'key' of Event Object
       if(eventObj.key === "Escape")
           alert("Escape was pressed.");
    }
);


//  11. Creating and Inserting HTML Elements:
const header = document.querySelector('.header');
const msg = document.createElement('div');
msg.classList.add('cookie-msg');
msg.innerHTML = 'Some cookie related message here. <button> OK </button>';
header.prepend(msg); // Adds as a first child to the header element.
header.append(msg);  // Removes previously prepended msg and adds now 
                     // as a last child to the header element.
// That means it just moved the element, not copied.


//  12. cloneNode() - Create multiple copies of same element:
header.append(msg.cloneNode(true)); // It now creates its own clone.


//  13. Creating an element before or after an element:
header.before(msg); // Before header element
header.after(msg);  // After header element


//  14. Deleting an element:
msg.remove();                       // New Way
msg.parentElement.removeChild(msg); // DOM Traversing. Old Way


//  15. getComputedStyle - Getting style attributes of an element:
const msgStyle = getComputedStyle(msg);
if(msgStyle.color == '#000')
   msgStyle.color = 'red';
msgStyle.height = Number.parseFloat(msgStyle.height, 10) + 30 + "px";


//  16. Getting standard attributes of an element:
const loginBTN = document.querySelector('#section-2');
// Standard Attributes.
console.log(loginBTN.src);
console.log(loginBTN.alt);
console.log(loginBTN.classList);
console.log(loginBTN.className);


//  17. getAttribute - Getting Non Standard Attributes like defined by user.
console.log(loginBTN.getAttribute('data-rel'));
console.log(loginBTN.getAttribute('custom-title'));


//  18. Setting attributes. (Non standard and standard)
loginBTN.setAttribute('data-hidden','3445645645'); // Non standard
loginBTN.alt = 'Login key';                        // standard


//  19. Getting src - Complete and Relative url
loginBTN.src; // returns complete url
loginBTN.getAttribute('src') // returns relative url


//  20. Data Attributes:
loginBTN.dataset;


//  21. Classes - add / remove classes.
loginBTN.classList.add('btn-dark');
loginBTN.classList.remove('btn-light');
loginBTN.classList.toggle('btn-x'); // *
loginBTN.classList.contains('check-class-exists');
