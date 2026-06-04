## Debouncing

To prevent a function from being called multiple timesin a given time frame.

```javascript
function debounce(func, delay){
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), delay);
  };
}
```

---
