## Express

```javascript
import express from "express";

// If using ES6 Modules we need the `with` expression
// to tell that is needs to be parsed into an object.
// If using CommonJS Modules (i.e. require()), we
// don't need it. CommonJS Modules automatically
// parses the JSON into javascript objects.
import data from "./data/data.json" with { type: "json" };

// Instantiate express app
const app = express();
const PORT = 9969;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server started on port# ${PORT}`);
});
```
---
### Routes & Route Handlers

> ***Routes***
> Routes are how an app responds to a client's request to a particular endpoint.
>
> It comprises of a `Routing Path` and an `HTTP Method`:
> 
> ```javascript
> app.post(`/create`...);
> ```
> 
> `/create` is the **Routing Path**
> 
> `post` is the **HTTP Method**

> ***Route Handlers***
>
> A callback fn having access to req and res objects.
>
> ```javascript
> app.get(`/`, (req, res) => {
>   // querying db and fetching data
>   // ...
>   res.json(data);
> });
>
> app.post(`/create`, (req, res) => {
>   res.send("this is a post req.");
> });
>
> app.put(`/edit`, (req, res) => {
>   res.send("this is a put req.");
> });
>
> app.delete(`/del`, (req, res) => {
>   res.send("this is a delete req.");
> });
> ```

---
### Route Chaining

_We can chain all methods together for a particular route._

`app.route(<route>).get().post().put().delete()`

```javascript
app.route("/class")
  .get((req, res) => {
    // querying db and fetching data.
    //...
    res.json(data);
  })
  .post((req, res) => {
    res.send("this is a post req.");
  })
  .put((req, res) => {
    res.send("this is a put req.");
  })
  .delete((req, res) => {
    res.send("this is a delete req.");
  });
```

### Routing parameters

Parts/segments of url that are used to capture values specified at positions within the url. (query) 

> ```javascript
> app.get(`/class/:id/student/:stu_id`, (req, res) => {
>
>   console.log(`class_id: ${req.params.id}`);
>
>   console.log(`stu_id: ${req.params.stu_id}`);
>
>   res.send(req.params);
> });
> ```
> 
> _For the above route, the url would look like: "https://localhost:9969/class/12/student/34"_
>
> _`"req.params"` returns the key value pairs of the parameters in the url and it would look like:_
>
> ```
> req.params = {
>   id: 12,
>   stu_id: 34
> };
> ```

---
### Response Methods

***`json()`*** - Used to send JSON response.

```javascript
app.get(`/stu/:stu_id`, (req, res) => {

  const stuId = Number(req.params.stu_id);

  const stuObj = data.filter(stu => stu.id === stuId);

  res.json(stuObj);
});
```

***`send()`*** - Used to send HTML or plain text response.

```javascript
app.get(`/sal`, (req, res) => {
  res.send("A simple string OR HTML string");
});
```

***`download()`*** - transfers a file as an attachment.

```javascript
app.get(`/downloads/pdf`, (req, res) => {
  
  const pdfFile = {
  "MimeType": "application/pdf",
  "data": "/eqdh9y9va9sac8udausduasdasdoiabusoduaido..."
  }
  
  res.download(pdfFile);
});
```

***`redirect`*** - used to redirect user to a given url.

```javascript
app.get(`/redir`, (req, res) => {
  res.redirect('https://google.com');
});
```

---
### Middlewares

Functions that have access to the request and response and the next() method in the application's req response lifecycle. 

Built in Middlewares in Express.JS framework:
1. ***`express.static`*** - _serves static assets_

    Useful for static files such as css, images etc.

    ```
    `app.use(express.static('public'));` // no '/' here.
    ```

    _With this, you can now access anything inside `'public'` folder directly from the "root" url. i.e. `localhost:9969/<that_file>` example: localhost:9969/styles.css, localhost:9969/index.js_

    `"app.use"` also accepts a route as first param.
    
    ```
    app.use('/img', express.static('images'));
    ```
    _This will take all the contents of 'images' folder and route it to "localhost:9969/img" url._

2. ***`express.json`*** - _parses incoming req with JSON payload_
    
    ```
    app.use(express.json());
    ```
    _With this, we can parse JSON directly from "request" object._

    ```javascript
    app.post("/checkData", (req, res) => {
      // parse JSON directly from req.
      const id = req.user_id;
      
      console.log(id);
      
      res.send(id ? "Found" : "Not Found");
    });
    ```


3. ***`express.urlencoded`*** - _parses incoming req with url encoded payload_

Syntax to call middlewares:
```
app.use(<middleware>)
``` 

Some useful third party middlewares for Express:
- express-documentation
- body-parser _(Now built into Express as express.json())_
- helmet


### next()

We also get a third parameter to the route handler. It is a callback function, we can name it anything, but just to avoid confusions, we name it 'next'.

It can be used to have additional callbacks to the routes.

```javascript
app.get(`/test`,
  (req, res, next) => {
    console.log(`response will be sent by the next function.`);
    
    next(); // called next.
  }, // adding additional callback to this route.
  
  // definition for next()
  (req, res)=> {
    res.send('I just set up a route with a 2nd callback.');
  }
);

// We can add any number of additional 
// callbacks using next()
app.get(`/test`,
  (req, res, next) => {
    console.log(`Authenticated...`);
    next(); // called next.
  }, 

  (req, res, next)=> {
    console.log(`Checked! User id active...`);
    next();
    // Remember to call next() in 
    // each of the passed cb.
  },
  
  // Definition for next() at the end.
  (req, res)=> {
    console.log(`Accessing test page.`);
    res.send("Done");
  }
);
```


---
### Error Handler Middleware

> ***IMP: Should be declared beofre app.listen();***

```javascript
app.use((err, req, res, next) => {
  console.error(err.stack);
  
  res.status(500).send('Something went wrong!');
});
```

_Now when you hit a non defined page e.g._

`localhost:9969/any-wrong-endpoint`

_It returns this string `'Something went wrong!'` as a response and prints the error stack trace to the server logs._

&nbsp;


---
---
<!-- PAGINATION_START -->

**Parent:** [Node.js](../8.%20Node.js/)
  
**Previous:** ← [Node.js > Event Emitters Capture Rejections](15-event-emitters-capture-rejections.md)  

**Next:** → [Node.js > Buffer](17-buffer.md)

<!-- PAGINATION_END -->
