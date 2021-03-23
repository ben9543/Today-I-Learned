# 3. Functions

## Global scope in PHP programming

- Global scoped variables cannot be used in functions.

- To use variables globally, we need to use `global` keyword

- Example

    ```php
    $x = "some value";

    function some_func(){
        echo $x; // Cannot be accessed!
    };
    ```
