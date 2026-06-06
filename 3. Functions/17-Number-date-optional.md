## `Number` & `Date`

### `Number()`
Unlike `parseInt()`, `parseFloat()` which are a `parser` (they
look for _numbers_ inside _strings_).

`Number()` is a converter — it tries to transform the entire value into a numeric type.

If the value can't be fully converted, it doesn't guess; it simply gives up and returns `NaN`.

> Strings (numeric, hex, or empty)

```javascript
Number('24')    -> 24
Number('24px')  -> NaN
Number('24.3')  -> 24.3
Number('')      -> 0
Number('  ')    -> 0
```

> Booleans
```javascript
Number(true)  -> 1
Number(false) -> 0
```

> Objects (Arrays and Dates)
```javascript
Number([])      -> 0
Number([3])     -> 3
Number([3,4])   -> NaN
```

> Date:
```javascript
Number(new Date()) -> 2849623649823749 (timestamp)
```

> Special values (null, undefined)
```javascript
Number(null)        -> 0
Number(undefined)   -> NaN
```
---

&nbsp;
> ### Number Constants (Static Members)
The built-in Number object has CONSTANT properties for numerical constants, such as max value, not-a-number, and infinity.
```javascript
// The largest positive representable number
const biggestNum = Number.MAX_VALUE;
// 1.7976931348623157e+308

// The smallest positive representable number
const smallestNum = Number.MIN_VALUE;
// 5e-324

// Special positive infinite value; returned on overflow
const infiniteNum = Number.POSITIVE_INFINITY;

// Special negative infinite value; returned on overflow
const negInfiniteNum = Number.NEGATIVE_INFINITY;

// Special "not a number" value
const notANum = Number.NaN;

// Minimum safe integer in JavaScript (−2^53 + 1)
Number.MIN_SAFE_INTEGER;
// −9007199254740991

//	Maximum safe integer in JavaScript (+2^53 − 1)
Number.MAX_SAFE_INTEGER;
// +9007199254740991
```
---

&nbsp;
> ### Number Methods (Static Methods)
```javascript
Number.parseFloat();
// Parses a string and returns a floating point number.

  // Same as the global parseFloat() function.
  console.log(Number.parseFloat === parseFloat);
  // true

  Number.parseFloat('10.4px');
  // 10.4


Number.parseInt();
// Parses a string and returns an integer of the specified
// radix or base.

  // Same as the global parseInt() function.
  console.log(Number.parseInt === parseInt);
  // true

  Number.parseInt('10px');
  // 10

// Number.parseInt & Number.parseFloat() both "look" for
// numbers until they hit a character that they doesn't
// recognize.


Number.isFinite();
// Determines whether the passed value is a finite number.


Number.isInteger();
// Determines whether the passed value is an integer.


Number.isNaN();
// Determines whether the passed value is NaN.
// More robust version of the original global isNaN().


Number.isSafeInteger();
// Determines whether the provided value is a number that
// is a safe integer.
```

Note that all of these methods are available on global object as well. But the modern way to use them is _`Number.method()`_.

> An amateur developer may accidently define the inbuilt function like this:
```javascript
var parseInt = function(str) {
  return "I broke it!";
};

console.log(parseInt("10"));
// "I broke it!"

console.log(Number.parseInt("10"));
// 10 (Still works perfectly)
```
---

&nbsp;
## `Date`
```javascript
// 1. Current date and time
const now = new Date();

// 2. From a timestamp (milliseconds since 1970)
const fromTimestamp = new Date(1710580000000);

// 3. From a date string
// (Be careful! Formats can be inconsistent across browsers)
const fromString = new Date("2026-03-16T10:00:00");

// 4. From components
// (Year, Month, Day, Hour, Minute, Second, MS)
// WARNING: Months are 0-indexed (0 = January, 11 = December)
const specificDate = new Date(2026, 2, 16);
// March 16, 2026

const specificDate2 = new Date(2026, 2, 16, 0, 0, 0);
// March 16, 2026, 0(hour), 0(min), 0(sec)

// 5. Return timestamp (number)
Date.now():
// Used for performance time calculations or simple logic.

// 6. Creates a full object with all the date methods.
new Date():
// Use this when you need to format or manipulate the date.
```

### Date Methods:
| Function | Description | Example Value |
| :--- | :--- | :---: |
| `getFullYear()` |	Gets the 4-digit year |  2026 |
| `getMonth()` | Zero-indexed month | 0–11
| `getDate()` | Day of the month | 1–31 |
| `getDay()` | Day of the week	0 (Sun) | 6 (Sat) |
| `getHours()` | Hour of the day | 0–23 |
| `getTime()` | Millis since Epoch | A big number |

---

More here -> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Numbers_and_dates

---
