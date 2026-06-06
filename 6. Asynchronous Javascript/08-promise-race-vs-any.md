## `Promise.race()` vs `Promise.any()`

> ***`Promise.race` is settled as soon as any of the promises you feed it `settled`, no matter whether they are _fulfilled_ or _rejected_.***

> ***`Promise.any` is settled as soon as any of the promises you feed it is `fulfilled` or when they are `all rejected`, in which case it's rejected with an `AggregateError` array.***

&nbsp;

`Promise.race`'s promise is rejected when one of the promises you give it is `rejected first`.

`Promise any`'s promise isn't, because another promise may be getting fulfilled instead.

&nbsp;

`Promise.race`'s rejection reason will be the rejection reason of the first promise that was rejected.

`Promise.any`'s rejection reason will be an `AggregateError` array.

---
