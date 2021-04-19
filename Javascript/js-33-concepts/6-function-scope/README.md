# 6.Function Scope, Block Scope and Lexical Scope

[Article Link](https://www.deadcoderising.com/2017-04-11-es6-var-let-and-const-the-battle-between-function-scope-and-block-scope/)

## var

With using var, the variable is reachable even outside of the block.

```javascript
if(true) {  
  var name = 'Luke'
}

console.log(name); // 'Luke'  
```

## let, const

From ES6, `let` and `const` were introduced.

```javascript
if(true) {  
  let name = 'Luke'
}

console.log(name); // name is not defined  
```

## When function scope gets confusing

Function scope only covers block of function. So if statement's block will affect to name variable which located in outside of the block.

```javascript
var name = 'Luke';

if (true) {  
  var name = 'Phil';
  console.log(name); // 'Phil'
}

console.log(name); // 'Phil'  
```

Can be fixed by using `let
`
```javascript
let name = 'Luke';

if (true) {  
  let name = 'Phil';
  console.log(name); // 'Phil'
}

console.log(name); // 'Luke'  
```
