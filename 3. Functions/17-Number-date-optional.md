## Functions > Number & Date

> 🎯 The `Number` and `Date` objects provide built-in utilities for strict numeric conversions, accessing mathematical constants, and time manipulation. Understanding their specific behaviors prevents subtle bugs, especially when converting types or dealing with time zones and timestamps.

---
&nbsp;

### 1. The `Number()` Converter

Unlike `parseInt()` and `parseFloat()` which act as **parsers** (looking for numbers inside strings until they hit an invalid character), `Number()` is a strict **converter**. It tries to transform the *entire* value into a numeric type. If it can't fully convert it, it gives up and returns `NaN`.

```javascript
// Strings (numeric, hex, or empty)
Number('24');     // 24
Number('24px');   // NaN (parseInt would return 24)
Number('24.3');   // 24.3
Number('');       // 0
Number('  ');     // 0

// Booleans
Number(true);     // 1
Number(false);    // 0

// Objects (Arrays)
Number([]);       // 0
Number([3]);      // 3
Number([3, 4]);   // NaN

// Special values
Number(null);       // 0
Number(undefined);  // NaN

// Dates
Number(new Date()); // e.g., 1710580000000 (milliseconds timestamp)
```

### 2. Number Constants (Static Members)

The built-in `Number` object has constant properties for numerical limits, infinities, and invalid numbers.

```javascript
// The largest positive representable number
const biggestNum = Number.MAX_VALUE;
// 1.7976931348623157e+308

// The smallest positive representable number
const smallestNum = Number.MIN_VALUE;
// 5e-324

// Special positive/negative infinite values; returned on overflow
const infiniteNum = Number.POSITIVE_INFINITY;
const negInfiniteNum = Number.NEGATIVE_INFINITY;

// Special "not a number" value
const notANum = Number.NaN;

// Minimum and Maximum safe integers in JavaScript (±2^53 - 1)
Number.MIN_SAFE_INTEGER; // -9007199254740991
Number.MAX_SAFE_INTEGER; // 9007199254740991
```

### 3. Number Methods (Static Methods)

While these methods are also available on the global object, the modern and safer approach is to use `Number.method()`.

```javascript
Number.parseFloat("10.4px");
// 10.4 (Parses a string and returns a floating point number)
// console.log(Number.parseFloat === parseFloat); -> true

Number.parseInt("10px");
// 10 (Parses a string and returns an integer)

Number.isFinite(10);
// Determines whether the passed value is a finite number.

Number.isInteger(10.5);
// Determines whether the passed value is an integer (returns false).

Number.isNaN(NaN);
// Determines whether the passed value is NaN (More robust than global isNaN).

Number.isSafeInteger(9007199254740992);
// Determines whether the passed value is a safe integer (returns false).
```

*Why use the `Number` prefix? An amateur developer might accidentally overwrite the global function (e.g., `var parseInt = function() { return "broken" }`). Using `Number.parseInt()` ensures you are calling the native, untampered method.*

### 4. Creating Date Objects

There are several ways to instantiate a Date object, depending on the data you have.

```javascript
// 1. Current date and time
const now = new Date();

// 2. From a timestamp (milliseconds since January 1, 1970)
const fromTimestamp = new Date(1710580000000);

// 3. From a date string (Note: Formats can be inconsistent across browsers)
const fromString = new Date("2026-03-16T10:00:00");

// 4. From components (Year, Month, Day, Hour, Minute, Second, Millisecond)
// Note: Months are 0-indexed! (0 = January, 11 = December)
const specificDate = new Date(2026, 2, 16);
// March 16, 2026

const specificDate2 = new Date(2026, 2, 16, 0, 0, 0);
// March 16, 2026, 00:00:00

// 5. Returning just the timestamp (Number)
Date.now();
// Used for performance time calculations or simple logic without creating an object.
```

### 5. Essential Date Methods

Once you have a Date object, you can extract specific components using its instance methods:

| Function | Description | Example Value |
| :--- | :--- | :---: |
| **`getFullYear()`** | Gets the 4-digit year | 2026 |
| **`getMonth()`** | Zero-indexed month | 0–11 |
| **`getDate()`** | Day of the month | 1–31 |
| **`getDay()`** | Day of the week 0 (Sun) to 6 (Sat) | 6 (Sat) |
| **`getHours()`** | Hour of the day | 0–23 |
| **`getTime()`** | Milliseconds since Epoch | 1710580000000 |

*For more details, visit the [MDN Web Docs on Numbers and Dates](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Numbers_and_dates).*

---
&nbsp;
<!-- PAGINATION_START -->

📁 [3. Functions](../3.%20Functions/)  

◀️ [Throttling](16-throttling.md)  

▶️ [How Javascript Works](../4.%20How%20Javascript%20Works/)

<!-- PAGINATION_END -->
&nbsp;
