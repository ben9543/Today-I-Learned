# Cross Origin Resource Sharing

## Links

- [MDN - CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)

- [Median - Three ways to fix CORS error](https://medium.com/@dtkatz/3-ways-to-fix-the-cors-error-and-how-access-control-allow-origin-works-d97d55946d9)

- [npm - cors](https://www.npmjs.com/package/cors)

## So what is Cross Origin Resource Sharing (CORS)?

- `CORS` is an HTTP-header based mechanism that allows a server to indicate any other origins (domain, scheme, or port) than its own from which a browser **should permit loading of resources.**

- Therefore, the request from different domain will be blocked by CORS policy.

## When CORS gets annoying?

- If you are ever familiar with Node JS, you will get to see this type of error A LOT, when you are trying to put frontend and backend part together for your application.

- ![](https://miro.medium.com/max/3200/0*bI2yxKryqJzyUkud)

- This is because, XMLHttpRequest follows `same-origin policy` as their basic policy. This means that a web application using those APIs **can only request resources from the same origin ** the application was loaded from unless the response from other origins includes the right CORS headers.

- Even though you are requesting from http://localhost:4000 to http://localhost:4001 you will be likely getting the error unless you set the CORS headers.

- Sending Cookies are not allowed if CORS header is not set. 

## CORS policy lives in your **browsers**

- Your server is not aware of CORS policy even either same origin policy. The browser is the one who attaches `origin` toe HTTP request.

- This is because again, XMLHttpRequest(XHR) automatically attaches `origin` header to your HTTP request.

- Therefore, you will never get in trouble with when you are not using browsers for making HTTP requests. But this is meaningless when you want clients to use your services who are very used to with using Chrome, Safari, Firefox, and so on.

## Simple Requests

- More about Simple Requests: [MDN - Simple Request](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS#simple_requests)

- In short, simple requests are accepted easily by servers even though they are from other origins because they don't trigger [CORS preflight](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS#preflighted_requests).

- Normally we don't deal with Simple Requests, because of the following reason:

  - The only allowed values for the Content-Type header are:
  
      1. application/x-www-form-urlencoded
      2. multipart/form-data
      3. text/plain

- As you can see, there is no `application/json` in the list. So for most of JavaScript devs out there, it is more common to deal with `Preflighted Requests`. 

- Typical cases requiring preflighted requests:

    1. A website makes an AJAX call to POST JSON data to a REST API meaning the Content-Type header is application/json

    2. A website makes an AJAX call to an API which uses a token to authenticate the API in a request header such Authorization

## Preflighted Reqeusts

- In the case of `Preflighted Reqeusts` the browser first sends an HTTP request using the OPTIONS method to the resource on the other origin.
  
- Using OPTION method first helps server determine if the actual request is safe to send.

- Flow of Prelighted Request

![](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/preflight_correct.png)

## Real life example with Node JS

1. Using `cors` package from npm

```js
import express from "express";
import cors from "cors";

const app = express();

app.use(cors()); // This will enable ALL CORS Requests
```

2. 