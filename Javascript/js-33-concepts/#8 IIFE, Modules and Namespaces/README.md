# 8. IIFE, Modules and Namespaces




## 1. IIFE
[Article Link](https://vvkchandra.medium.com/essential-javascript-mastering-immediately-invoked-function-expressions-67791338ddc6)

IIFE stands for Immediately-Invoked-Function-Expressions

```javascript
!function() {
    alert("Hello from IIFE!");
}();
// Shows the alert "Hello from IIFE!"
// Replacing ! => void will work too
```

##### Explanation
> 1. Whenever JavaScript sees function keyword as the first word in a valid statement, it expects that a function definition is going to take place. `!` basically enforces JavaScript to treat whatever that’s coming after `!` as an expression (any unary operator can be used.)

> 2. But the most interesting stuff happens on line 3 where we execute that function expression immediately.

##### Classical IIFE style
```javascript
// Variation 1
(function() {
    alert("I am an IIFE!");
}());

// Variation 2
(function() {
    alert("I am an IIFE, too!");
})()
```

##### IIFEs and private variables

> One thing that IIFEs are really good at is to do with their ability to create a function scope for the IIFE.

> Any variables declared inside the IIFE are not visible to the outside world.

```javascript
(function IIFE_initGame() {
    // Private variables that no one has access to outside this IIFE
    var lives;
    var weapons;

    init();

    // Private function that no one has access to outside this IIFE
    function init() {
        lives = 5;
        weapons = 10;
    }
}());
```

##### Returning value using IIFE
> Another really important and powerful feature of IIFEs is that they can return a value that can be assigned to a variable.

```javascript

var result = (function() {
    return "From IIFE";
}());

alert(result); // alerts "From IIFE"
```

##### IIFEs with parameters

> Not only IIFEs can return values, but IIFEs can also take arguments while they are invoked.

```javascript
// Takes two variables
(function IIFE(msg, times) {
    for (var i = 1; i <= times; i++) {
        console.log(msg);
    }
}("Hello!", 5)); // Write over here
```


## 2. Modules
[Article Link #1](https://exploringjs.com/es6/ch_modules.html)

[Article Link #2](https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/)

##### How do ES modules help?

> Modules give you a better way to organize these variables and functions. With modules, you group the variables and functions that make sense to go together.

> Unlike function scopes, module scopes have a way of making their variables available to other modules as well. They can say explicitly which of the variables, classes, or functions in the module should be available.


## 3. Namespaces
