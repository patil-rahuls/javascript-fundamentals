//////////////////////////////////////////////////////////////
// POLLYFILLS  ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////

// Intended for Front-end applications.
// Even though most people use modern browsers.
// Some users stay on older versions of browsers for stability.
// In many parts of the world, older mobile devices with outdated
// browsers are still the primary way people access the web.

// However, if our application is using the latest version of
// JavaScript(which may not be fully supported on older devices),
// some inbuilt features may break.
// To fix that, we use "pollyfills", which is nothing but
// defining those inbuilt functionalities manually in the code.

// Example:
if (!Array.prototype.includes) {
  // If the browser doesn't have it, we write the logic ourselves
  Array.prototype.includes = function(searchElement) {
    return this.indexOf(searchElement) !== -1;
  };
}
