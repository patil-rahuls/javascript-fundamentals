//////////////////////////////////////////////////////////////
// GENERATOR FUNCTIONS ///////////////////////////////////////
//////////////////////////////////////////////////////////////

// WIP
// To make a function return different values each time called multiple times.
function debounce(func, delay){
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), delay);
  };
}
