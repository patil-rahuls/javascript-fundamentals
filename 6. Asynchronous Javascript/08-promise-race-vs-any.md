## `Promise.race()` vs `Promise.any()`

**`Promise.race` is settled as soon as any of the promises you feed it `settled`, no matter whether they are _fulfilled_ or _rejected_.**
**`Promise.any` is settled as soon as any of the promises you feed it is `fulfilled` or when they are `all rejected`, in which case it's rejected with an `AggregateError` array.**

`Promise.race`'s promise is rejected when one of the promises you give it is `rejected first`.

`Promise any`'s promise isn't, because another promise may be getting fulfilled instead.

`Promise.race`'s rejection reason will be the rejection reason of the first promise that was rejected.

`Promise.any`'s rejection reason will be an `AggregateError` array.

---

---

<!-- PAGINATION_START -->

**Parent:** [6. Asynchronous Javascript](..)
**Previous:** [`Promise.any()`](07-promise-any.md)
**Next:** _None_

<!-- PAGINATION_END -->
