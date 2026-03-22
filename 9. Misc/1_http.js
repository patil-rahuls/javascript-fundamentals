//////////////////////////////////////////////////////////////
// HTTP BASICS ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////

/*
// 1. HTTP is a protocol that sits on the TCP/IP protocol
// suite's Application layer.

// Also called client-server protocol.

// 2. HTTP is connectionless - after making the requests, the
// client disconnects from the server.
// When response is ready, the server re-establishes connection
// with client and delivers the response.

// 3. HTTP is stateless - client and server know about each
// other just during the current  request.
// Once the request is complete, both the client and the server
// have no information about each other.
// To re-connect, both computers need to provide information to
// each other as if they are connecting for the first time.

// 4. HTTP can be used to send any type of data as long both
// client and the server are able to read it.

// 5. HTTP request/response cycle.
        - Client requests a website.
        - It first makes a request to get the html document.
        - Then inside the html document, there are links to css files,
        so client will request the css file while rendering the html.
        - Similarly fonts, javascript files/libraries are requested
        from server.


//////////////////////////////////////////////////////////////
// A HTTP request message has 3 parts.
1. start line
    e.g. GET /bg.png HTTP/1.0
2. HTTP headers
3. Blank line indicating all the meta info for the request has
   been sent.
4. Request Body

// A HTTP response message has 3 parts.
1. Status line
   PROTOCOL-VERSION    STATUS-CODE    STATUS-TEXT
    e.g. HTTP/1.1 404 Not Found
2. HTTP headers
3. Blank line
4. Response Body(optional)

// Both Requests and responses share a common structure in HTTP.


7. Some more examples of HTTP messages
* HTTP Request for getting a root page in Frnech language.
    GET / HTTP/1.1
    Host: developer.mozilla.org
    Accept-Language: fr
    POST - Sending a form data to server.
    POST /contact_form.php HTTP/1.1
    Host: developer.mozilla.org
    Content-Length: 64
    Content-Type: application/x-www-form-urlencoded
    name=Joe%20User&request=Send%20catalogue


* HTTP Response message looks like this.
    HTTP/1.1 200 OK
    Content-Type: text/html; charset=utf-8
    Content-Length: 55743
    Connection: keep-alive
    Cache-Control: s-maxage=300, public, max-age=0
    Content-Language: en-US
    Date: Thu, 06 Dec 2018 17:37:18 GMT
    ETag: "2e77ad1dc6ab0b53a2996dfd4653c1c3"
    Server: meinheld/0.6.1
    Strict-Transport-Security: max-age=63072000
    X-Content-Type-Options: nosniff
    X-Frame-Options: DENY
    X-XSS-Protection: 1; mode=block
    Vary: Accept-Encoding,Cookie
    Age: 7
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="utf-8">
        <title>A simple webpage</title>
    </head>
    <body>
        <h1>Simple HTML webpage</h1>
        <p>Hello, world!</p>
    </body>
    </html>


Another response with an error like 404.

    HTTP/1.1 404 Not Found
    Content-Type: text/html; charset=utf-8
    Content-Length: 38217
    Connection: keep-alive
    Cache-Control: no-cache, no-store, must-revalidate, max-
    age=0
    Content-Language: en-US
    Date: Thu, 06 Dec 2018 17:35:13 GMT
    Expires: Thu, 06 Dec 2018 17:35:13 GMT
    Server: meinheld/0.6.1
    Strict-Transport-Security: max-age=63072000
    X-Content-Type-Options: nosniff
    X-Frame-Options: DENY
    X-XSS-Protection: 1; mode=block
    Vary: Accept-Encoding,Cookie
    X-Cache: Error from cloudfront
    <!DOCTYPE html>... (contains a site-customized page helping
    the user to find the missing resource)
*/
