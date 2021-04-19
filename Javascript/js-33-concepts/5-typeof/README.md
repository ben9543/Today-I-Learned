# 5. == vs === vs typeof

## Triple Equals

- When using triple equals === in JavaScript, we are testing for strict equality.
- This means both the type and the value we are comparing have to be the same.

```
false === 0
// false (Different type and different value)
```

```
false == 0
// true (Different type but same value)
```

```
77 === '77'
// false (Number v. String)
```

```
77 == '77'
// true 
```
