## HTTP Basics

### Client Server Protocol

HTTP is a protocol that sits on the TCP/IP protocol suite's Application layer. Also called `client-server protocol`.

### HTTP is connectionless

After making the requests, the client disconnects from the server. When response is ready, the server re-establishes connection with client and delivers the response.

### HTTP is stateless

Client and server know about each other just during the current request. Once the request is complete, both the client and the server have no information about each other.

To re-connect, both computers need to provide information to
each other as if they are connecting for the first time.

### Content Types

HTTP can be used to send any type of data as long both client and the server are able to read it.

> ### HTTP request/response cycle.
1. TCP Handshake (Creates a connection).

    DNS Lookup: Browser converts the URL domain name (e.g., xyz.com) into an IP address to communicate with the server.

    TCP Port is selected: HTTP - 80; HTTPS - 443.

    TCP 3-Way Handshake happens:
    - Client sends a SYN (Synchronise) packet.
    - Server replies with a SYN-ACK (Synchronise-Acknowledge) packet.
    - Client sends an ACK (Acknowledge) packet.

2. TLS Handshake (Only for HTTPS)

    Client sends supported encryption algorithms (cipher suites) and a random string.

    Server chooses the cipher suite and sends back its SSL/TLS Certificate (containing its public key).

    Client checks with a Certificate Authority (CA) to ensure the certificate is valid and trusted.

    Key Exchange: Client generates a secret pre-master key, encrypts it with the server's public key, and sends it to the server. Only the server can decrypt this using its private key (Asymmetric Encryption).

    Session Keys: Both sides use that secret pre-master key to generate identical Symmetric Session Keys. All future data is encrypted using these keys.

    At this point of time, a connection is established (and secured, if using HTTPS).

3. Data Exchange (HTTP Request & HTTP Response)

    The HTTP Request: The browser sends a text command(HTTP request message) over the connection.

    The HTTP Response: The server processes the request and sends data back(HTTP response message). (raw bytes).

4. Closing the Connection

    Keep-Alive: Modern connections usually stay open (Connection: keep-alive) to reuse the same TCP/TLS channel for multiple files (like CSS, JS, and images).

    Termination: Once finished, a 4-way TCP teardown closing handshake terminates the connection.

Data exchange for static assets does not happen all at once. It is triggered progressively as the browser reads the HTML document from top to bottom.

- When the client recieves the HTTP response, it is parsed into characters and tags(converts the raw bytes into characters), and it starts building a DOM tree.

- A background thread called the `Preload Scanner` looks for URLs (href, src) and immediately requests them in parallel while the main thread is still processing the DOM.

- Multiplexing: The browser opens one single connection to the server.

  Interleaving: All static assets (CSS, JS, images) are broken into tiny frames and downloaded simultaneously over this single connection. No queuing or waiting for other files to finish.

  However, they are set with a priority.

  > CSS files get the highest priority,

  > then the synchronous \<script> tags,

  > and finally, the images, videos, and scripts marked with async or defer.

- The web-application is rendered/painted on the screen.


---
&nbsp;

### Both Requests and responses share a common structure in HTTP.

A HTTP request message has 3 parts.

1. start line
   `GET /bg.png HTTP/1.0`
2. HTTP headers
3. Blank line indicating all the meta info for the request has been sent.
4. Request Body

---

A HTTP response message has 3 parts.

1. Status line
   PROTOCOL-VERSION STATUS-CODE STATUS-TEXT
   `HTTP/1.1 404 Not-Found`
2. HTTP headers
3. Blank line
4. Response Body(optional)

---

> ### Examples of HTTP messages:

> HTTP Request for getting a root page in Frnech language.
>
>     GET / HTTP/1.1
>     Host: developer.mozilla.org
>     Accept-Language: fr
>     POST - Sending a form data to server.
>     POST /contact_form.php HTTP/1.1
>     Host: developer.mozilla.org
>     Content-Length: 64
>     Content-Type: application/x-www-form-urlencoded
>     name=Joe%20User&request=Send%20catalogue
---

Its HTTP Response message looks like this.
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

---

404 response.
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
<!DOCTYPE html>... (contains a site-customized page
helping the user to find the missing resource)

---
---
