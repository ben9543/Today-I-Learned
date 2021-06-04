# 17. Prototype Inheritance and Prototype Chain

## 1. Links

- [Understading JavaScript: Prototype and Inheritance](https://hackernoon.com/understanding-javascript-prototype-and-inheritance-d55a9a23bde2)
- [Prototype vs Class](https://medium.com/@parsyval/javascript-prototype-vs-class-a7015d5473b)
- [Difference between `call` and `super`](https://stackoverflow.com/questions/38034059/javascript-whats-the-difference-between-call-and-super)

## 2. What's `prototype`?

- Almost all objects in JavaScript have the `prototype` property. 
- The `prototype` is a **reference to another object** and it is used whenever JS can’t find the property you’re looking for on the current object.

## 3. Problems with using `prototype` for inheritence

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

## 4. Difference between `prototype` and `class`

## 5. Difference between `call()` and `super()`