## CSRF and it's Prevention

Ability of an evil website/app to perform requests to server on victim's behalf.

_This could be done by hiding a form behind a click on a image link._

_A form submission can be mimicked by an attacker on page load, along with the victim's cookies to make changes in victim's data on that vulnerable website._

It is possible, simply because, any correct request with proper cookies, will make the server believe that the request is genuine from a genuine user _(though its forged)_.


> Example -
>
> _Let's say you are logged in to 'xyz.com'._
>
> _If you open a new tab and in its console, send an HTTP request(POST) using fetch to 'xyz.com', it will automatically send the cookies along with that POST request._
>
> _Someone can write a (malicious) JavaScript code in an html file and upload it somewhere and trick the logged in user to click on that link._
>
> _The malicious JavaScript could can be a form submission with 'onload' attribute of body. It can be hidden in an `<iframe>` to prevent any redirects to be seen by the user._
>
> _It could also be added to `onerror` attribute of an \<img> element._
>
> _If 'xyz.com' has not implemented CSRF tokens and if it has a cookie based session handling, then, that POST request will be completed (simply because the cookies will also get sent along with that POST request, and it will appear to be a valid request for the 'xyz.com' server)._
>

In a nutshell, CSRF is an attack where an attacker causes the victim user to carry out an action unintentionally while that user is authenticated.

---

### Understanding CSRF

CSRF is basically about an attacker exploiting a user's existing session via the way cookies work in a browser.

_The underlying problem is that a cookie is sent with a request regardless of where **(which origin, ie. domain)** the request comes from, the only thing that counts is where it goes to._

_If there is a user logged on to an application (having a session cookie), an attacker may try and get this user to visit his malicious website, from where the attacker can make requests to the application domain with the user's active session (by fully POSTing the user request to the application, or more subtly by creating ajax/fetch calls)._

Also CSRF only applies to requests that change something (state or data).

---
&nbsp;
### SOP - Same Origin Policy (SOP)

It is a core security mechanism built directly into web browsers.

It specifies that if something is downloaded from one domain _(`origin`)_, then another domain will not have access to it.

> ***Exceptions with CORS***
>
> Because SOP can be too restrictive for legitimate websites that need to share data, browsers support **`CORS (Cross-Origin Resource Sharing)`**.
>
>  CORS acts as a controlled exception, allowing servers to tell the browser which external websites are permitted to access their data.
>
For example, consider the following URL:

`http://normal-website.com/example/example.html`

This uses the `scheme- http`, the `domain - normal-website.com`, and the `port number - 80`.

The following table shows how the same-origin policy will be applied if content at the above URL tries to access other origins:
| URL accessed |Access permitted? |
| :--- | :--- |
| http://normal-website.com/example/ |	Yes: same scheme, domain, and port|
| http://normal-website.com/example2/	| Yes: same scheme, domain, and port |
| https://normal-website.com/example/	| No: different scheme and port |
| http://en.normal-website.com/example/ |	No: different domain |
| http://www.normal-website.com/example/ |	No: different domain |
|||

***Why SOP is required?***

_When a browser sends an HTTP request from one origin to another, any cookies, including authentication session cookies are also sent as part of the request._


---

&nbsp;


### Preventing CSRF

> Use of CSRF tokens

https://www.youtube.com/watch?v=TKyHxceaEVg

https://www.youtube.com/watch?v=TwG0Rd0hr18

The CSRF tokens should be tied to the user session. otherwise, attacker can create his own account on the website and use his token to make a malicious form for the attack.

We need to transmit CSRF tokens securely to the client using either:

- a hidden field in html form, OR
- a custom request header.

BUT it should not be transmitted ONLY within the cookies because cookies are automatically sent with each requests, so the attacker would not require any CSRF token at all to carry out the attack. (Read the solutions below.)

https://stackoverflow.com/questions/50732159/how-to-pass-csrf-token-from-server-to-client

So to protect against the attack described above there may be several different strategies.

### `Synchronizer tokens`

The application generates a csrf token, stores it in the user's session (server-side), and also sends it to the client by for example writing it in every form in a hidden field, or in one single field where Javascript can read it from and add to requests.

This works, because an attacker on his domain cannot create a form or request with the valid token that's in the user's session, and also the attacker cannot read the token from an application page.

Of course the attacker can try to download an application form to acquire a token, but then he would need credentials.

The attacker needs both a valid user's session and the csrf token tied to that session.

So this protection basically validates that the request comes from a source that was actually rendered by the legitimate application and not somebody else.

Note that in this case, setting the token in a cookie is pointless, because the cookie will be sent automatically just like the session cookie.

&nbsp;
### `Double posting [Angular JS method]`

A different strategy is to generate a token, and set it as a cookie for the client.

The client then reads the token from the cookie, and sends the same token as a request header as well.

The server only compares whether the request header and the cookie contain the same token.

This works, because an attacker cannot read the application token from a cookie set by a different origin (see SOP above), but the application on the legitimate domain can. So the client sending the request effectively proved that it is running on the legitimate application domain.

The benefit of this is that the application is stateless, does not need a session.

The drawback is that it is slightly less secure.

(Interestingly, the token in this case can even be generated on the client, it still works, because the attacker on his own domain cannot set or read an application domain cookie, but it is definitely less secure as it is a crypto operation in the browser.)

&nbsp;
### `SameSite cookies [Works]`

A new invention by Google in Chrome is the SameSite attribute to cookies (in addition to the already existing and widespread httpOnly and secure cookie attributes).

The underlying problem is that cookies (ie. the session cookie) gets sent to the server based on the request target, and not the origin.

_This means that if attacker.com serves a page to a user and that page sends a post request from the browser to legitapp.com, any cookie sets by legitapp.com will be sent to legitapp.com._

_So if it is a user logged in to legitapp.com visiting attacker.com, the existing session can be exploited._

***This behaviour is changed by the SameSite cookie attribute, which makes a cookie not be sent in such cases when the originating domain is different from the target one.***

>```
>sameSite = strict
>```
> Blocks cookies from being sent on any cross-site request, without exception.
>
> Use Case: High-security applications (like banking portals, crypto wallets, or admin dashboards) where cross-site links must never carry session context


>```
>sameSite = Lax
>```

Links from external applications work: Sends cookies when a user clicks a standard link (\<a href="...">) from an external site to yours.

Assets are blocked: Blocks cookies on cross-site subrequests, such as loading images, iframes, or scripts.

Standard web applications where you want users to stay logged in when arriving via a Google search link or an external app.

---

&nbsp;

> _But the attacker can still open the form/page in a hidden _`<iframe>`_ on his malicious html page, which will eventually give him the CSRF token when the logged in user visits that malicious page. And then he can still submit the form with that csrf token._

> How to prevent this?
>
> Answer:
>
>       Content-Security-Policy: frame-ancestors 'none';

This prevents our application from being run in an irfame.

---
&nbsp;
### How to securely send CSRF token to client?

In AngularJS, Django, Rails etc, the CSRF token is sent to client as a cookie (non http-only) (i.e. in a Set-Cookie header), and then Javascript in the client scrape it out of the cookie and attach it as a separate XSRF-TOKEN header to send back to the server.

Some terminologies:

- Downstream -> From Server to Client.

- Upstream -> From Client to Server.

In addition to using Double posting we should use sameSite cookie type. Also, In order to prevent our page being loaded into an iframe, we should use X-Frame-Options headers.

```
X-Frame-Options: DENY
X-Frame-Options: SAMEORIGIN

```

Instead of sending this header manually in each requests, we can configure our server to send this header automatically with all requests,

https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options

Also, to make your app even more secure, you can disable the feature of opening any page in another tab while the 1st tab is already open. i e. ensuring that only one tab is opened in your browser.

We can do this by making all link-clicks behave like form submits (with of-course CSRF tokens).

_So e.g. let's say a user is logged into 'mybank.com', and instead of clicking on 'My Statements' link, he copies it's url and pastes it in a new tab, it will fail/or log the user out for safety._

_When the user clicks any links, it should be a form submitted to server along with CSRF token which will then be validated by the server and the respective page will be served on that route._

_This, I believe, is a pro level security implementation but may ruin the UX._

&nbsp;

Some more guide.

https://www.youtube.com/watch?v=1UhyByXZeE4

https://www.youtube.com/watch?v=7bTNMSqCMI0

---
---

---

<!-- PAGINATION_START -->

**Parent:** [9. Misc Read](..)
**Previous:** [Cross-site scripting (`XSS`) Attacks](03-xss.md)
**Next:** [Securing REST APIs](05-rest-apis.md)

<!-- PAGINATION_END -->
