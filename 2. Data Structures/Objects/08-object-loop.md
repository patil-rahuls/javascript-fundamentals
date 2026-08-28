## Data Structures > Object > Loop over

Consider this object as an example.

```javascript
const performance = {
  rahul: { startedAt: 72, high: 99 },
  hitesh: { startedAt: 51, high: 98 },
  aajesh: { startedAt: 83, high: 100 },
};

```

### 1. Object.**keys()**

Returns an array of **properties/keys** of the object.

```javascript
const perfomers = Object.keys(performance);

console.log(perfromers);
// ['rahul' , 'hitesh' , 'aajesh']

```

### 2. Object.**values()**

Returns an array of the **values** of the object.

```javascript
const values = Object.values(performance);

console.log(values);
/*
  { startedAt : 72 , high : 99}
  { startedAt : 51 , high : 98}
  { startedAt : 83 , high : 100}
*/

```

### 3. Object.**entries()**

Returns an array of a given object's own enumerable string-keyed property pairs _[key, value]_.

```javascript
const entries = Object.entries(performance);
/*
  array(1) [ "rahul" ,  { startedAt : 72 , high : 99} ]
  array(2) [ "hitesh" , { startedAt : 51 , high : 98} ]
  array(3) [ "aajesh" , { startedAt : 83 , high : 100}]
*/

```

We can loop over the 'entries' and use destructuring _(Remember to use correct property names)_
```javascript
for(const [plyr, {at, high}] of Object.entries(performance)){

  console.log(`${plyr}'s score opened at ${at} and closed at ${high}`);
  
}

```

---
&nbsp;
<!-- PAGINATION_START -->

📁 [Data Structures](../../2.%20Data%20Structures/) → [Objects](../Objects/)
  
◀️ [Data Structures Objects Object This Keyword](07-object-this-keyword.md)  

▶️ [Data Structures Objects Object Properties Count](09-object-properties-count.md)

<!-- PAGINATION_END -->
&nbsp;
