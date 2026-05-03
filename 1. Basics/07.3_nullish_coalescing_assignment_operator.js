//////////////////////////////////////////////////////////////
// NULLISH COALESCING ASSIGNMENT OPERATOR ??= ////////////////
//////////////////////////////////////////////////////////////

// It works same as || except that it does not consider
// 0, '', Infinity and NaN as falsy values. Nullish means only
// 'null' and 'undefined' will be considered falsy.

// This operator not just evaluates, but also, assigns the value.

// ??= prevents overwriting valid values like 0, false, or "",
// which often matter in user input, configs, or database values.

//  Example #1 - Default configuration values
function createUserConfig(config) {
  config.theme ??= "light";
  config.language ??= "en";
  config.showSidebar ??= true;
  return config;
}
console.log(createUserConfig({ language: "fr" }));
// { language: 'fr', theme: 'light', showSidebar: true }


//  Example #2 - Initializing object properties safely
const user = { name: "Rahul" };
// Ensure preferences object always exists
user.preferences ??= {};
user.preferences.darkMode ??= false;
console.log(user);
// { name: 'Rahul', preferences: { darkMode: false } }


//  Example #3 - Caching / Lazy initialization
let cache = null;
function getData() {
  cache ??= expensiveDatabaseCall();
  return cache;
}
function expensiveDatabaseCall() {
  console.log("Fetching from DB...");
  return { items: [1, 2, 3] };
}
console.log(getData()); // DB call runs
console.log(getData()); // Cached result, no DB call


//  Example #4 - Form handling
let formData = {
  username: "rahul",
  email: null
};
formData.email ??= "not-provided@example.com";
console.log(formData);
// { username: 'rahul', email: 'not-provided@example.com' }
