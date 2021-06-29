# 19. Map, Reduce, and filter

## Links

- [DEV: .map(), .filter(), and .reduce()](https://dev.to/pickleat/map-filter-and-reduce-2efb)


## 0. Before get in (From MDN)

##### 1. `map()` method **creates a new array**

##### 2. `filter()` method **creates a new array**

##### 3. `reduce()` method **executes a reducer function** & **returns a value(but depends on the reducer function)**


## 1. `map()`

- Executes a function to each element is the array.
- Returns an array with the changed(can also be unchanged) elements.

```js
let numbers = [1,2,3,4,5]
numbers = numbers.map(numb => numb+1)
console.log(numbers)
// will be [2,3,4,5,6]
```

## 2. `filter()`

- Returns an array of elements that only meet that condition.

```js
let numbers = [1,2,3,4,5]
numbers = numbers.filter(numb=> numb % 2 == 0) // only even numbers
console.log(numbers)
// will be [2,4]
```
## 3. `reduce()`

- Executes a reducer function on each element of the array.

- `Array.prototype.reduce()`

    - The first parameter: A reducer function
    - The second parameter: First starting value.

- `reducer(Accumulator, CurrentValue)`

    - Accumulator: First value || result of previous execution
    - CurrentValue: Current looped element of the initial array


```js
var arr = [1,2,3,4,5];

// Add up each element
function reducer(acc, curr){
    console.log("Accumulator: ", acc, "Current Value: " ,curr)
    return acc + curr; // returns an value
}

// This merge each value to array
function arrReducer(acc, curr){
console.log("Accumulator: ", acc,"Current Value: " ,curr)
    return acc.concat(curr); // returns an array
}
const result = arr.reduce(reducer);
// > Accumulator:  1 Current Value:  2
// > Accumulator:  3 Current Value:  3
// > Accumulator:  6 Current Value:  4
// > Accumulator:  10 Current Value:  5
// result: 15
const arrResult = arr.reduce(arrReducer, [1,2,3]);
// > Accumulator:  (3) [1, 2, 3] Current Value:  1
// > Accumulator:  (3) [1, 2, 3] Current Value:  1
// > Accumulator:  (4) [1, 2, 3, 1 Current Value:  2
// > Accumulator:  (5) [1, 2, 3, 1, 2] Current Value:  3
// > Accumulator:  (6) [1, 2, 3, 1, 2, 3] Current Value:  4
// > Accumulator:  (7) [1, 2, 3, 1, 2, 3, 4] Current Value: 5
// result: [1, 2, 3, 1, 2, 3, 4, 5]
```
