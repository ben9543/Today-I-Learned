# 26. async & await

## Links

- [Understanding Async & Await](https://hackernoon.com/understanding-async-await-in-javascript-1d81bb079b2c)

## Overview

- `async` and `await` are extensions of promises.

## Asynchronous Function

- A function which operates asynchronously via the event loop, using an implicit Promise to return its result. But the syntax and structure of your code using async functions is much more like using standard synchronous functions.

- MDN: An async function can contain an await expression that pauses the execution of the async function and waits for the passed Promise's resolution, and then resumes the async function's execution and returns the resolved value. Remember, the await keyword is only valid inside async functions.
