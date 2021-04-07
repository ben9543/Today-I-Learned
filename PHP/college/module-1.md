# Module One

## Using Variables and Constants

### Variable

- In PHP, you don't need to define the type of the variable, because it is linked to the value of the variable.

- Use `$` to define a variable.

- Variable names are case-sensitive.

- Unlike some programming languages, PHP **required that you first declare and initialize a variable** before calling the variable.

### Constants

- As the name suggests, a constant variable cannot change during the execution of the script.

- A constant is case‐sensitive by default. By convention, constant identifiers are always **uppercase**.

- Use `define(<NAME_IN_STRING>, <VALUE>);` to set a constant.


## Arrays

### Three types of PHP arrays

* Indexed arrays: Arrays with a numeric index

* Associative arrays: Arrays with named keys

* Multidimensional arrays: Arrays containing one or more arrays

### Creating an array

- Indexed Arrays:

    ```php
    $foobar = array($foo, $bar);
    ```

    is equivalent to

    ```php
    $foobar[0] = $foo; $foobar[1] = $bar;
    ```

- Associative Arrays:

    ```php
    $foobar = array('foo' => $foo, 'bar' => $bar);
    ```

    is equivalent to

    ```php
     $foobar['foo'] = $foo; $foobar['bar'] = $bar;
    ```

## Expressions

- Expressions are the most important building blocks of PHP. In PHP, almost anything you write is an expression.
