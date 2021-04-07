# Form Handling in PHP


## Superglobals

> PHP has special built‐in variables of data type associative array that store server, script, form, session information. These variables are available at all scopes of your script.

- $GLOBALS: PHP stores all global variables in an associative array called $GLOBALS[“string”].
- $_SERVER : A variable which holds information about headers, paths, and script locations.
- $_REQUEST : Array of all the elements in the $_COOKIE, $POST, $_GET array
- $_POST : Array of values input into a form using the POST method
- $_GET : Array of values input into a form using the GET method
- $_FILES
- $_ENV
- $_COOKIE
- $_SESSION  

## Useful variables & Tips

- `$_SERVER['PHP_SELF']`: Returns current url

- `$_SERVER['SERVER_NAME']`: Returns the name of the host server(such as www.w3schools.com)

- More about `$_SERVER`: [W3schools](https://www.w3schools.com/php/php_superglobals_server.asp)

- When using `$_GET` & `$_POST`, it is good to use `isset()` to avoid error messages.

    ```php
    if(isset($_POST['email']) && isset($_POST['username']))
    {
        echo $_POST['email'].'<br/>';
        echo $_POST['username'];
    }
    ```
