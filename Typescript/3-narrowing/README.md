# 3. Narrowing

## More about narrowing

- There are a couple of different constructs TypeScript understands for narrowing.

- Mostly about null and undefined checking

### Using `typeof`

- Possible outputs

    - "string"
    - "number"
    - "bigint"
    - "boolean"
    - "symbol"
    - "undefined"
    - "object"
    - "function"

- It is important to know that `typeof null === 'object'`

### Using `if`

- Inputs that results in false

    - 0
    - NaN
    - "" (the empty string)
    - 0n (the bigint version of zero)
    - null
    - undefined

- Following example will narrow down the union type to string[] by checking truthiness of `strs`

```ts
function printAll(strs: string | string[] | null) {
  if (strs && typeof strs === "object") // Checking both if and typeof to narrow down
  {
    for (const s of strs) {
      console.log(s);
    }
  }
}
```

### Using negation (`!`, `!=`, `!==`)

- Notice that `!=` and `==` for either `null` or `undefined` will check the possibility for both `null` and `undefined`

### Using instanceof

- We can also use `instanceof` to check most values that can be constructed with `new` keyword


### Discrimnated Unions (real life examples)

```ts
interface Circle {
  kind: "circle";
  radius: number;
}

interface Square {
  kind: "square";
  sideLength: number;
}

type Shape = Circle | Square;

function getArea(shape: Shape) {
  return Math.PI * shape.radius ** 2; // Error
  // Property 'radius' does not exist on type 'Shape'.
  // Property 'radius' does not exist on type 'Square'.
}
```

- When `radius` was optional, we got an error (only in `strictNullChecks`) because TypeScript couldn’t tell whether the property was present.

```ts
function getArea(shape: Shape) {
    if (shape.kind === "circle") // Check 'kind'
      return Math.PI * shape.radius ** 2;
}
```

- When every type in a union contains a common property with literal types, TypeScript considers that to be a discriminated union, and can narrow out the members of the union.

```ts
// Example with using switch
function getArea(shape: Shape) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;

    case "square":
      return shape.sideLength ** 2;
  }
}
```

- Therefore, whenever you are creating union types, it is good to implement literal types inside of each type so that you can narrow it down later

### Using `never` and `unknown` type

- [When to use `never` and `unknown` in TypeScript
](https://blog.logrocket.com/when-to-use-never-and-unknown-in-typescript-5e4d6c5799ad/)
