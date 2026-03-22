
//////////////////////////////////////////////////////////////
// XSS ///////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////

/*
// XSS Attacks
// https://www.youtube.com/watch?v=pdC3H8SX-F4

Cross-site scripting(XSS)
Attacks are largely the result of a mistake made on backend
web servers where someone fails to escape data that’s submitted
by users.
When that happens it’s possible to inject a tag to load
JavaScript code from another web site. That code could be
harmless but it could also contain something dangerous,
like malware.

Types of XSS attacks
1. Stored XSS -
    Script gets stored on the server through an unescaped form
    input. Each time a user requests that form, that stored code
    gets executed.
2. Reflected XSS -
    Script gets executed from another harmful website.

IMP: How to prevent
1. Set CSP Content Security Policy headers.

More here:
https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP
and
https://hacks.mozilla.org/2009/10/content-security-policy/

    "script-src <policy>"
    It makes it possible for a web site author, via HTTP headers,
    to specify what types of scripts can be loaded and from where.

Content-Security-Policy: default-src 'self'
    - Allows all content to come from the site's own origin
    (excluding subdomains.)

Content-Security-Policy: default-src 'self' example.com *.example.com
    - Allows content from site's own domain 'self' and a trusted
    domain example.com and all its subdomains.

Content-Security-Policy:
    default-src 'self';
    img-src *;
    media-src example.org example.net;
    script-src userscripts.example.com```
    - Here, by default, content is only permitted from the document's
    origin, with the following exceptions:
        - Images may load from anywhere (note the "*" wildcard).
        - Media is only allowed from example.org and example.net
          (and not from subdomains of those sites).
        - Executable script is only allowed from userscripts.example.com.

Content-Security-Policy: default-src https://onlinebanking.example.com
    - Allows contents to loaded strictly on TLS i.e. over HTTPS through
    the single origin onlinebanking.example.com

IMP: - How can a CSP header in a XHR request(APIs) improve security,
after the fact that the HTML page is already loaded and the "main"
CSP has already been evaluated?

CSPs only apply to Web Pages and not APIs.
This is because CSP is designed to impair XSS and Code-injection attacks
that rely on other resources being loaded with a webpage.
XSS is possible with some input forms on an html page.
APIs do not have it.

- Another Very Important Point -
  Frames are commonly used for CSP bypasses. If a frame was allowed in
  a page and not blocked by the CSP, the frame has it's own CSP scope.
  So if you create some API for data - you don't want to allow it to be
  set as a frame as it could be used for bypassing the original CSP.

  So you can block this vulnerability by setting
    Content-Security-Policy: frame-ancestors 'none';
  and then your API will refuse to be framed.

  Also It is better to protect API responses with the "default-src `none"
  policy, as well as 404/403/500, etc pages.

And always Sanitize/escape user inputs at both frontend as well as backend
properly.
*/
