# Data Types
1. Number
2. String
3. Boolean
4. Null
5. Undefined
6. ~~Object => Not primitive data type~~

## Null vs Undefined
A variable that has not been assigned a value is of type undefined.

A method or statement also returns undefined if the variable that is being evaluated does not have an assigned value. A function returns undefined if a value was not returned.

When checking for null or undefined, beware of the differences between equality (==) and identity (===) operators, as the former performs type-conversion.

```JavaScript
typeof null          // "object" (not "null" for legacy reasons)
typeof undefined     // "undefined"
null === undefined   // false
null == undefined   // true
null === null        // true
null == null         // true
!null                // true
isNaN(1 + null)      // false
isNaN(1 + undefined) // true
```


[Difference between null and undefined](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null#Difference_between_null_and_undefined)
