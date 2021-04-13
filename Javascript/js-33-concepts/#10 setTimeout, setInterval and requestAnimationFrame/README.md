# 10. setTimeout, setInterval and requestAnimationFrame

## Citation Links

- [JavaScript.Info](https://javascript.info/settimeout-setinterval)

- [CSS Tricks](https://css-tricks.com/using-requestanimationframe/)

## setTimeout & setInterval

- Sometimes we want to set a schedule of when to fire functions.

    - `setTimeout` allows us to **run a function once after the interval of time**.

    - `setInterval` allows us to **run a function repeatedly**, starting after the interval of time, then repeating continuously at that interval.

- These methods are not a part of JavaScript specification, but they are supported in all browsers and Node.js.

- Nested `setTimeout`

    * Nested `setTimeout` allows to set the delay between the executions more precisely than `setInterval`

    * The nested `setTimeout` is a more flexible method than `setInterval`. This way the next call may be scheduled differently, depending on the results of the current one.

    * Using `setInterval`

    ```js
    let i = 1;
    setInterval(function() {
      func(i++);
    }, 100);
    ```

    * Using nested `settimeout`

    ```js
    let i = 1;
    setTimeout(function run() {
      func(i++);
      setTimeout(run, i * 100); // We can perform func with different delay
    }, 100);
    ```

## requestAnimationFrame

- Don't get scared of its name!`requestAnimationFrame` is simply a better alternative to `setInterval`.

- Why better?

    * The browser can optimize it, so animations will be smoother

    * Animations in inactive tabs will stop, allowing the CPU to chill

    * More battery-friendly

- We need recursion for this

    - Example

        ```js
        function repeatOften() {
          // Do whatever
          requestAnimationFrame(repeatOften);
        }
        requestAnimationFrame(repeatOften);
        ```
    
