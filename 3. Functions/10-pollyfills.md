## Functions > Polyfills

> 🎯 A **polyfill** is a piece of code used to provide modern functionality on older browsers that do not natively support it. By manually defining built-in features, you ensure your front-end application remains functional for users on legacy devices or outdated browser versions.

---
&nbsp;

### 1. The Need for Polyfills

While most users operate on modern browsers, some remain on older versions for system stability. Furthermore, in many parts of the world, older mobile devices with outdated browsers are still the primary way people access the web. 

*If your front-end application relies on the latest JavaScript features, those built-in methods will throw errors in older environments. Polyfills fix this by acting as a manual fallback.*

### 2. How a Polyfill Works

To write a polyfill, you first check if the browser already supports the specific feature. If it doesn't exist, you manually inject your own logic into the global object or its prototype to mimic the modern behavior.

*Example: Creating a fallback for `Array.prototype.includes` if the browser is too old to have it natively.*

```javascript
// 1. Check if the native method is missing from the environment
if (!Array.prototype.includes) {  
  
  // 2. If missing, define it manually on the Array prototype
  Array.prototype.includes = function (searchElement) {
    // 'this' refers to the array calling the method.
    // indexOf returns -1 if the element is not found.
    return this.indexOf(searchElement) !== -1;
  };
  
}
```

---
&nbsp;
<!-- PAGINATION_START -->

📁 [3. Functions](../3.%20Functions/)  

◀️ [Currying](09-currying.md)  

▶️ [Iterators](11-iterators.md)

<!-- PAGINATION_END -->
&nbsp;
