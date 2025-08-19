//////////////////////////////////////////////////////////////
// LOGICAL OR ASSIGNMENT ||= /////////////////////////////////
//////////////////////////////////////////////////////////////

//  Example #1 - Setting Default values
let PORT = process.env.PORT;
PORT ||= 3000;  // Use 3000 if PORT is missing, empty, or 0
console.log(PORT);


//  Example #2 - Short-circuit Object property initialization
let settings = {};
settings.apiKey ||= "DEFAULT-KEY";
console.log(settings);
// { apiKey: 'DEFAULT-KEY' }



//////////////////////////////////////////////////////////////
// LOGICAL AND ASSIGNMENT &&= ////////////////////////////////
//////////////////////////////////////////////////////////////

//  Example #1 - Conditional object property update
let user = { name: "Rahul", isActive: true };
// Only update(set isActive to false) if user exists (truthy)
user &&= { ...user, isActive: false };
console.log(user);
// { name: 'Rahul', isActive: false }


//  Example #2 - Safe event handler cleanup
let listener = button.addEventListener("click", () => {
    console.log("Clicked!");
  });
// Later: remove listener if it exists
listener &&= button.removeEventListener("click", listener);


//  Example #3 - Chained object checks
let config = { theme: { darkMode: true } };
// Only overwrite if config.theme exists
config.theme &&= { darkMode: false };
console.log(config);
// { theme: { darkMode: false } }


//  Example #4 - Resetting a cache conditionally
let cache = { items: [1, 2, 3] };
// Clear cache only if it exists
cache &&= null;
console.log(cache); // null




