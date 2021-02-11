# Difference between throws and throw

[source 1](https://beginnersbook.com/2013/04/difference-between-throw-and-throws-in-java/)
[source 2](https://www.geeksforgeeks.org/throw-throws-java/)

### Throws

- Throws clause is used to declare an exception, which means it works similar to the try-catch block.

- `throws ArithmeticException;`

- Throws keyword is required only to convince compiler and usage of throws keyword does not prevent abnormal termination of program.

- Throws keyword is required only for checked exception and usage of throws keyword for unchecked exception is meaningless.

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
