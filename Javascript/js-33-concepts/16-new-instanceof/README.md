# 16. `new`, Constructor, `instanceof`, and `typeof`

## 1. Links

- [33-js-concepts #16 new, Constructor, instanceof and Instances](https://github.com/leonardomso/33-js-concepts#16-new-constructor-instanceof-and-instances)

- [JavaScript For Beginners: the ‘new’ operator](https://codeburst.io/javascript-for-beginners-the-new-operator-cee35beb669e)

- [CSS-TRICKS: Understanding JavaScript Constructors](https://css-tricks.com/understanding-javascript-constructors/)

- [Beyond typeof and instanceof: simplifying dynamic type checks](https://2ality.com/2017/08/type-right.html)

## 2. `new` operator

### Steps when you use `new`

1. It creates a new, empty object.

2. It binds `this` to our newly created object.

3. It adds a property onto our newly created object called `__proto__` **which points to the constructor function’s prototype object.**

```js
second.__proto__ === Student.prototype; // => True
```

4. It adds a return `this` to the end of the function, so that the object that is created is returned from the function.

```js
function Student(name, age) {
  this.name = name;
  this.age = age;
}
var first = new Student('John', 26); // => This would work
var first = Student('John', 26); // => This would not work
```

## Constructor

## Definition

- Every object in JavaScript **inherits a constructor property from its prototype**, which points to the constructor function that has created the object

```js
var s = new String("text");
s.constructor === String;      // true

"text".constructor === String; // true

var o = new Object();
o.constructor === Object;      // true

var o = {};
o.constructor === Object;      // true

var a = new Array();
a.constructor === Array;       // true

[].constructor === Array;      // true
```

## 3. `typeof` vs `instanceof`

### Definitions

- `typeof` checks if a value is an element of a **primitive type**

- `instanceof` checks if a value is an instance of a class or a constructor function

### Few tips

- `typeof null` is `object`, not `null`.

- `typeof` distinguishes between objects and functions
