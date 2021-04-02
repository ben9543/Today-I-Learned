# Chapter 2. Program Structure

## Bindings

- Equipollent to `variable`

- Example

    ```js
    let ten = 10;
    ```
- When a binding points at a value, that does not mean it is tied to that value forever.

- They do not *contain* values; they grasp them—two bindings can refer to the same value.

```js
let luigisDebt = 140;
luigisDebt = luigisDebt - 35; // Value changes
```

### `var` and `const`

- `var`:  The way bindings were declared in pre-2015 JavaScript. It differs from `let`.

- `const`: It points at the same value for as long as it lives.

## Control Flow

- The statements are executed as if they are a story, from top to bottom.

- We may want to create a branching road, where the program takes the proper branch based on the situation at hand. This is called *conditional execution.*

```js
let theNumber = Number(prompt("Pick a number"));
if (!Number.isNaN(theNumber)) {
  console.log("Your number is the square root of " +
              theNumber * theNumber);
}
// With this modification, if you enter “parrot”, no output is shown.
```
- Tip: `Number.isNaN` function is a standard JavaScript function that returns `true` only if the argument it is given is `NaN`


## Breaking Out of a Loop

- There is a special statement called break that has the effect of immediately jumping out of the enclosing loop, which is `break`;

- `continue` keyword is similar to `break`, in that it influences the progress of a loop. When `continue` is encountered in a loop body, control **jumps out of the body and continues with the loop’s next iteration.**
