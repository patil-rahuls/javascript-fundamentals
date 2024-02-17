//////////////////////////////////////////////////////////////
// SELECTING HTML ELEMENTS ///////////////////////////////////
//////////////////////////////////////////////////////////////

// 1.  What is DOM ?
// Document Object Model. It's an interface between the javascript code and the browser.
// DOM tree is generated from an HTML document, which we can then interact with, using javascript.
// We write javascript code to create, modify and delete HTML elements, set styles, set classes 
// and attributes, and listen and respond to events attached to them.


// 2.  Document API OR DOM API ?
// Allows you to modify a DOM tree in any way you want.
// We can edit the DOM of a document using JavaScript to access the 'document' property of the global object.

// 1. querySelector()
// We provide CSS selctors to these methods.

//  Selecting by class
document.querySelector('.messageDiv');

//  Selecting by id
document.querySelector('#message');


// 2. querySelectorAll()


// 3. getElementById()


// 4. getElementsByTagName()


// 5. getElementsByClassName()



16). SELECTING AND MANIPULATING HTML ELEMENTS
document.querySelector('.messageDiv'); // class
document.querySelector('#message');    // id
	labels and non -inputs:
document.querySelector('.messageDiv').textContent;
document.querySelector('.messageDiv').textContent = "Hello World !!";
	inputs:
document.querySelector('.guess').value;
document.querySelector('.guess').value = 44;
	Event Listeners:
Clicks, scrolls are some of the events that happen on a webpage. We can write functions that react to such events that happen on our page.
document.querySelector('.myButton').addEventListener('click' ,
   function() {      // This is called a callback function
       alert("Hi");
   }
);

const myFunc = function() {
   console.log(document.querSelector('.guess').value);
}
document.querySelector('.myButton').addEventListener('click' , myFunc());


	Changing CSS and classes:
document.querySelector('body').style.backgroundColor;
document.querySelector('body').style.backgroundColor = '#efefef';
document.querySelector('body').style.width = '200px';


// Adding removing class
document.querySelector('body').classList.add('newClass');
document.querySelector('body').classList.remove('newClass');


	Keypress events:
keyboard events are global events. Some of them are as follows: 'keydown' , 'keyup' and 'keypress'.
document.addEventListener('keydown',
   function() {
       console.log("A Key was pressed but I don't know which one.");
   }
);


	When an event occurs, Javascript generates an object that contains all info about that event. We 
use that object to handle the event in the handler function. We pass that event object as an
argument to the callback function.
document.addEventListener('keydown',
   function(e) {
       console.log(e);
   }
);


document.addEventListener('keydown',
   function(eventObj) {
       console.log(eventObj.key); // Access property 'key' of Event Object
       if(eventObj.key === "Escape")
           alert("Escape was pressed.");
    }
);
	







31). DOM

32). HTML ELEMENTS
Both the NodeList and HTMLCollection contain HTML elements that we query from javascript. The HTMLCollection changes in real time when we make changes in the DOM. But the same does not happen with NodeList.


Selecting HTML Elements:


// Returns a SINGLE (first matching) element.
const header = document.querySelector('.header');


// Returns ALL matching elements. [Node list]
const allSections = document.querySelectorAll('.sections');


// Returns a SINGLE (first matching) element.
const user = document.getElementById('user_name');


// This returns a HTMLCollection. Returns All matching elements
const user = document.getElementsByTagName('button');
// This returns a HTMLCollection. Returns All matching elements
const user = document.getElementsByClassName('account');


Observe the ’s’ in getElementsByClassName. 


Creating and Inserting HTML Elements:


const header = document.querySelector('.header');
const msg = document.createElement('div');
msg.classList.add('cookie-msg');
msg.innerHTML = 'Some cookie related message here. <button> OK </button>';


header.prepend(msg); // Adds as a first child to the header element.
header.append(msg);  // Removes previously prepended msg and adds now 
                     // as a last child to the header element.
// That means it just moved the element, not copied.


Create multiple copies of same element:


header.append(msg.cloneNode(true)); // It now creates its own clone.


Creating an element before or after an element:


header.before(msg); // Before header element
header.after(msg);  // After header element
Deleting an element:


msg.remove();                       // New Way
msg.parentElement.removeChild(msg); // DOM Traversing. Old Way


Getting style of an element:


const msgStyle = getComputedStyle(msg);
if(msgStyle.color == '#000')
   msgStyle.color = 'red';


msgStyle.height = Number.parseFloat(msgStyle.height, 10) + 30 + "px";
Element Attributes:


const loginBTN = document.querySelector('#section-2');
// Standard Attributes.
console.log(loginBTN.src);
console.log(loginBTN.alt);
console.log(loginBTN.classList);
console.log(loginBTN.className);


// Non Standard Attributes like defined by user.
console.log(loginBTN.getAttribute('data-rel'));
console.log(loginBTN.getAttribute('custom-title'));


loginBTN.setAttribute('data-hidden','3445645645');
loginBTN.alt = 'Login key';


// Getting src complete and relative url
loginBTN.src; // returns complete url
loginBTN.getAttribute('src') // returns relative url


// Data Attributes:
loginBTN.dataset; // *


// Classes
loginBTN.classList.add('btn-dark');
loginBTN.classList.remove('btn-light');
loginBTN.classList.toggle('btn-x'); // *
loginBTN.classList.contains('check-class-exists');