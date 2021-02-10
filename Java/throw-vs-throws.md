# Difference between throws and throw

[source](https://beginnersbook.com/2013/04/difference-between-throw-and-throws-in-java/)

### Throws

- Throws clause is used to declare an exception, which means it works similar to the try-catch block.

- `throws ArithmeticException;`

- Basic usage

```java
//Declaring arithmetic exception using throws
void sample() throws ArithmeticException{
   //Statements
}

//Declaring multiple exceptions using throws
void myMethod() throws ArithmeticException, NullPointerException{
   //Statements where exception might occur
}
```

### Throw

- Throw keyword is used to throw an exception explicitly.

- `throw new ArithmeticException("Arithmetic Exception");`
