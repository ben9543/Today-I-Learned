# Higher-Order Functions

## Abstraction

- Functions that operate on other functions, either by taking them as arguments or by returning them.

- Basically meaning that we can return a function

- Example 1

    ```JS
    function greaterThan(n) {
      return m => m > n;
    }
    let greaterThan10 = greaterThan(10);
    console.log(greaterThan10(11));
    // → true
    ```

- Example 2

    ```JS
    function noisy(f) {
      return (...args) => {
        console.log("calling with", args);
        let result = f(...args);
        console.log("called with", args, ", returned", result);
        return result;
      };
    }
    noisy(Math.min)(3, 2, 1);
    // → calling with [3, 2, 1]
    // → called with [3, 2, 1] , returned 1
    ```   
## ForEach vs Map

- [Median Post](https://codeburst.io/javascript-map-vs-foreach-f38111822c0f?gi=641bf5efa2c2)

- `forEach` returns nothing(`undefined`), while `map` returns an array.

- `forEach()`: executes a provided function once for each array element.

- `map()`: creates a new array with the results of calling a provided function on every element in the calling array.

## Summarizing with reduce

- Example

    ```js
    function reduce(array, combine, start) {
      let current = start;
      for (let element of array) {
        current = combine(current, element);
      }
      return current;
    }

    console.log(reduce([1, 2, 3, 4], (a, b) => a + b, 0));
    // → 10
    ```

- Example of `Array.reduce`

    ```js
    console.log([1, 2, 3, 4].reduce((a, b) => a + b));
    // → 10
    ```
