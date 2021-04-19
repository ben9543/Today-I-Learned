# #4 Implicit, Explicit, Nominal, Structuring and Duck Typing

[Article Link](https://www.freecodecamp.org/news/js-type-coercion-explained-27ba3d9a2839/)

Type coercion is the process of converting value from one type to another.

##### Implicit vs Explicit coercion

- Type coercion can be explicit and implicit.

- When a developer expresses the intention to **convert between types by writing the appropriate code**, like Number(value), it’s called **`explicit type coercion`** (or type casting).

- Since JavaScript is a **weakly-typed language**, values can also be converted between different types automatically, and it is called **`implicit type coercion`**. It usually happens when you apply operators to values of different types, like
        1 == null
        2/'5'
        null + new Date()

 or it can be triggered by the surrounding context, like with `if (value) {…}`  where `value` is coerced to boolean.

 But `===` operator does not change type.

 ##### Three types of conversion

    * to string
    * to boolean
    * to number

string uses String(), boolean uses Boolean(), and number uses Number()

Example of implicit and explicit type conversion of boolean value

    Boolean(2)          // explicit
    if (2) { ... }      // implicit due to logical context
    !!2                 // implicit due to logical operator
    2 || 'hello'        // implicit due to logical operator
