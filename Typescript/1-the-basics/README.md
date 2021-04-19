# 1. The Basics

## Why do we need types in JavaScript?

- A `type` is the concept of describing which values can be passed to a function and which will crash.

- JavaScript only truly provides dynamic typing - running the code to see what happens, which makes it super hard to predict how the codes would run.

- The ECMAScript specification has explicit instructions on how the language should behave when it runs into something unexpected.

    * For example, the specification says that trying to call something that isn’t callable should throw an error. But accessing a property that doesn’t exist on an object should throw an error too. Instead, JavaScript gives us different behavior and returns the value `undefined`.

    * Example

        ```js
        const user = {
          name: "Daniel",
          age: 26,
        };
        user.location; // returns undefined
        ```
## Get Started with Typescript

- Run `npm install -g typescript`

- Compile `.ts` files with `tsc` command.

- If you want to run the `.ts` file right away, use `npx ts-node <YOUR_TS_FILE>`

- You can specify type-strictness with `tsconfig.json` file.

    * The two biggest ones you should know about are `noImplicitAny` and `strictNullChecks`.

    * Turning on the `noImplicitAny` flag will issue an error on any variables whose type is implicitly inferred as `any`. Because using `any` often defeats the purpose of using TypeScript in the first place. The less you use `any`, the more your program gets secure.

    * By default, values like `null` and `undefined` are assignable to any other type - this is not good at all! The `strictNullChecks` flag makes handling `null` and `undefined` more explicit, and spares us from worrying about whether we forgot to handle `null` and `undefined`.
