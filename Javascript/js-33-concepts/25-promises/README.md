# 25. Promises

## Links

- [The ES6 Promises](https://codeburst.io/the-es6-promises-87a979ab27e4)
- [25. Promises for asynchronous programming](https://exploringjs.com/es6/ch_promises.html#sec_overview-promises)

## 1. So what exactly is a Promise?

- The concept of Promise was first introduced as an alternative of callback functions.

- In ES6, Promise gives us control over our `async` function and allows us to either resolve or reject an operation request.

- Whenever you make Promise you can either **resolve** it or **reject** it.

```js
const isSmallThenTen = (num) => {
    return new Promise((resolve, reject) => {
        if(num < 10) {
            resolve(true)
        } else {
            reject(false)
        }
    })
}
```

- As you can see the most important thing in Promise is that Promise takes a function as an argument that returns either `resolve` or `reject`

- To make this look better we use `then` and `catch` functions. `then` for resolve and `catch` for reject.

## 2. States of Promise

1. Pending
2. Fulfilled
3. Rejection
