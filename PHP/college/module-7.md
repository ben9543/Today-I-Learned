# 7. Advanced Arrays

## Types of Arrays

1. Indexed arrays - Arrays with a numeric index

2. Associative arrays - Arrays with named keys

3. Multidimensional arrays - Arrays containing one or more arrays


## Array Functions

- PHP array functions takes an array as its first value.

```php
// Example
// append two elements to $input
array_push($input, $x, $y);
```

- `array_splice ($array, $offset, $length, $replacement) : array`: Remove a portion of the array and replace it with something else

    * `$offset`: The starting index of the removed portion

    * `$length`: If length is specified and is positive, then that many elements will be removed.

    - Example

    ```php
    $pets = array(
     "dog", // first element (0)
     "cat", // second element (1)
     "mouse", // third element (2)
     "snake"); // fourth element (3)

    ```
    - `array_splice($pets, 3, 0, array("rat", "rabbit"));` <br/>=>[ "dog", "cat", "mouse", "snake", "rat", "rabbit" ]

    - `array_splice($pets, 3, 1, array("rat", "rabbit"));` <br/>=>[ "dog", "cat", "mouse", "rat", "rabbit" ]


- `array_unique($array)`: Removes duplicated elements

- `array_merge($arr1, $arr2)`: Merge two arrays

- `array_key_exists($key, $array)`: Returns a true if the array has the key

## Array pointer

- You can get the current pointer element with `current()` function.

- You can move a pointer inside of an array with several functions such as `end()`, `next()`, `prev()`, `reest()`, `each()`.

- `reset()` : moves the internal pointer to the first element of the array

- `each` : returns the current element key and value, and moves the internal pointer forward

## Search Array

1. in_array(): Returns a boolean value

2. array_search(): Returns the index of the value

## Compare Array

1. array_diff(): Returns an array of different elements.

2. array_intersect: Returns an array of overlapping elements.
