# Data Structures: Array and Object

## Array

### Array Methods

- `array.unshift(<somevalue>)`: Add item to beginning of array.

- `array.shift()`: Remove item from the beginning of array. Also returns the item too.

- `array.pop()`: Remove item from the behind.

- `array.indexOf(<some_element>)`: Return the index of the element.

- `array.lastIndexOf(<some_element>)`: Return the LAST index of the element

- `array.slice(start, end)`: Slice the array. Start is inclusive, end is exclusive.

- If we use `typeof` to an array object, then it will print out `object`. Array is just an strongly indexed object.

### String Methods

- `<STRING>.repeat(n)`: Return a n-time-repeated string.

### Rest Parameter and Spread

- Rest Parameter(takes unlimited arguments) Example

    ```js
    function max(...numbers) {
    let result = -Infinity;
    for (let number of numbers) {
        if (number > result) result = number;
    }
        return result;
    }
    console.log(max(4, 1, 9, -2));
    // → 9
    ```

- Spread Example

    ```js
    let words = ["never", "fully"];
    console.log(["will", ...words, "understand"]);
    // → ["will", "never", "fully", "understand"]
    ```

## Objects

### Object Methods

- You can check if the key is in the object with `in` keyword

    * `console.log("left" in anObject);`

- You can delete the property with `delete` keyword

- If I put the same name of the key with the different value, it will overload it.

- `Object.keys(<MY_OBJECT>)` will return an array of all keys that the object has.

- `Object.assign(<ORIGIN_OBJECT>, <MY_OBJECT>)` will copy the properties of MY_OBJECT into ORIGIN_OBJECT

## Mutability

- Objects are passed by reference, and allocates its memory when it gets assigned by other new variables.

    * Example

        ```js
        var object1 = {value: 10};
        var object2 = object1;
        var object3 = {value: 10};

        console.log(object1 == object2);
        // → true
        console.log(object1 === object2);
        // → true
        console.log(object1 == object3);
        // → false
        console.log(object1 === object3);
        // → false

        object1.value = 15;
        console.log(object2.value);
        // → 15
        console.log(object3.value);
        // → 10
        ```

        - Since object1 and object2 has the same reference, the value changes simultaneously when we change either one of them.

        - Therefore, comparing different objects will return false, even if they have identical properties.

- Defining variable with `const` means you cannot change the variable. But in the case of objects, that means you cannot change the variable's reference. Therefore, changing its property is fine.

    * Example

        ```js
        const score = {visitors: 0, home: 0};

        score.visitors = 1; // This is okay

        score = {visitors: 1, home: 1}; // This isn't allowed
        ```
## JSON

- `JSON.stringify()`: Convert JS object into JSON object.

- `JSON.parse()`: Convert JSON object into JS object.
