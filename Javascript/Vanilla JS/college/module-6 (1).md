# Th Secret Life of Objects (about OOP)

## Encapsulation

- The core idea in object-oriented programming is to divide programs into smaller pieces and make each piece responsible for managing its own state.

- Interfaces are sets that limited of functions or bindings, hiding their precise implementation.

- JavaScript does not support distinction of private and public properties to its objects.

- Typically, the available interface is described in documentation or comments.

- It is also common to put an underscore (_) character at the start of property names to indicate that those properties are private.

- Separating interface from implementation is a great idea. It is usually called encapsulation.

## Methods

- Methods are nothing more than properties that hold function values.

- You can pass `this` as parameter using `Function.call()`

- **Arrow functions are different — they do not bind their own this but can see the this binding of the scope around them.**

    ```js
    function normalize() {
        console.log("\"this\" in nomarlize(): ", this);
        console.log(this.coords.map(n => {
            console.log("\"this\" in map(): ",this);
            return n / this.length;
        }));
    };

    normalize.call({coords: [0, 2, 3], length: 5});
    //=>"this" in nomarlize():  { coords: [ 0, 2, 3 ], length: 5 }
    //"this" in map():  { coords: [ 0, 2, 3 ], length: 5 }
    //"this" in map():  { coords: [ 0, 2, 3 ], length: 5 }
    //"this" in map():  { coords: [ 0, 2, 3 ], length: 5 }
    //[ 0, 0.4, 0.6 ]
    ```
- Let's compare more functions using `function` keyword and using arrows

    ```js
    function normalize() {
        console.log("\"this\" in nomarlize(): ", this);
        function insideFunction(){
            console.log(this);
        }
        const insideArrowFunction = () => {
            console.log(this);
        }
        insideFunction(); //Prints Function Object
        insideArrowFunction(); // Prints `this` of normalize which is {coords: [0, 2, 3], length: 5}
    }
    normalize.call({coords: [0, 2, 3], length: 5});

    //=>"this" in nomarlize():  { coords: [ 0, 2, 3 ], length: 5 }
    // "this" in insideFunction():  <ref *1> Object [global]
    //"this" in insideArrowFunction(): { coords: [ 0, 2, 3 ], length: 5 }
    ```

## Prototypes

- A prototype is another object that is used as a fallback source of properties.

- When an object gets a request for a property that it does not have, its prototype will be searched for the property, then the prototype’s prototype, and so on.

- An empty object's prototype is `Object.prototype`.

- `Object.getPrototypeOf` returns the prototype of an object.

- Functions derive from `Function.prototype`, and arrays derive from` Array.prototype`.

```js
    console.log(Object.getPrototypeOf(Math.max) == Function.prototype);
    // => true

    console.log(Object.getPrototypeOf([]) == Array.prototype);
    // => true

    console.log(Object.getPrototypeOf(Math.max) == Object.prototype);
    // => false

    console.log(Object.getPrototypeOf([]) == Object.prototype);
    // => false
```

## Classes

- If you put the keyword new in front of a function call, the function is treated as a constructor.

- Constructors (all functions, in fact) automatically get a property named prototype, which by default holds a plain, empty object that derives from Object.prototype

- Class declarations currently allow only methods to be added to the prototype.

- You are allowed to omit the class name in a class expression.

## Overriding derived properties

- When you add a property to an object, whether it is present in the prototype or not, the property is added to the object itself.

- **If there was already a property with the same name in the prototype, this property will no longer affect the object, as it is now hidden behind the object’s own property.**

```js
class Rabbit {
    constructor(teeth){
        this.teeth = teeth;
    }
    getTeeth(){
        return `${this.teeth} Teeth`;
    }
};

let r = new Rabbit("Sharp");

// Adding new property though prototype after instance created
Rabbit.prototype.newProp = "new";
Rabbit.prototype.newPropFunc = function(){ return this.newProp; };

console.log(r.getTeeth()); //Sharp Teeth
console.log(r.newPropFunc()); //new

Rabbit.prototype.newProp = "newnew"; //Changing prototype property
console.log(r.newPropFunc());//newnew => Works!

Rabbit.prototype.teeth = "Normal"; //Changing already existing this.teeth
console.log(r.getTeeth()); //Still prints out `Sharp Teeth` => Doesn't change
```

## Maps

- A map (noun) is a data structure that associates values (the keys) with other values.

- Using a plain object to map elements is unsecure. We can avoid this by creating empty object first by doing `Object.create(null)`

- But using `Map` class is much easier.

- `set`, `get`, and `has` are part of the interface of the `Map` object.

- Example

    ```js
    let ages = new Map();
    ages.set("Boris", 39);
    ages.set("Liang", 22);
    ages.set("Júlia", 62);

    console.log(`Júlia is ${ages.get("Júlia")}`);
    // → Júlia is 62
    console.log("Is Jack's age known?", ages.has("Jack"));
    // → Is Jack's age known? false
    console.log(ages.has("toString"));
    // → false
    ```

## Inheritance

- You can perform inheritance with `extends` and `super` keyword.

- The use of the word `extends` indicates that this class shouldn’t be directly based on the default `Object` prototype but on some other class.

- `super` exits because this refers to the current class, not to its parent class.

- `super()` => superclass's constructor.

- `super.<property>` => accessing to superclass's property

```js
class SymmetricMatrix extends Matrix {
  constructor(size, element = (x, y) => undefined) {
    super(size, size, (x, y) => {
      if (x < y) return element(y, x);
      else return element(x, y);
    });
  }

  set(x, y, value) {
    super.set(x, y, value); // using superclass's set function
    if (x != y) {
      super.set(y, x, value); // using superclass's set function
    }
  }
}

let matrix = new SymmetricMatrix(5, (x, y) => `${x},${y}`);
console.log(matrix.get(2, 3));
// → 3,2
```
