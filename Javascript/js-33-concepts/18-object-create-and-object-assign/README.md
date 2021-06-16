# 18. Object.create and Object.assign

## Links

- [33-js-concepts repo #18](https://github.com/leonardomso/33-js-concepts#18-objectcreate-and-objectassign)

- [MDN: Object.create](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create)

- [MDN: Object.assign](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)

- [Understanding the difference between Object.create() and the new operator](https://medium.com/@jonathanvox01/understanding-the-difference-between-object-create-and-the-new-operator-b2a2f4749358)


## 1. `Object.create`

- The `Object.create()` method creates a new object, using an existing object as the prototype of the newly created object.

- In the following code, Initialize maddie using Object.create(dog), which creates a completely new object with its prototype set to dog.

```js
var dog = {
    eat: function() {
        console.log(this.eatFood)
    }
};

var maddie = Object.create(dog);
console.log(dog.isPrototypeOf(maddie)); //true
```

### `Object.create()` vs `new`

- The following code shows the way of creating a new object with `new` keyword.

```js
var Dog = function(){
    this.eatFood = 'NomNomNom';
    this.eat = function(){
        console.log(this.eatFood)
    }
};

var maddie = new(Dog);
console.log(maddie instanceof Dog); // True
```

- The outputs are the same, but the process are a little bit different.


    1. `maddie` inherits the prototype of the constructor function

    2. Executes constructor with “this” set to object created in step one.

    3. Returns created object (unless constructor returns the object)

- Even though `Object.create()` sets its prototype to `Dog`, `buddy` does not have access to `this.pupper` in the constructor. This is due to the important difference that `new Dog` actually **runs constructor code**, whereas `Object.create` **will not execute the constructor code.**


## 2. `Object.assign`
