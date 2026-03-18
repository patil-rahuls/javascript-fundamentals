//////////////////////////////////////////////////////////////
// DEBOUNCING  ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////

// To prevent a function from being called multiple times
// in a given time frame.
function debounce(func, delay){
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), delay);
  };
}

// Usage:
debounce();