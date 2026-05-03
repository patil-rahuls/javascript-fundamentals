//////////////////////////////////////////////////////////////
// EXPRESS ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////

// npm install express

import express from "express";
import data from "./data/data.json" assert { type: "json" };
const app = express(); // instantiate express app.
const PORT = 9969;

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Listening on port# ${PORT}`);
});

//////////////////////////////////////////////////////////////
// ROUTES & ROUTE HANDLERS
//////////////////////////////////////////////////////////////
/*
    Routes are how an app responds to a client's request
    to a particular endpoint.
    It comprises of a 'ROUTING PATH' and an 'HTTP METHOD'.
    e.g.
        app.post(`/create`...);
        // `/create` is the 'ROUTING PATH'
        // post is the 'HTTP METHOD'

    Syntax -
        app.<http_method>(<route>, <route_handler>)

    ROUTE HANDLER:
        A callback fn having access to req and res objects.
*/
app.get(`/`, (req, res) => {
    // querying db and fetching data
    // ...
    res.json(data);
});
app.post(`/create`, (req, res) => {
    res.send("this is a post req.");
});
app.put(`/edit`, (req, res) => {
    res.send("this is a put req.");
});
app.delete(`/del`, (req, res) => {
    res.send("this is a delete req.");
});

//////////////////////////////////////////////////////////////
// ROUTE CHAINING
//////////////////////////////////////////////////////////////

// Syntax: app.route(<route>).get().post().put().delete()...

// We can chain all methods together for a particular route.
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

//////////////////////////////////////////////////////////////
// ROUTING PARAMETERS
//////////////////////////////////////////////////////////////

// Parts/segments of url that are used to capture values
// specified at positions within the url. (query)
app.get(`/class/:id/student/:stu_id`, (req, res) => {
    console.log(`class_id: ${req.params.id}`);
    console.log(`stu_id: ${req.params.stu_id}`);
    res.send(req.params);
});
// For the above route, the url would look like:
"https://localhost:9969/class/12/student/34"
// "req.params" returns the key value pairs of the parameters
// in the url and it would look like:
req.params = {
    id: 12,
    stu_id: 34
};

//////////////////////////////////////////////////////////////
// RESPONSE METHODS
//////////////////////////////////////////////////////////////

// json() - Used to send JSON response.
app.get(`/stu/:stu_id`, (req, res) => {
    const stuId = Number(req.params.stu_id);
    const stuObj = data.filter(stu => stu.id === stuId);
    res.json(stuObj);
});

// send() - Used to send HTML or plain text response.
app.get(`/sal`, (req, res) => {
    res.send("A simple string OR HTML string");
});

// download() - transfers a file as an attachment.
app.get(`/downloads/pdf`, (req, res) => {
    const pdfFile = {
        "MimeType": "application/pdf",
        "data": "/eqdh9y9va9sac8udausduasdasdoiabusoduaosiduao..."
    }
    res.download(pdfFile);
});

// redirect - used to redirect user to a given url.
app.get(`/redir`, (req, res) => {
    res.redirect('https://google.com');
});

//////////////////////////////////////////////////////////////
// MIDDLEWARES
//////////////////////////////////////////////////////////////
// Functions that have access to the request and response and
// the next() method in the application's req response lifecycle.
// Built in Middlewares in Express.JS framework:
//      1. express.static - serves static assets
//      2. express.json   - parses incoming req with JSON payload.
//      3. express.urlencoded - parses incoming req with url
//         encoded payload.

// Syntax to call middlewares:
// app.use(<middleware>)

// 1. express.static()
// Useful for static files, css, images etc.
app.use(express.static('public')); // no '/' here
// With this, you can now access anything inside 'public' folder
// directly from the "root" url. i.e. localhost:9969/<that_file>
// i.e. localhost:9969/styles.css

// "app.use" also accepts a route as first param.
app.use('/img', express.static('images'));
// This will take all the contents of 'images' folder and route
// it to "localhost:9969/img" url.

// 2. express.json()
app.use(express.json());
// With this, we can parse JSON directly from "request" object.
app.post("/checkData", (req, res) => {
    // parse JSON directly from req.
    const id = req.user_id;
    console.log(id);
    res.send(id ? "Found" : "Not Found");
});

// Some useful third Party middlewares for Express.
// express-documentation
// body-parser
// helmet

//////////////////////////////////////////////////////////////
// NEXT()
//////////////////////////////////////////////////////////////

// We also get a third parameter to the route handler. It is
// a callback function, we can name it anything, but just to
// avoid confusions, we name it 'next'.

// It can be used to have additional callbacks to the routes.
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
// We can add any number of additional callbacks using next()
app.get(`/test`,
    (req, res, next) => {
        console.log(`Authenticated...`);
        next(); // called next.
    }, // adding additional callback to this route.
    (req, res, next)=> {
        console.log(`Checked! User id active...`);
        next();
        // Remember to call next() in each of the passed cb.
    },
    // Definition for next() at the end.
    (req, res)=> {
        console.log(`Accessing test page.`);
        res.send("Done");
    }
);

//////////////////////////////////////////////////////////////
// ERROR HANDLER MIDDLEWARE in EXPRESS.JS
//////////////////////////////////////////////////////////////

// IMP: Should be declared beofre app.listen();

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});
// Now when you hit a non defined page e.g.
// localhost:9969/lskshfk
// it returns this string 'Something went wrong!' as a response
// and prints the error stack trace to the server logs.

//////////////////////////////////////////////////////////////
// SECURITY BEST PRACTICES
//////////////////////////////////////////////////////////////

// Keep updating the node version as well as all the packages
// and express. Ensure your dependencies are secure. npm audit.

// use TLS

// use Helmet - protects your app. sets http headers appropriately
// and securely. collection of middleware functions that does that.

// use cookies securely.

// prevent brute force attack.

// rate-limiter-flexible. to rate limit
