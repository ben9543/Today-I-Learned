# 3. Value Types and Reference Types

In JavaScript we have types that are copied by value and types copied by reference.

>Primitive types are **`copied by value`**

>Object types are **`copied by reference`**

##### Primitive types
- null
- undefined
- Number
- String
- Boolean

##### Object types
- Object
- Array
- Function
- ...

Primitive Example

```JavaScript
var a = 5;
var b = a;
a = 10;
console.log(a); // 10
console.log(b); // 5
// this is also true for string, boolean, null, undefined

```
b is still 5 even though the value of a has changed.
The value is **copied**

Object Example

```JavaScript
var a = {};
var b = a;
a.a = 1;
console.log(a); // {a: 1}
console.log(b); // {a: 1}

```

Array Example
```JavaScript
var a = [];
var b = a;
a.push(1);
console.log(a); // [1]
console.log(b); // [1]
console.log(a === b); // true
```

When we assign Objects (non-primitives) to the variable, we copy them by reference.

Advanced

When we compare Objects, equality operator (===) will check if they point to the same address.

```JavaScript
console.log([10] === [10]); // false
```
Since the first array [10] and the second array [10] are different array(has different references), this will return false.

[Article Link](https://medium.com/dailyjs/back-to-roots-javascript-value-vs-reference-8fb69d587a18)
