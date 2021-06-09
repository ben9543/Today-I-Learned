# 17. Prototype Inheritance and Prototype Chain

## Links

- [Understading JavaScript: Prototype and Inheritance](https://hackernoon.com/understanding-javascript-prototype-and-inheritance-d55a9a23bde2)
- [Prototype vs Class](https://medium.com/@parsyval/javascript-prototype-vs-class-a7015d5473b)
- [Difference between `call` and `super`](https://stackoverflow.com/questions/38034059/javascript-whats-the-difference-between-call-and-super)
- [As a JS Developer, This Is What Keeps Me Up at Night](https://www.toptal.com/javascript/es6-class-chaos-keeps-js-developer-up#:~:text=Prototypes%20vs.,is%20itself%20an%20object%20instance.)
- [MDN: Inheritance and the prototype chain](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
- [Stackoverflow: __proto__ vs .prototype in JavaScript](https://stackoverflow.com/questions/9959727/proto-vs-prototype-in-javascript#:~:text=31%20Answers&text=prototype%20is%20a%20property%20of,object%2C%20pointing%20to%20its%20prototype.)

## 1. Prototype Inheritence
### What's `prototype`?

- Almost all objects in JavaScript have the `prototype` property. 
- The `prototype` is a **reference to another object** and it is used whenever JS can’t find the property you’re looking for on the current object.

### Problems with using `prototype` for inheritence

- Prototypes were not designed for inheritence at the first place. Binding two objects using `call()` will not exactly perform the way that typical inheritence would perform. This can be found out console logging `obj.constructor`

```js
function Animal(name) {
	this.name = name;
	this.sleep = function() {
		return "Hi, I'm " + this.name;
	};
}

function Dog(name) {
    Animal.call(this, name)
    this.makeSound = function () {
        return "Bow wow";
    };
}
```

1. When constructor is `Animal`
```js
// Inheritence part - assigning Animal's prototype to Dog's
Dog.prototype = Object.create(Animal.prototype);

const dog = new Dog("ben");
console.log(dog.constructor);
console.log(dog.name);
console.log(dog.makeSound());
console.log(dog.sleep());

/* 
Output >
[Function: Animal]
ben
Bow wow
Hi, I'm ben
*/
```

- This is returning the Animal function because it is attached to the Dog property upon object creation. This once again shows that those methods and properties weren’t implemented with OO design in mind.

2. When constructor is `Dog`
```js

// Assigning sleep function using Animal's prototype
Dog.prototype.sleep = function() {       
    Animal.prototype.sleep.call(this);
}

const dog = new Dog("ben");
console.log(dog.constructor);
console.log(dog.name);
console.log(dog.makeSound());
console.log(dog.sleep());

/* 
Output >
[Function: Dog]
ben
Bow wow
Hi, I'm ben
*/
```

### Difference between `prototype` and `class`

- So, prototypical OOP and class OOP are not different so much. Basically `class` is a syntatic sugar for prototypical OOP. 
- The most important difference between class- and prototype-based inheritance is that a class defines a type which can be instantiated at runtime, whereas a prototype is itself an object instance.

### `new` in JavaScript

- A constructor in JavaScript is just a plain old function that returns an object.
- The only thing special about a JavaScript constructor is that, when invoked with the `new` keyword, it assigns its prototype as the prototype of the returned object. 


## 2. Prototype Chain

- So just like we have been discovering so far, `JavaScript` is nothing like other class-based languages (`C++`, `Java`, etc)

### `__proto__` vs `prototype` in JavaScript

- `__proto__` is the **actual object** that is used in the lookup chain to resolve methods, etc. 
- `prototype` is the object that is used to build `__proto__` when you create an object with `new`

```js
function Foo(name){
    this.name = name;
}

typeof(Foo.prototype) === typeof({}); // true
typeof(Foo.__proto__) === typeof(Function) // true
Foo.__proto__() === 'undefined'; // true, if you run the function, it will return undefined's string representation

typeof(( new Foo ).prototype) === typeof(undefined);  // true
typeof(( new Foo ).__proto__) === typeof({}); // true, now it's an object
( new Foo ).__proto__ === Foo.prototype; // true, it is an object points its prototype

```

- `( new Foo ).__proto__`: It's an actual `object` that points its `prototype`.
- `Foo.__proto__`: It's a native `function`. If you run the function, you will get the String representation of `undefined`.
- `( new Foo ).prototype`: There is **no** `prototype` property for instances.
- `Foo.prototype`: Returns an **object** that has `constructor` and `__proto__` as its properties.

### Inside of `prototype`

- There is an endless object chaining inside of every object's `prototype` property.