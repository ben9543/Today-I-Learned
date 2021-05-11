# 4. More on Functions

## Links

- [TypeScript Handbook: More on Functions](https://www.typescriptlang.org/docs/handbook/2/functions.html)

## Defining Function Types

```ts
// Storing as type
type GreetFunction = (a: string) => void;
function greeter(fn: GreetFunction) {
  // ...
}
// Define it right away
function greeter(fn:(a:string) => void){
  // ..
}
```

## Generic Functions

```ts
// Basic Generic Type Function Declaration
function firstElement<Type>(arr: Type[]): Type {
  return arr[0];
}
```

### Constraints

- Use `extends` keyword to restrict available types for the generic types.

```ts
function longest<Type extends { length: number }>(a: Type, b: Type) {
    // ...
}
```

- It might seem like that if the generic type extends some type, then it can be the type. But those two are different types.

```ts
interface IType {
  length: number
}

function minimumLength<Type extends IType>(
  obj: Type,
  minimum: number
): Type {
  if (obj.length >= minimum) {
    return obj;
  } else {
    const newObj:IType = {
      length: 1000
    }
    return newObj;
  }
}
```

- In the example, we declared that we are going to return `Type` not `IType`. So the code will end up causing error, even though `Type` extends `IType`.
