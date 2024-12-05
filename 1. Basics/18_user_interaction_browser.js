//////////////////////////////////////////////////////////////
// USER INTERACTION alert(), prompt() and confirm() //////////
//////////////////////////////////////////////////////////////

// prompt()
// Shows a prompt to the user with a String, a Text Input and 'OK' and 'Cancel' Buttons.
// Accepts two arguments: prompt string and a default value.
// Returns the text(converted to string) from the input field.
// If clicked 'Cancel' or ESC, it returns null.
// Else it returns the entered value OR default value(if set) if the value is not changed.
let age = prompt('How old are you?', 28); // 28 is the default value.
alert(`You are ${age} years old!`);       // You are 28 years old! (If clicked 'OK')

// confirm():
// Shows a prompt to the user with a String and 'OK' and 'Cancel' Buttons.
// Returns true if OK is pressed or false otherwise.
if(confirm("Are you a developer?"))
    alert("Yes. A software developer");
