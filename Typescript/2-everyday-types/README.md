# 2. Everyday Types

## Primitive Types

### Common

    1. string

    2. number

    3. boolean

    * Always **lowercase**

### Arrays

- To specify an Array type, we use `[]` after the type.

    * Example: `string[]`, `number[]`

- Also, `Array<T>` is equivalent.

    * Example: `Array<string>`, `Array<number>`

- Note that `[number]` is a different thing => `tuple` types.

### Any

- TypeScript also has a special type, `any`, that you can use whenever you don’t want a particular value to cause typechecking errors.

- You usually want to avoid this, though, because any isn’t type-checked. Use the compiler flag `noImplicitAny` to flag any implicit any as an error.

### Type Annotations on Variables

- TypeScript doesn’t use “types on the left”-style declarations like `int x = 0`; Type annotations will always go **after** the thing being typed.

### Functions

1. Parameter Type Annotations

    ```ts
    function greet(name: string) { ... }
    ```

    * Notice: Even if you don’t have type annotations on your parameters, TypeScript will still check that you passed the right number of arguments.

2. Return Type Annotations

    ```ts
    function greet(name: string):number { return ... }
    ```
## Object Types

- We can simply list its properties and their types.

- Example

    ```ts
    function printCoord(pt: { x: number; y: number }) { ... }
    /*
    (parameter) pt: {
    x: number;
    y: number;*/
    }
    ```
- Optional Properties: Put `?` after the property's name

    ```ts
    // y is optional
    function printCoord(pt: { x: number; y?: number }) { ... }
    ```

- In JavaScript, if you access a property that doesn’t exist, you’ll get the value `undefined` rather than a runtime error. Because of this, when you read from an optional property, **you’ll have to check for undefined before using it.**

    1. Unhandled Case
        ```ts
        function printName(obj: { first: string; last?: string }) {
          // Error - might crash if 'obj.last' wasn't provided!
          console.log(obj.last.toUpperCase());
          // -> Object is possibly 'undefined'.
        }
        ```

    2. Handled Case
        ```ts
        function printName(obj: { first: string; last?: string }){
            if (obj.last !== undefined) {
              // OK
              console.log(obj.last.toUpperCase());
            }
            // A safe alternative using modern JavaScript syntax:
            console.log(obj.last?.toUpperCase());
        }
        ```
## Union Types

- Defining Union Types

    ```ts
    function printId(id: number | string) { ... }
    ```

- TypeScript will only allow you to do things with the union **if that thing is valid for every member of the union.**

    ```ts
    function printId(id: number | string) {
      console.log(id.toUpperCase());
    }

    // => Property 'toUpperCase' does not exist on type 'string | number'.
    // => Property 'toUpperCase' does not exist on type 'number'.
    ```

- Narrowing Union Types

    - Handle with `if else`

    - Example of using `typeof` to specify the work by each type

        ```ts
        function printId(id: number | string) {
          if (typeof id === "string") {
            // In this branch, id is of type 'string'
            console.log(id.toUpperCase());
          } else {
            // Here, id is of type 'number'
            console.log(id);
          }
        }
        ```

    - If every member in a union has a property in common, you can use that property without narrowing

## Type Aliases

- We can create a type annotation and keep using it over and over again.

    ```ts
    type Point = {
      x: number;
      y: number;
    };
    function printCoord(pt: Point){ ... }
    ```
- A type alias can name a union type

    ```ts
    type ID = number | string;
    ```

## Interfaces

- An interface declaration is another way to name an object type

### Differences Between Type Aliases and Interfaces

- Almost all features of an interface are available in type

- The key distinction is that **a type cannot be re-opened to add new properties vs an interface which is always extendable**

- Cannot say it is impossible to extend a type, but if you want to mutate the type annotation, go for `interface` always

    ```ts
    interface Animal {
      name: string
    }

    interface Bear extends Animal {
      honey: boolean
    }
    ```
## Type Assertions

- Sometimes you will have information about the type of a value that TypeScript can’t know about. In this situation, you can use a type assertion to specify a more specific type

- Type assertions are removed by the compiler and won’t affect the runtime behavior of your code.

- Use `as` keyword

## Literal Types

- Combining literals into unions becomes much more useful concept

- You can **restrict** expected inputs with Literal Types

- String Literal Example

    ```ts
    function printText(s: string, alignment: "left" | "right" | "center") {
      // ...
    }
    printText("Hello, world", "left");
    printText("G'day, mate", "centre");
    // Error => Argument of type '"centre"' is not assignable to parameter of type '"left" | "right" | "center"'.
    ```
- Numeric Literal Example

    ```ts
    function compare(a: string, b: string): -1 | 0 | 1 {
      return a === b ? 0 : a > b ? 1 : -1;
    }
    ```

- Combining with Non-Literal Types

    ```ts
    interface Options {
      width: number;
    }
    function configure(x: Options | "auto") {
      // ...
    }
    configure({ width: 100 });
    configure("auto");
    configure("automatic"); // => Error
    ```
## `null` and `undefined`

- Normally with `strictNullChecks` on, you need to check `null` or `undefined` manually by doing if else typechecking.

- Non-null Assertion Operator (Postfix!)

    * Writing ! after any expression is effectively a type assertion that the value isn’t null or undefined

    ```ts
    function liveDangerously(x?: number | undefined) {
      // No error
      console.log(x!.toFixed());
    }
    ```
