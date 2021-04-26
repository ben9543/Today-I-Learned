# 15 this, call, apply and bind

## Links

- [33-js-concepts #15 this, call apply and bind](https://github.com/leonardomso/33-js-concepts#15-this-call-apply-and-bind)


## 1. `call`

- Lets us pass down objects' properties to functions.

- This is useful when your function using `this`.

- Can be replaced with passing objects and de-referencing.

```js
function greet () {
  alert(`Hello, my name is ${this.name}`)
}

const user = {
  name: 'Tyler',
  age: 27,
}
greet.call(user);
```

- Almost same as

```js
function greet ({ name, age }) {
  alert(`Hello, my name is ${name}`)
}

const user = {
  name: 'Tyler',
  age: 27,
}
greet(user);
```

- This can be useful when you want to use differentiate `this` and arguments.

```js
function greet (l1, l2, l3) {
  alert(
    `Hello, my name is ${this.name} and I know ${l1}, ${l2}, and ${l3}`
  )
}
const user = {
  name: 'Tyler',
  age: 27,
}

const languages = ['JavaScript', 'Ruby', 'Python']

greet.call(user, ...languages);
// or
greet.apply(user, languages);
```

## 2. `apply`

- Old version of spread operator `...`

```js
let numArray = [1,2,3];

console.log(Math.min.apply(null, numArray)); // 1
console.log(Math.min(...numArray)); // 1
```

## 3. `bind`

- Typically used to refer to parental `this` in an instance.

- Notice that `bind` does return a function. Calling bind does not mean you are calling the function.

```js
let button = function(content) {
    this.content = content;
}

button.prototype.click = function(){
    console.log(`${this.content} clicked.`)
}

let newButton = new button('add')
let looseClick = newButton.click;
let looseClick2 = newButton.click.bind(newButton);

newButton.click(); // this.content: add
looseClick();      // this.content: undefined
looseClick2();     // this.content: add
```

```js
const m = {
    x: 42,
    getX: function() {
      return this.x;
    }
};

const unboundGetX = m.getX; // this.x = undefined
const boundGetX = m.getX.bind(m);
console.log(boundGetX())
```

- Experiment with `class`

```js
class Test{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
    getX(){
        return this.x;
    }
}

let t = new Test(10, 12);
let func = t.getX;
let func2 = t.getX.bind(t); // Or func.bind(t)
console.log(func());
console.log(func2());
```
