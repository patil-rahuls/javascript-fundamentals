## Securing REST APIs

### 1. Authentication & Authorization:

#### Authentication using OAuth 2.0

1. Use a short lived JWT Token
2. Separation of Concerns
   
   **Auth Server**
   - _Verifies User_
   - _Issues JWT_
    
   **API Server**
   - _Validates JWT_
   - _Hosts data/APIs_


> Example : _Secure Machine to Machine Communcation(REST API)_
> 
> ```
> +------------+                              +---------------+
> |            | - 1. Client ID & Secret ---> | Authorization |
> |  Node.js   |                              |    Server     |
> | Application| <----- 2. Short-lived JWT -- |   (Cognito)   |
> | (Machine)  |                              +---------------+
> |            |                              +---------------+
> |            | -- 3. API Request + JWT ---> |  API Server   |
> |            |                              |               |
> |            | <------  4. API Response --- | (API Gateway) |
> +------------+                              +---------------+
> 
> ```
>
> _How the Authentication Flow Works_
> 
> _Instead of a user logging in, the Node.js application uses two static credentials provided by the API: a Client/Partner ID (like a username) and a Client/Partner Secret (like a long, secure password)._
>
>1. **Request Token**: 
>  
>     Your Node.js script sends an HTTPS POST request containing its `client_id` and `client_secret` to the Authorization Server's `/token` endpoint.
> 
> 2. **Receive JWT**: 
>   
>     The Authorization Server verifies the credentials and returns a short-lived JWT Access Token _(usually valid for 1 hour)_.
> 
> 3. **Call API**: 
>   
>     Your Node.js script stores this token in memory and attaches it to the `Authorization: Bearer <TOKEN>` header of every API request.
> 
> 4. **Token Expiration**: 
> 
>      The Node.js script continues using that token until it expires. Once it receives a `401 Unauthorized error`, it automatically requests a new token by sending the secrets again.
> 
> &nbsp;
>
> _Example: Client application_
> ```javascript
> import axios from "axios";
> 
> // 1. Load credentials securely
> // from system environment variables
> const CLIENT_ID = process.env.MY_API_CLIENT_ID;
> const CLIENT_SECRET = process.env.MY_API_CLIENT_SECRET;
> const AUTH_SERVER_URL = "https://abc.com/auth";
> const API_URL = "https://abc.com/api";
> 
> let cachedToken = null;
> 
> async function getAccessToken() {
>   if (cachedToken) return cachedToken;
> 
>   try {
>     // Exchange credentials for a
>     // short-lived JWT Access Token
>     const response = await axios.post(
>       AUTH_SERVER_URL,
>       {
>         grant_type: "client_credentials", 
>         // Protocol requirement
>         client_id: CLIENT_ID,
>         client_secret: CLIENT_SECRET,
>       },
>       {
>         headers: { 
>           "Content-Type": "application/x-www-form-urlencoded" 
>         },
>       },
>     );
> 
>     cachedToken = response.data.access_token;
> 
>     // Automatically clear token from memory
>     // right before it expires (e.g., 3600 seconds)
>     setTimeout(
>       () => {
>         cachedToken = null;
>       },
>       (response.data.expires_in - 60) * 1000,
>     );
> 
>     return cachedToken;
>   } catch (error) {
>     throw new Error("Authentication failed");
>   }
> }
> 
> async function fetchSecureData() {
>   const token = await getAccessToken();
> 
>   // Call the actual API
>   // server using the JWT
>   const response = await axios.get(API_URL, {
>     headers: { Authorization: `Bearer ${token}` },
>   });
> 
>   return response.data;
> }
> ```

---
&nbsp;
### 2. Sending the Cookies _(including JWT Cookie)_ securely:

_The cookie in which we are sending the JWT should have the following attributes:_

**`httponly = true`** _(not readable by code)_

**`secure = true`** _(enforces https)_

**`samesite = strict or lax`** _(prevent requests from other origin/websites)_

---

&nbsp;
### 3. Use TLS

It enforces HTTPS communication. 

- Use the HTTP Strict Transport Security (HSTS) header to force browsers and mobile apps to interact with your API strictly over HTTPS. The easiest way to apply this in an Express app is by integrating the helmet middleware

  ```javascript
  const helmet = require('helmet');

  // Configures HSTS headers automatically
  app.use(helmet({
    hsts: {
      maxAge: 31536000, // Enforce for 1 year in seconds
      includeSubDomains: true,
      preload: true
    }
  }));
  ```

- Use NGINX:
   
  Offloading TLS to Nginx is the industry-standard best practice.

---
&nbsp;
### 4. Headers Configuration

- Use hemlet

  ```javascript
  const express = require('express');
  const helmet = require('helmet');

  const app = express();

  // Standardizes and injects 
  // production-ready security headers
  app.use(helmet()); 

  ```

  helmet automatically sets the following headers.

  - Strict-Transport-Security (HSTS)

    ```
    Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
    ```

  - Content-Security-Policy (CSP)

    Tight CSP since APIs don't serve frontend assets.
    ```
    Content-Security-Policy: default-src 'none'; frame-ancestors 'none';
    ```
  
  - X-Frame-Options

    Prevents your API responses from being rendered inside an <iframe_>, <embed_>, or <object_> tag on another site. This stops clickjacking attacks completely.
    ```
    X-Frame-Options: DENY
    ```

---

&nbsp;
### 5. Input Validation & Sanitization

**Use Libraries like `zod`, `ajv`**

Strong input validations should be implemented at both front-end as well as at the back-end.

Schema level input validatoin should be implemented. Both the request and the response should have their schemas defined.

---
&nbsp;

### 6. Use VPC or Private network

**For private Endpoints, use VPC**

_Whitelist only trusted IPs, and block all other IPs._

---
&nbsp;

### 7. Rate Limiting

**Based on IP**

**Based on combination of IP + Browser Fingerprinting** 

_For preventing DDoS _(Distributed Denial of Service)_ attacks._

Keep a list of `Blacklisted Users` in Redis and apply rate-limiting if request is coming from one of them.

---
&nbsp;

### 8. Prevent MySQL injections using Prepared Statements:

**When working with MySQL or Postgres, use Prepared statements i.e. parameterized queries.**

---
&nbsp;

### 9. Proper event logging and prevent logging PII data.

The level of logging should be sufficient to backtrace any issue/bug.

PII data should not be logged at all.

---
&nbsp;

### 10. Error Handling

The error handling should be properly done.

The error trace should only get printed/logged at the server/backend side and not to the client side.

The error logged at the server side should give developers clear debugging info while the error given to the client-app/frontend should give user/hackers absolutely nothing like `An internal server error occurred`.

---
&nbsp;
### 11. Unclear responses (Confuse the attackers)

If the user is from the Blacklist, give vague, confusing responses to them.

_e.g. when an attcaker is attempting to login, block him by returning error like `Server Busy. Please try again in some time.`._

---
&nbsp;
### 12. use NGNX as a reverse proxy

Without Nginx, you expose your Node.js server directly to the internet (usually on port 3000 or 8080). If an attacker targets that port, they interact directly with your application runtime.
If your server is running node using elevated permissions, just because, it needs to work with file systems(read/write to files), then it can be vulnerable to attacks if attacker gets access to the server via some vulnerability of a 3rd partt package that your application uses.

We can keep NGNX as a reverse proxy, i.e. all the requests would go through the NGNX server, so the other secure ports on the node server(80, 443) remain secure and untouched.

```
[ Internet Traffic ] ──► [ Nginx (Ports 80/443) ] ──► (Internal Network) ──► [ Node.js (Port 3000) ]

```

---

---

<!-- PAGINATION_START -->

**Parent:** [9. Misc Read](..)
**Previous:** ← [CSRF and it's Prevention](04-csrf.md)
**Next:** _None_

<!-- PAGINATION_END -->
