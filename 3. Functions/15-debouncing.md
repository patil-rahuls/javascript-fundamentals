## Debouncing

> **_used to limit how often a function can fire._**

```javascript
// Note - This is a frontend code:
const saveBtn = document.querySelector("#save");
saveBtn.addEventListener("input", saveData);
// saveData() is a debouced function
// defined below.

let saveTimer;

function saveData(event) {
  // Clear the previous timer if
  // the function is called again
  // before the delay finishes.
  clearTimeout(saveTimer);

  // Start a new timer
  saveTimer = setTimeout(() => {
    saveDataAPI(event.target.value);
  }, 300);
}

// Dummy API function for testing
function saveDataAPI(data) {
  console.log(`💾 Saved to cloud: ${data}`);
}
```

### 1. Search Bar Auto-Complete (Typeahead):

**The Problem:**

Without debouncing, if a user types "JavaScript" (10 letters), your code will trigger an API request to your server on every single keystroke (10 requests total). This wastes server resources and causes UI lag.

> The Debounced Solution:
>
> _By adding a 300ms debounce timer, the API call waits until the user pauses typing. If they type quickly, only one single request is sent once they finish._

&nbsp;

### 2. Window Resizing and Responsive Layouts

**The Problem:**

When a user drags the corner of a browser window to resize it, the window.resize event fires hundreds of times per second. If your JavaScript recalculated complex layout elements or re-rendered charts on every frame, the browser would freeze.

> The Debounced Solution:
>
> _Debouncing the resize handler ensures that your layout calculations run exactly once, right after the user finishes resizing the window._

&nbsp;

### 3. Auto-Saving Form Progress

**The Problem:**

In modern apps like Google Docs or Notion, your inputs are automatically saved to the cloud. If you save on every single character typed, you will spam your database with constant write requests.

> The Debounced Solution:
>
> _The app waits until you pause typing for 1 to 2 seconds, then automatically triggers a single save request to secure your draft._

&nbsp;

### 4. Preventing Double-Click Form Submissions

**The Problem:**

Impatient users _like me_ often click a "Submit Payment" or "Create Account" button multiple times in rapid succession. This can lead to duplicate database entries or double charges.

> The Debounced Solution:
>
> _Debouncing the button click ensures that only the first click goes through, and subsequent clicks within a short window (e.g., 500ms) are completely ignored._

&nbsp;

### 5. Infinite Scroll Content Loading

**The Problem:**

As a user scrolls down a page, the browser calculates the scroll position constantly. Checking if the user has reached the bottom of the page on every single pixel scrolled causes severe performance drops.

> The Debounced Solution:
>
> _You debounce the scroll listener so that the code checks your page position only every 100–200ms, heavily reducing the browser's workload while still loading new content seamlessly._

---

---

<!-- PAGINATION_START -->

**Parent:** [3. Functions](..)  
**Previous:** [Strings - Methods](14.2-strings-methods-2.md)  
**Next:** [Throttling](16-throttling.md)

<!-- PAGINATION_END -->
