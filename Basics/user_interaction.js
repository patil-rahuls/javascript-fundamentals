//////////////////////////////////////////////////////////////
// USER INTERACTION alert(), prompt() and confirm() //////////
//////////////////////////////////////////////////////////////

// alert() - Com'on !! you should know this !!

// prompt()
// Accepts two arguments: prompt string and a default value.
// Returns the text(converted to string) from the input field or null of default value(if set) if the input was canceled.
let age = prompt('How old are you?', 28); // 28 is the default value.
alert(`You are ${age} years old!`);       // You are 28 years old!

// confirm():
// Shows a modal window with a question string and two buttons: OK and Cancel. 
// returns true if OK is pressed or false otherwise.
if(confirm("Are you a developer?"))
    alert("LOL");


